// fael.tech - site: comportamento compartilhado
// - menu da barra do hero: abre e fecha a nav quando o palco fica estreito (todas as páginas)
// - scroll-spy: destaca o link da nav lateral correspondente à seção visível (só manual.html)
// - toggle do menu lateral do manual em telas < 1024px

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

    setOpen(false);
    button.addEventListener('click', () => setOpen(menu.dataset.open !== 'true'));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.dataset.open === 'true') {
        setOpen(false);
        button.focus();
      }
    });
  });
})();

(function () {
  const nav = document.getElementById('site-nav');
  const navLinks = nav ? Array.from(nav.querySelectorAll('[data-nav-target]')) : [];
  const sections = navLinks
    .map((link) => document.getElementById(link.dataset.navTarget))
    .filter(Boolean);

  function setActiveLink(id) {
    navLinks.forEach((link) => {
      const isActive = link.dataset.navTarget === id;
      link.classList.toggle('site-nav__link--active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
  }

  // Menu de navegação colapsável em mobile (<1024px)
  const toggle = document.querySelector('[data-nav-toggle]');
  if (toggle && nav) {
    const mediaQuery = window.matchMedia('(max-width: 1023px)');

    function syncCollapsedState(collapsed) {
      nav.setAttribute('data-collapsed', String(collapsed));
      toggle.setAttribute('aria-expanded', String(!collapsed));
    }

    syncCollapsedState(mediaQuery.matches);

    toggle.addEventListener('click', () => {
      const isCollapsed = nav.getAttribute('data-collapsed') === 'true';
      syncCollapsedState(!isCollapsed);
    });

    mediaQuery.addEventListener('change', (event) => {
      syncCollapsedState(event.matches);
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (mediaQuery.matches) {
          syncCollapsedState(true);
        }
      });
    });
  }
})();
