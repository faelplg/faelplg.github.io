// fael.tech - site: comportamento compartilhado
// - menu da barra do hero: abre e fecha a nav quando o palco fica estreito (todas as páginas)
// - ano do rodapé

(function () {
  // ── Menu da barra (todas as páginas) ──
  // A nav só some no palco estreito (container query no CSS); aqui só se troca o estado.
  document.querySelectorAll('[data-menu]').forEach((menu) => {
    const button = menu.parentElement.querySelector('[data-menu-toggle]');
    if (!button) return;

    function setOpen(open) {
      menu.dataset.open = String(open);
      button.setAttribute('aria-expanded', String(open));
    }

    // Sem JS a lista fica aberta e o botão oculto; com JS, recolhe e mostra o botão.
    setOpen(false);
    button.hidden = false;
    button.addEventListener('click', () => setOpen(menu.dataset.open !== 'true'));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.dataset.open === 'true') {
        setOpen(false);
        button.focus();
      }
    });
  });
})();

// Ano do rodapé: o HTML já traz o ano da publicação; o script só o mantém atual.
document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});
