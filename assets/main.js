// fael.tech — site: comportamento compartilhado
// - topbar: menu global colapsável em telas < 720px (todas as páginas)
// - scroll-spy: destaca o link da nav lateral correspondente à seção visível (só manual.html)
// - toggle do menu lateral do manual em telas < 1024px

import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from '@vercel/speed-insights';


(function () {
  inject()
  injectSpeedInsights();
  // ── Topbar global (todas as páginas) ──
  const topbarNav = document.getElementById('site-topbar-nav');
  const topbarToggle = document.querySelector('[data-topbar-toggle]');
  if (topbarToggle && topbarNav) {
    const topbarQuery = window.matchMedia('(max-width: 720px)');

    function syncTopbarState(collapsed) {
      topbarNav.setAttribute('data-collapsed', String(collapsed));
      topbarToggle.setAttribute('aria-expanded', String(!collapsed));
    }

    syncTopbarState(topbarQuery.matches);

    topbarToggle.addEventListener('click', () => {
      const isCollapsed = topbarNav.getAttribute('data-collapsed') === 'true';
      syncTopbarState(!isCollapsed);
    });

    topbarQuery.addEventListener('change', (event) => {
      syncTopbarState(event.matches);
    });
  }
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
