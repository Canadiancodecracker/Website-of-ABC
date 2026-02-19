/**
 * ============================================================
 *  ABC CHEMICAL — mobile-fix.js
 *  Companion JS for mobile-fix.css
 *
 *  HOW TO USE:
 *    Add ONE line just before </body> in index.html:
 *    <script src="assets/js/mobile-fix.js"></script>
 *
 *  What this does:
 *    1. Injects a hamburger button into your existing nav
 *    2. Builds a mobile drawer from your existing nav links
 *    3. Shows sticky CTA bar after scrolling past hero
 *    4. Animates counters when scrolled into view
 *    5. Adds scroll class to nav for background change
 * ============================================================
 */

(function () {
  'use strict';

  /* =========================================================
     HELPERS
     ========================================================= */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  /* =========================================================
     1. NAV SCROLL CLASS
        Adds .is-scrolled to <nav> or <header> when page scrolls
        Your existing CSS can use this for background changes.
     ========================================================= */
  var navEl = $('nav') || $('header') || $('.site-header') || $('.navbar');

  function handleNavScroll() {
    if (!navEl) return;
    if (window.scrollY > 60) {
      navEl.classList.add('is-scrolled');
    } else {
      navEl.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* =========================================================
     2. HAMBURGER BUTTON INJECTION
        Injects a .hamburger button into the nav if one doesn't
        already exist.
     ========================================================= */
  var existingHamburger = $('.hamburger, .menu-toggle, [aria-label="Menu"], [aria-label="menu"]');

  if (!existingHamburger && navEl) {
    var btn = document.createElement('button');
    btn.className = 'hamburger';
    btn.setAttribute('aria-label', 'Toggle menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span></span><span></span><span></span>';
    // Insert as last child of nav
    navEl.appendChild(btn);
    existingHamburger = btn;
  }

  /* =========================================================
     3. MOBILE DRAWER BUILD
        Reads all nav links from the existing navigation and
        builds a drawer panel dynamically.
     ========================================================= */

  // Collect nav links — try multiple common selectors
  function collectNavLinks() {
    var sources = [
      'nav ul', 'header ul', '.nav-links', '.navbar-links',
      '.site-header ul', '.menu', '#nav-menu'
    ];
    for (var i = 0; i < sources.length; i++) {
      var el = $(sources[i]);
      if (el) {
        var links = $$('a', el);
        if (links.length > 0) return { container: el, links: links };
      }
    }
    // Fallback: grab all nav anchors
    return { container: navEl, links: $$('nav a, header a') };
  }

  function buildDrawer() {
    // Don't build twice
    if ($('#mobileMenuDrawer')) return;

    var collected = collectNavLinks();
    var links = collected.links;

    // Deduplicate by href + text
    var seen = {};
    var uniqueLinks = links.filter(function (a) {
      var key = a.href + a.textContent.trim();
      if (seen[key]) return false;
      seen[key] = true;
      // Skip logo / brand links
      if (a.closest('.logo, .nav-logo, .brand, .site-logo')) return false;
      if (a.querySelector('img')) return false; // skip image links (logo)
      return a.textContent.trim().length > 0;
    });

    if (uniqueLinks.length === 0) return;

    var drawer = document.createElement('div');
    drawer.id = 'mobileMenuDrawer';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-label', 'Navigation menu');

    // Section: Main links
    var mainLabel = document.createElement('div');
    mainLabel.className = 'drawer-section-label';
    mainLabel.textContent = 'Navigation';
    drawer.appendChild(mainLabel);

    uniqueLinks.forEach(function (a) {
      var link = document.createElement('a');
      link.href = a.href;
      link.textContent = a.textContent.trim();
      drawer.appendChild(link);
    });

    // Language buttons
    var langDiv = document.createElement('div');
    langDiv.className = 'drawer-lang';
    langDiv.style.cssText = 'padding: 12px; display: flex; gap: 10px; border-bottom: 1px solid #f0f2f5;';
    langDiv.innerHTML = '<button onclick="if(window.applyLang) window.applyLang(\'en\')" style="padding: 6px 12px; border: 1px solid #ddd; border-radius: 4px; background: #fff; font-size: 0.9rem;">EN</button><button onclick="if(window.applyLang) window.applyLang(\'zh\')" style="padding: 6px 12px; border: 1px solid #ddd; border-radius: 4px; background: #fff; font-size: 0.9rem;">中文</button>';
    drawer.appendChild(langDiv);

    // CTA buttons
    var ctas = document.createElement('div');
    ctas.className = 'drawer-ctas';
    ctas.innerHTML =
      '<a href="#contact" class="btn-primary-drawer">Contact Sales</a>' +
      '<a href="#resources" class="btn-ghost-drawer">Download SDS Docs</a>';
    drawer.appendChild(ctas);

    document.body.appendChild(drawer);
    return drawer;
  }

  /* =========================================================
     4. HAMBURGER TOGGLE LOGIC
     ========================================================= */
  function setupHamburgerToggle() {
    var hamburger = existingHamburger;
    if (!hamburger) return;

    var drawer = buildDrawer();

    function openMenu() {
      hamburger.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
      if (drawer) drawer.classList.add('is-open');
      document.body.classList.add('mobile-menu-open');
    }

    function closeMenu() {
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      if (drawer) drawer.classList.remove('is-open');
      document.body.classList.remove('mobile-menu-open');
    }

    hamburger.addEventListener('click', function () {
      if (hamburger.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on drawer link click
    if (drawer) {
      $$('a', drawer).forEach(function (a) {
        a.addEventListener('click', closeMenu);
      });
    }

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    // Close on backdrop click (outside drawer)
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && drawer && !drawer.contains(e.target)) {
        closeMenu();
      }
    });
  }

  /* =========================================================
     5. STICKY MOBILE CTA BAR
        Inject bar, show after scrolling past hero
     ========================================================= */
  function setupStickyCta() {
    if ($('#stickyMobileCta')) return;

    var bar = document.createElement('div');
    bar.id = 'stickyMobileCta';
    bar.innerHTML =
      '<a href="tel:+15551234567" class="cta-call">📞 Call</a>' +
      '<a href="#contact" class="cta-contact">Contact Sales</a>';
    document.body.appendChild(bar);

    var hero = $('section.hero, .hero, #home, [class*="hero-section"]');
    if (!hero) {
      // Fallback: show after 400px scroll
      window.addEventListener('scroll', function () {
        bar.classList.toggle('is-visible', window.scrollY > 400);
      }, { passive: true });
      return;
    }

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        bar.classList.toggle('is-visible', !e.isIntersecting);
      });
    }, { threshold: 0 });
    obs.observe(hero);
  }

  /* =========================================================
     6. SCROLL-TRIGGERED FADE-IN
        Elements with class .fade-up animate in when visible.
        Also auto-applies .fade-up to common section children
        if they don't already have it.
     ========================================================= */
  function setupFadeIn() {
    // Auto-tag section headers and card grids if not already tagged
    var autoTargets = $$(
      '.section-header, .products-grid, .applications-grid, ' +
      '.news-grid, .stats-section, .sustainability-layout, ' +
      '.resources-section .container, #contact .container'
    );
    autoTargets.forEach(function (el) {
      if (!el.classList.contains('fade-up')) {
        el.classList.add('fade-up');
      }
    });

    var style = document.createElement('style');
    style.textContent =
      '.fade-up{opacity:0;transform:translateY(20px);transition:opacity .6s ease,transform .6s ease;}' +
      '.fade-up.is-visible{opacity:1;transform:none;}';
    document.head.appendChild(style);

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    $$('.fade-up').forEach(function (el) { obs.observe(el); });
  }

  /* =========================================================
     7. COUNTER ANIMATION
        Finds elements with data-target attribute or .stat-number
        and animates them counting up.
     ========================================================= */
  function setupCounters() {
    function animateCounter(el, target, duration) {
      var start = null;
      var startVal = 0;
      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.floor(eased * (target - startVal) + startVal);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      }
      requestAnimationFrame(step);
    }

    // Find all counter elements
    var counters = $$('[data-target], .count, .counter-number');
    if (counters.length === 0) {
      // Fallback: look for stat numbers showing "0"
      counters = $$('.stat-number, .hero-stat-num');
    }

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var target = parseInt(el.getAttribute('data-target') || el.textContent, 10);
        if (!isNaN(target) && target > 0) {
          animateCounter(el, target, 1800);
        }
        obs.unobserve(el);
      });
    }, { threshold: 0.4 });

    counters.forEach(function (el) { obs.observe(el); });
  }

  /* =========================================================
     8. FIX: FONT SIZE ON INPUTS (prevents iOS auto-zoom)
        iOS zooms into inputs with font-size < 16px.
        This ensures all form inputs are at least 16px.
     ========================================================= */
  function fixInputFontSize() {
    var style = document.createElement('style');
    style.textContent =
      '@media (max-width:1023px){' +
      'input,textarea,select{font-size:16px!important;}' +
      '}';
    document.head.appendChild(style);
  }

  /* =========================================================
     INIT — run after DOM is ready
     ========================================================= */
  function init() {
    // setupHamburgerToggle(); // DISABLED: Handled by nav-mobile-fix.js to prevent conflicts
    setupStickyCta();
    setupFadeIn();
    setupCounters();
    fixInputFontSize();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
