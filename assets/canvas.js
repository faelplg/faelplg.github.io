// fael.tech - utilitários dos palcos em canvas
// Compartilhados por hero.js e cards.js: cor dos tokens, laço que pausa fora da
// tela e com "reduzir movimento", troca de tema e posição do cursor.
// Carregar antes dos dois.

window.ftCanvas = (function () {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const DPR_MAX = 2;

  // light-dark() só vira cor num estilo computado: uma sonda dentro do palco
  // resolve o token com o color-scheme daquele trecho.
  function tokenColor(scope, token) {
    const probe = document.createElement('span');
    probe.style.color = 'var(' + token + ')';
    scope.appendChild(probe);
    const value = getComputedStyle(probe).color;
    probe.remove();
    return value;
  }

  // "rgb(15, 118, 110)" ou "color(srgb 0.06 0.46 0.43)" para [r, g, b] de 0 a 1
  function toUnitRgb(color) {
    const parts = color.match(/-?[\d.]+/g).slice(0, 3).map(Number);
    return color.startsWith('color(') ? parts : parts.map((n) => n / 255);
  }

  // O tema muda pelo seletor (data-theme na raiz) ou pelo sistema operacional.
  // Os dois quadros de espera deixam a troca sem transições terminar.
  function onThemeChange(callback) {
    const later = () => requestAnimationFrame(() => requestAnimationFrame(callback));
    new MutationObserver(later).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', later);
  }

  // Laço de animação que só roda com o palco visível e com movimento permitido.
  // Parado, `draw` é chamado uma vez para deixar um quadro estático.
  function createLoop(stage, draw) {
    let frame = 0;
    let visible = false;
    const start = performance.now();
    const tick = (now) => {
      draw((now - start) / 1000, true);
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      if (visible && !reducedMotion.matches) {
        frame = requestAnimationFrame(tick);
      } else {
        draw(0, false);
      }
    };
    new IntersectionObserver((entries) => {
      visible = entries[entries.length - 1].isIntersecting;
      sync();
    }).observe(stage);
    reducedMotion.addEventListener('change', sync);
    return { redraw: () => { if (!frame) draw(0, false); } };
  }

  // Posição do cursor dentro do palco, em pixels de CSS. `active` cai no leave.
  function trackPointer(stage) {
    const pointer = { x: 0, y: 0, active: false };
    stage.addEventListener('pointermove', (event) => {
      const box = stage.getBoundingClientRect();
      pointer.x = event.clientX - box.left;
      pointer.y = event.clientY - box.top;
      pointer.active = true;
    });
    stage.addEventListener('pointerleave', () => { pointer.active = false; });
    return pointer;
  }

  return { reducedMotion, DPR_MAX, tokenColor, toUnitRgb, onThemeChange, createLoop, trackPointer };
})();
