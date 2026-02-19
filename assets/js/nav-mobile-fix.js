/**
 * ============================================================
 *  ABC CHEMICAL — nav-mobile-fix.js (v2)
 *
 *  Correctly handles your site's nav HTML structure:
 *    <nav>
 *      <a class="nav-logo">logo</a>
 *      <ul>  ← bare ul, no class
 *        <li>Home <ul>sub</ul></li>
 *        ...
 *      </ul>
 *      <div class="nav-lang">EN 中</div>
 *    </nav>
 *
 *  INSTALL: Add before </body> in index.html:
 *    <script src="assets/js/nav-mobile-fix.js"></script>
 * ============================================================ */

(function () {
  'use strict';

  var MOBILE_BP = 1023;
  function isMobile() { return window.innerWidth <= MOBILE_BP; }

  /* =========================================================
     STEP 1: Find nav element
     ========================================================= */
  /* =========================================================
     STEP 1: Find nav element (Target the main header container)
     ========================================================= */
  var navEl =
    document.querySelector('.mega-nav-header') ||
    document.querySelector('header') ||
    document.querySelector('nav') ||
    document.querySelector('.navbar') ||
    document.querySelector('.site-header');

  if (!navEl) return;
  navEl.classList.add('mobile-fix-bar');

  if (!navEl) return;

  /* =========================================================
     STEP 2: Find or Inject hamburger button
     ========================================================= */
  var hamburger = navEl.querySelector('.hamburger, .menu-toggle, #menuBtn, [aria-label*="menu"], [aria-label*="Menu"]');

  // Hide the native mobile nav if it exists to avoid conflicts
  var nativeMobileNav = document.getElementById('mobileNav');
  if (nativeMobileNav) {
    nativeMobileNav.style.display = 'none';
    nativeMobileNav.setAttribute('aria-hidden', 'true');
  }

  if (!hamburger) {
    hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.type = 'button';
    hamburger.setAttribute('aria-label', 'Toggle menu');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.innerHTML = '<span></span><span></span><span></span>';

    // Inject into the inner container for better alignment
    var inner = navEl.querySelector('.mega-nav-inner') || navEl;
    inner.appendChild(hamburger);
  } else {
    // If we found an existing button (like #menuBtn), make sure it has the hamburger class for CSS
    hamburger.classList.add('hamburger');
    // Force the span lines because our CSS relies on them for the animated X icon
    hamburger.innerHTML = '<span></span><span></span><span></span>';
  }

  /* =========================================================
     STEP 3: Collect nav links from the bare <ul> in your nav
     ========================================================= */
  function collectLinks() {
    var seen = {};
    var result = [];

    /* Find all <a> tags inside nav <ul> elements */
    var navUls = navEl.querySelectorAll('ul');
    navUls.forEach(function (ul) {
      var anchors = ul.querySelectorAll('a');
      anchors.forEach(function (a) {
        var text = a.textContent.trim().replace(/\s+/g, ' ');
        var href = a.getAttribute('href') || '#';
        var key = text + '||' + href;

        if (seen[key]) return;   // deduplicate
        seen[key] = true;

        if (!text) return;       // skip empty
        if (a.querySelector('img')) return; // skip logo links
        // Skip very short language codes
        if (text === 'EN' || text === '中' || text === 'ZH') return;

        result.push({ text: text, href: href });
      });
    });

    return result;
  }

  /* =========================================================
     STEP 4: Build the white drawer (injected once into <body>)
     ========================================================= */
  var drawerBuilt = false;

  function buildDrawer() {
    if (drawerBuilt) return;
    drawerBuilt = true;

    /* Backdrop */
    var backdrop = document.createElement('div');
    backdrop.id = 'mobileMenuBackdrop';
    document.body.appendChild(backdrop);

    /* Drawer */
    var drawer = document.createElement('div');
    drawer.id = 'mobileMenuDrawer';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-label', 'Site Navigation');

    /* Section label */
    var label = document.createElement('div');
    label.className = 'drawer-section-label';
    label.textContent = 'Menu';
    drawer.appendChild(label);

    /* Nav links */
    var links = collectLinks();
    if (links.length === 0) {
      /* Fallback: hard-code the known nav items from your site */
      links = [
        { text: 'Home', href: '#home' },
        { text: 'Company Overview', href: '#home' },
        { text: 'News & Updates', href: 'all-news.html' },
        { text: 'About Us', href: 'about-us.html' },
        { text: 'Events', href: 'events.html' },
        { text: 'Factory Gallery', href: 'factory-gallery.html' },
        { text: 'Careers / Hiring', href: 'careers.html' },
        { text: 'Products', href: '#products' },
        { text: 'Calcium Carbide', href: 'calcium-carbide.html' },
        { text: 'Calcium Cyanamide', href: 'calcium-cyanamide.html' },
        { text: 'Cyanamide Derivatives', href: 'cyanamide-derivatives.html' },
        { text: 'Applications', href: '#applications' },
        { text: 'Agriculture & Fertilizers', href: 'agriculture-fertilizers.html' },
        { text: 'Pharmaceuticals & Nutrition', href: 'pharmaceuticals-nutrition.html' },
        { text: 'Metallurgy & Industry', href: 'metallurgy-industry.html' },
        { text: 'Sustainability', href: '#sustainability' },
        { text: 'Resources / SDS', href: '#resources' },
        { text: 'Contact', href: '#contact' },
      ];
    }

    links.forEach(function (item) {
      var a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.text;
      drawer.appendChild(a);
    });

    /* Divider */
    var hr = document.createElement('div');
    hr.style.cssText = 'height:1px;background:#eff1f5;margin:8px 0;';
    drawer.appendChild(hr);

    /* CTA buttons */
    var ctas = document.createElement('div');
    ctas.className = 'drawer-ctas';
    ctas.innerHTML =
      '<a href="#contact" class="btn-primary-drawer">Contact Sales</a>' +
      '<a href="#resources" class="btn-ghost-drawer">Download SDS Docs</a>';
    drawer.appendChild(ctas);

    document.body.appendChild(drawer);
  }

  /* =========================================================
     STEP 5: Open / close
     ========================================================= */
  var menuOpen = false;

  function openMenu() {
    buildDrawer(); // no-op if already built
    menuOpen = true;
    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    /* Small rAF delay so drawer is painted before transition fires */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        var drawer = document.getElementById('mobileMenuDrawer');
        var backdrop = document.getElementById('mobileMenuBackdrop');
        if (drawer) drawer.classList.add('is-open');
        if (backdrop) backdrop.classList.add('is-open');
        document.body.classList.add('mobile-menu-open');
      });
    });
  }

  function closeMenu() {
    menuOpen = false;
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    var drawer = document.getElementById('mobileMenuDrawer');
    var backdrop = document.getElementById('mobileMenuBackdrop');
    if (drawer) drawer.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-open');
    document.body.classList.remove('mobile-menu-open');
  }

  /* =========================================================
     STEP 6: Event listeners
     ========================================================= */

  /* Hamburger click */
  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    menuOpen ? closeMenu() : openMenu();
  });

  /* Backdrop click → close */
  document.addEventListener('click', function (e) {
    if (!menuOpen) return;
    var drawer = document.getElementById('mobileMenuDrawer');
    var backdrop = document.getElementById('mobileMenuBackdrop');
    var clickedOutside =
      (backdrop && e.target === backdrop) ||
      (drawer && !drawer.contains(e.target) && !hamburger.contains(e.target));
    if (clickedOutside) closeMenu();
  });

  /* Drawer link tap → close */
  document.addEventListener('click', function (e) {
    if (!menuOpen) return;
    var drawer = document.getElementById('mobileMenuDrawer');
    if (drawer && e.target.closest && e.target.closest('#mobileMenuDrawer a')) {
      setTimeout(closeMenu, 120); // slight delay so link registers
    }
  });

  /* Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menuOpen) closeMenu();
  });

  /* Resize to desktop → close */
  window.addEventListener('resize', function () {
    if (!isMobile() && menuOpen) closeMenu();
  });

  /* Nav scroll class */
  window.addEventListener('scroll', function () {
    navEl.classList.toggle('is-scrolled', window.scrollY > 40);
  }, { passive: true });

})();
