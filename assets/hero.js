// fael.tech - propostas de hero
// - agulhas: campo de ponteiros em Canvas 2D que se alinha ao cursor
// - busto: paralaxe entre o disco e o retrato
// - retícula: meio-tom em WebGL (um fragment shader, sem biblioteca)
//
// Tudo pausa fora da tela. Com "reduzir movimento", cada hero desenha um
// quadro parado e não responde ao cursor.

(function () {
  const { reducedMotion, DPR_MAX, tokenColor, toUnitRgb, onThemeChange, createLoop, trackPointer } = window.ftCanvas;

  // ── 1 · Agulhas ──
  function initNeedles(stage) {
    const canvas = stage.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const pointer = trackPointer(stage);
    const STEP = 32;                          // grade de 4px
    const REACH = 144;                        // raio de influência do cursor
    const REST = Math.atan2(-0.57, 0.82);     // direção do ponteiro da marca
    let width = 0;
    let height = 0;
    let needles = [];
    let colors = {};
    // sem cursor, um ponto de atração vaga devagar pelo campo
    const focus = { x: 0, y: 0 };

    function readColors() {
      colors = { rest: tokenColor(stage, '--ft-line-strong'), near: tokenColor(stage, '--ft-accent') };
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, DPR_MAX);
      width = stage.clientWidth;
      height = stage.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cols = Math.floor(width / STEP);
      const rows = Math.floor(height / STEP);
      const left = (width - (cols - 1) * STEP) / 2;
      const top = (height - (rows - 1) * STEP) / 2;
      needles = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          needles.push({ x: left + col * STEP, y: top + row * STEP, angle: REST, pull: 0 });
        }
      }
      focus.x = width * 0.75;
      focus.y = height * 0.4;
    }

    function needlePath(needle) {
      const length = 5 + needle.pull * 5;
      const half = 1.5 + needle.pull;
      const cos = Math.cos(needle.angle);
      const sin = Math.sin(needle.angle);
      ctx.moveTo(needle.x + cos * length, needle.y + sin * length);
      ctx.lineTo(needle.x - cos * length - sin * half, needle.y - sin * length + cos * half);
      ctx.lineTo(needle.x - cos * length + sin * half, needle.y - sin * length - cos * half);
      ctx.closePath();
    }

    function draw(time, animated) {
      if (animated) {
        const targetX = pointer.active ? pointer.x : width * (0.72 + 0.2 * Math.sin(time * 0.31));
        const targetY = pointer.active ? pointer.y : height * (0.45 + 0.3 * Math.sin(time * 0.23 + 1));
        focus.x += (targetX - focus.x) * 0.08;
        focus.y += (targetY - focus.y) * 0.08;
      }
      for (const needle of needles) {
        const dx = focus.x - needle.x;
        const dy = focus.y - needle.y;
        const pull = animated ? Math.exp(-(dx * dx + dy * dy) / (2 * REACH * REACH)) : 0;
        const sway = animated ? Math.sin(needle.x * 0.011 + needle.y * 0.017 + time * 0.5) * 0.22 : 0;
        // menor arco entre o repouso e a direção do foco
        let turn = Math.atan2(dy, dx) - REST;
        turn = Math.atan2(Math.sin(turn), Math.cos(turn));
        const target = REST + sway + turn * Math.min(1, pull * 1.6);
        if (animated) {
          needle.angle += (target - needle.angle) * 0.14;
          needle.pull += (pull - needle.pull) * 0.14;
        } else {
          needle.angle = REST;
          needle.pull = 0;
        }
      }

      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = 1;
      ctx.fillStyle = colors.rest;
      ctx.beginPath();
      needles.forEach(needlePath);
      ctx.fill();

      ctx.fillStyle = colors.near;
      for (const needle of needles) {
        if (needle.pull < 0.03) continue;
        ctx.globalAlpha = Math.min(1, needle.pull * 1.4);
        ctx.beginPath();
        needlePath(needle);
        ctx.fill();
      }
    }

    readColors();
    resize();
    const loop = createLoop(stage, draw);
    new ResizeObserver(() => { resize(); loop.redraw(); }).observe(stage);
    onThemeChange(() => { readColors(); loop.redraw(); });
  }

  // ── 2 · Busto ──
  function initBust(stage) {
    stage.addEventListener('pointermove', (event) => {
      if (reducedMotion.matches) return;
      const box = stage.getBoundingClientRect();
      stage.style.setProperty('--hero-px', (((event.clientX - box.left) / box.width) * 2 - 1).toFixed(3));
      stage.style.setProperty('--hero-py', (((event.clientY - box.top) / box.height) * 2 - 1).toFixed(3));
    });
    stage.addEventListener('pointerleave', () => {
      stage.style.removeProperty('--hero-px');
      stage.style.removeProperty('--hero-py');
    });
  }

  // ── 3 · Retícula ──
  const HALFTONE_VERTEX = 'attribute vec2 position; void main() { gl_Position = vec4(position, 0.0, 1.0); }';
  const HALFTONE_FRAGMENT = `
    precision highp float;
    uniform vec2 uSize;      // palco em pixels do dispositivo
    uniform float uCell;     // lado de uma célula, em pixels do dispositivo
    uniform float uTime;
    uniform vec3 uPointer;   // xy em pixels do dispositivo, z = presença (0 a 1)
    uniform vec3 uInk;
    uniform vec3 uPaper;

    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
                 mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
    }
    // matriz de Bayer 8x8 sem operações de bit (GLSL ES 1.0)
    float bayer2(vec2 a) { a = floor(a); return fract(a.x / 2.0 + a.y * a.y * 0.75); }
    float bayer4(vec2 a) { return bayer2(0.5 * a) * 0.25 + bayer2(a); }
    float bayer8(vec2 a) { return bayer4(0.5 * a) * 0.25 + bayer2(a); }

    void main() {
      vec2 cell = floor(gl_FragCoord.xy / uCell);
      vec2 uv = (cell + 0.5) * uCell / uSize;
      vec2 p = (cell * uCell) / uSize.y;

      // faixas que sobem para a direita, na direção do ponteiro da marca
      float flow = noise(p * 2.2 + vec2(uTime * 0.05, -uTime * 0.035));
      float bands = 0.5 + 0.5 * sin(dot(p, vec2(0.82, 0.57)) * 7.0 + flow * 5.0 - uTime * 0.35);
      float tone = mix(flow, bands, 0.7);

      // o campo fecha no canto do texto (embaixo, à esquerda) e sob a barra
      tone *= smoothstep(0.42, 1.2, (uv.x + uv.y) * 0.62);
      tone *= 1.0 - smoothstep(uSize.y - 30.0 * uCell, uSize.y - 12.0 * uCell, gl_FragCoord.y);

      vec2 away = (gl_FragCoord.xy - uPointer.xy) / uSize.y;
      tone += uPointer.z * 0.45 * exp(-dot(away, away) / 0.03);

      float on = step(bayer8(cell) + 0.02, tone * 0.72);
      // ponto de 3/4 da célula: a retícula lê como grade, não como mancha
      vec2 inside = step(fract(gl_FragCoord.xy / uCell), vec2(0.75));
      gl_FragColor = vec4(mix(uPaper, uInk, on * inside.x * inside.y), 1.0);
    }`;

  function initHalftone(stage) {
    const canvas = stage.querySelector('canvas');
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false });
    if (!gl) return; // sem WebGL fica o fundo liso do palco

    const program = gl.createProgram();
    for (const [type, source] of [[gl.VERTEX_SHADER, HALFTONE_VERTEX], [gl.FRAGMENT_SHADER, HALFTONE_FRAGMENT]]) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      gl.attachShader(program, shader);
    }
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    // um triângulo que cobre a tela
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uniform = (name) => gl.getUniformLocation(program, name);
    const uSize = uniform('uSize');
    const uCell = uniform('uCell');
    const uTime = uniform('uTime');
    const uPointer = uniform('uPointer');
    const uInk = uniform('uInk');
    const uPaper = uniform('uPaper');

    const pointer = trackPointer(stage);
    let dpr = 1;
    let presence = 0;

    function readColors() {
      gl.uniform3fv(uInk, toUnitRgb(tokenColor(stage, '--ft-accent')));
      gl.uniform3fv(uPaper, toUnitRgb(tokenColor(stage, '--ft-bg')));
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, DPR_MAX);
      canvas.width = Math.round(stage.clientWidth * dpr);
      canvas.height = Math.round(stage.clientHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uSize, canvas.width, canvas.height);
      gl.uniform1f(uCell, 4 * dpr);
    }

    function draw(time, animated) {
      presence += ((animated && pointer.active ? 1 : 0) - presence) * 0.08;
      gl.uniform1f(uTime, time);
      gl.uniform3f(uPointer, pointer.x * dpr, canvas.height - pointer.y * dpr, animated ? presence : 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    readColors();
    resize();
    const loop = createLoop(stage, draw);
    new ResizeObserver(() => { resize(); loop.redraw(); }).observe(stage);
    onThemeChange(() => { readColors(); loop.redraw(); });
  }

  const INIT = { needles: initNeedles, bust: initBust, halftone: initHalftone };
  document.querySelectorAll('[data-hero]').forEach((stage) => INIT[stage.dataset.hero]?.(stage));
})();
