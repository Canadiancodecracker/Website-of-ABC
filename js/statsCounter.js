// Animated counter for statistics
(function () {
  'use strict';

  // Initialize counters when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCounters);
  } else {
    initCounters();
  }

  function initCounters() {
    const statNumbers = document.querySelectorAll('.stat-number, .kpi-number');

    if (statNumbers.length === 0) return;

    // Intersection Observer to trigger animation when stats come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          animateCounter(entry.target);
          entry.target.classList.add('counted');
        }
      });
    }, {
      threshold: 0.5
    });

    statNumbers.forEach(stat => observer.observe(stat));
  }

  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
      current += step;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };

    requestAnimationFrame(updateCounter);
  }
})();


