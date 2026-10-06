// fael.tech - palcos dos architecture cards
// - serviços: constelação de nós ligados, com pulsos correndo pelas arestas
// - órbita: oito pontos em dois anéis, eco da órbita do estado "carregando"
// - varredura: grade de células de 4px que uma linha verifica ao passar
//
// Depende de canvas.js. Tudo pausa fora da tela; com "reduzir movimento",
// cada palco desenha um quadro parado.

(function () {
  const { DPR_MAX, tokenColor, onThemeChange, createLoop } = window.ftCanvas;
  const TAU = Math.PI * 2;

  // Gerador determinístico: o desenho é o mesmo a cada carga e a cada resize
  function seeded(seed) {
    return () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };
  }

  // Monta canvas, cores e laço comuns aos três palcos.
  // `setup(width, height)` recalcula a cena; `draw(ctx, colors, time, animated)` pinta.
  function stageCanvas(stage, setup, draw) {
    const canvas = stage.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const size = { width: 0, height: 0 };
    let colors = {};

    function readColors() {
      colors = {
        accent: tokenColor(stage, '--ft-accent'),
        line: tokenColor(stage, '--ft-line-strong'),
        faint: tokenColor(stage, '--ft-line'),
      };
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, DPR_MAX);
      size.width = stage.clientWidth;
      size.height = stage.clientHeight;
      canvas.width = Math.round(size.width * dpr);
      canvas.height = Math.round(size.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      setup(size.width, size.height);
    }

    function frame(time, animated) {
      ctx.clearRect(0, 0, size.width, size.height);
      draw(ctx, colors, time, animated, size);
    }

    readColors();
    resize();
    const loop = createLoop(stage, frame);
    new ResizeObserver(() => { resize(); loop.redraw(); }).observe(stage);
    onThemeChange(() => { readColors(); loop.redraw(); });
  }

  // ── SIS-01 · Serviços ──
  function initServices(stage) {
    const GAP = 56;      // distância mínima entre nós
    const SNAP = 4;      // nós na grade de 4px
    let nodes = [];
    let edges = [];

    function setup(width, height) {
      const random = seeded(7);
      const margin = 32;
      const target = Math.min(18, Math.max(8, Math.round((width * height) / 9000)));
      nodes = [];
      for (let tries = 0; nodes.length < target && tries < 2000; tries++) {
        const x = Math.round((margin + random() * (width - 2 * margin)) / SNAP) * SNAP;
        const y = Math.round((margin + random() * (height - 2 * margin)) / SNAP) * SNAP;
        if (nodes.every((n) => Math.hypot(n.x - x, n.y - y) >= GAP)) nodes.push({ x, y });
      }
      // o nó mais perto do centro é o núcleo
      const cx = width / 2;
      const cy = height / 2;
      nodes.sort((a, b) => Math.hypot(a.x - cx, a.y - cy) - Math.hypot(b.x - cx, b.y - cy));

      // cada nó liga aos dois vizinhos mais próximos, sem aresta repetida
      const seen = new Set();
      edges = [];
      nodes.forEach((node, i) => {
        nodes
          .map((other, j) => ({ j, d: Math.hypot(other.x - node.x, other.y - node.y) }))
          .filter(({ j }) => j !== i)
          .sort((a, b) => a.d - b.d)
          .slice(0, 2)
          .forEach(({ j }) => {
            const key = Math.min(i, j) + ':' + Math.max(i, j);
            if (seen.has(key)) return;
            seen.add(key);
            edges.push({ a: nodes[i], b: nodes[j], phase: random(), speed: 0.12 + random() * 0.16 });
          });
      });
    }

    function draw(ctx, colors, time) {
      ctx.lineWidth = 1;
      ctx.strokeStyle = colors.line;
      ctx.beginPath();
      for (const { a, b } of edges) {
        ctx.moveTo(a.x + 0.5, a.y + 0.5);
        ctx.lineTo(b.x + 0.5, b.y + 0.5);
      }
      ctx.stroke();

      // pulsos: um ponto por aresta, com rastro curto
      ctx.fillStyle = colors.accent;
      for (const edge of edges) {
        const t = (edge.phase + time * edge.speed) % 1;
        for (let k = 0; k < 4; k++) {
          const s = t - k * 0.025;
          if (s < 0) continue;
          ctx.globalAlpha = 1 - k * 0.28;
          const x = edge.a.x + (edge.b.x - edge.a.x) * s;
          const y = edge.a.y + (edge.b.y - edge.a.y) * s;
          ctx.fillRect(x - 1.5, y - 1.5, 3, 3);
        }
      }
      ctx.globalAlpha = 1;

      // nós: quadrados de 8px; o núcleo ganha anel na cor da marca
      nodes.forEach((node, i) => {
        if (i === 0) {
          ctx.strokeStyle = colors.accent;
          ctx.beginPath();
          ctx.arc(node.x + 0.5, node.y + 0.5, 12, 0, TAU);
          ctx.stroke();
          ctx.fillStyle = colors.accent;
          ctx.fillRect(node.x - 4, node.y - 4, 8, 8);
          return;
        }
        ctx.fillStyle = colors.line;
        ctx.fillRect(node.x - 3, node.y - 3, 6, 6);
      });
    }

    stageCanvas(stage, setup, draw);
  }

  // ── LID-02 · Órbita ──
  function initOrbit(stage) {
    let center = { x: 0, y: 0 };
    let rings = [];

    function setup(width, height) {
      center = { x: width / 2, y: height / 2 };
      const outer = Math.min(width, height) / 2 - 32;
      // dois anéis, quatro squads em cada: o time que existia e o que chegou
      rings = [
        { r: outer * 0.55, period: 26, offset: 0.4, weight: 'line' },
        { r: outer, period: 40, offset: 0, weight: 'accent' },
      ];
    }

    function draw(ctx, colors, time) {
      const { x, y } = center;
      ctx.lineWidth = 1;

      // marcas de grau no anel externo, a cada 15°
      const outer = rings[1].r;
      ctx.strokeStyle = colors.faint;
      ctx.beginPath();
      for (let i = 0; i < 24; i++) {
        const a = (i / 24) * TAU;
        ctx.moveTo(x + Math.cos(a) * (outer + 6), y + Math.sin(a) * (outer + 6));
        ctx.lineTo(x + Math.cos(a) * (outer + 10), y + Math.sin(a) * (outer + 10));
      }
      ctx.stroke();

      for (const ring of rings) {
        ctx.strokeStyle = colors.line;
        ctx.beginPath();
        ctx.arc(x, y, ring.r, 0, TAU);
        ctx.stroke();

        const color = ring.weight === 'accent' ? colors.accent : colors.line;
        const turn = ring.offset + (time / ring.period) * TAU;
        for (let i = 0; i < 4; i++) {
          const a = turn + (i / 4) * TAU;
          // rastro: um arco que esmaece atrás do ponto
          ctx.strokeStyle = color;
          ctx.lineWidth = 2;
          for (let k = 0; k < 6; k++) {
            ctx.globalAlpha = 0.32 - k * 0.05;
            ctx.beginPath();
            ctx.arc(x, y, ring.r, a - (k + 1) * 0.05, a - k * 0.05);
            ctx.stroke();
          }
          ctx.globalAlpha = 1;
          ctx.lineWidth = 1;
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(x + Math.cos(a) * ring.r, y + Math.sin(a) * ring.r, ring.weight === 'accent' ? 4 : 3, 0, TAU);
          ctx.fill();
        }
      }

      // centro: ponto da marca com anel
      ctx.fillStyle = colors.accent;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, TAU);
      ctx.fill();
      ctx.strokeStyle = colors.accent;
      ctx.globalAlpha = 0.4;
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, TAU);
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    stageCanvas(stage, setup, draw);
  }

  // ── SEG-03 · Varredura ──
  function initScan(stage) {
    const STEP = 12;     // passo da grade
    const CELL = 4;      // célula de 4px
    const PERIOD = 7;    // segundos por passada
    const FADE = 96;     // largura do esmaecimento no lado do texto
    let cells = [];
    let width = 0;
    let height = 0;

    function setup(w, h) {
      width = w;
      height = h;
      const random = seeded(23);
      const cols = Math.floor(w / STEP);
      const rows = Math.floor(h / STEP);
      const left = (w - (cols - 1) * STEP) / 2;
      const top = (h - (rows - 1) * STEP) / 2;
      cells = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // uma célula em cada catorze é um achado: acende mais forte
          cells.push({ x: left + col * STEP, y: top + row * STEP, flag: random() < 0.07 });
        }
      }
    }

    function draw(ctx, colors, time, animated) {
      const scan = animated ? ((time / PERIOD) % 1) * (width + 160) - 80 : width * 0.62;
      for (const cell of cells) {
        const behind = scan - cell.x;
        // esmaece perto da borda esquerda, onde o card encontra o texto
        const edge = Math.min(1, cell.x / FADE);
        let alpha = 0.55 * edge;
        let color = colors.line;
        if (behind >= 0 && behind < 240) {
          const glow = 1 - behind / 240;
          color = colors.accent;
          alpha = (cell.flag ? 1 : 0.25 + 0.6 * glow) * edge;
        } else if (cell.flag && behind >= 0) {
          color = colors.accent;
          alpha = 0.7 * edge;
        }
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.fillRect(Math.round(cell.x - CELL / 2), Math.round(cell.y - CELL / 2), CELL, CELL);
      }
      // a linha de varredura
      ctx.globalAlpha = Math.min(1, scan / FADE);
      ctx.fillStyle = colors.accent;
      ctx.fillRect(Math.round(scan), 0, 1, height);
      ctx.globalAlpha = 1;
    }

    stageCanvas(stage, setup, draw);
  }

  const INIT = { services: initServices, orbit: initOrbit, scan: initScan };
  document.querySelectorAll('[data-arch]').forEach((stage) => INIT[stage.dataset.arch]?.(stage));
})();
