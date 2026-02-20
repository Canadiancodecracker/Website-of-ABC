// Premium Tech-Noir World Map - ABC Chemical (Glowing Data Points & Micro-Lines)
(function () {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
  } else {
    initMap();
  }

  function initMap() {
    const container = document.getElementById('globe-container');
    if (!container) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const updateSize = () => {
      const containerWidth = container.offsetWidth;
      const width = containerWidth > 0 ? Math.min(1200, containerWidth) : 1000;
      canvas.width = width;
      canvas.height = width * 0.45;
      canvas.style.width = '100%';
      canvas.style.height = 'auto';
    };
    updateSize();

    canvas.style.display = 'block';
    canvas.style.margin = '0 auto';
    container.innerHTML = '';
    container.appendChild(canvas);

    const colors = {
      background: 'transparent',
      dots: 'rgba(0, 212, 255, 0.12)', // Cyan dots, low opacity
      amber: '#ff9f1c',
      amberGlow: 'rgba(255, 159, 28, 0.35)',
      cyan: '#00d4ff',
      cyanGlow: 'rgba(0, 212, 255, 0.35)',
      line: 'rgba(0, 212, 255, 0.15)', // More visible micro-lines
    };

    const continentDots = [];
    const connections = [];

    function generateContinentDots() {
      const dots = [];
      const dotSpacing = canvas.width < 600 ? 3 : 4.5; // Significantly more dense
      const regions = [
        // North America
        { x: 0.10, y: 0.15, w: 0.18, h: 0.22 }, { x: 0.08, y: 0.12, w: 0.05, h: 0.05 },
        // South America
        { x: 0.24, y: 0.45, w: 0.10, h: 0.25 },
        // Europe
        { x: 0.46, y: 0.15, w: 0.12, h: 0.12 }, { x: 0.48, y: 0.10, w: 0.05, h: 0.08 },
        // Africa
        { x: 0.48, y: 0.35, w: 0.12, h: 0.28 },
        // Asia
        { x: 0.58, y: 0.10, w: 0.25, h: 0.35 }, { x: 0.65, y: 0.30, w: 0.10, h: 0.15 },
        // Australia
        { x: 0.78, y: 0.55, w: 0.10, h: 0.12 },
        // Southeast Asia
        { x: 0.70, y: 0.40, w: 0.05, h: 0.05 }
      ];

      regions.forEach(region => {
        const startX = region.x * canvas.width;
        const startY = region.y * canvas.height;
        const width = region.w * canvas.width;
        const height = region.h * canvas.height;
        const cols = Math.floor(width / dotSpacing);
        const rows = Math.floor(height / dotSpacing);

        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            if (Math.random() > 0.1) { // Very high density
              const x = startX + (j * dotSpacing) + (Math.random() * 2);
              const y = startY + (i * dotSpacing) + (Math.random() * 2);
              dots.push({ x, y, size: Math.random() * 1.5 + 0.4 });
            }
          }
        }
      });
      return dots;
    }

    const markers = [
      { lat: 0.24, lon: 0.18, type: 'amber', name: 'New York' },
      { lat: 0.32, lon: 0.14, type: 'cyan', name: 'San Francisco' },
      { lat: 0.22, lon: 0.47, type: 'amber', name: 'London' },
      { lat: 0.25, lon: 0.51, type: 'cyan', name: 'Frankfurt' },
      { lat: 0.30, lon: 0.76, type: 'amber', name: 'Shanghai' },
      { lat: 0.28, lon: 0.84, type: 'cyan', name: 'Tokyo' },
      { lat: 0.34, lon: 0.68, type: 'cyan', name: 'Mumbai' },
      { lat: 0.62, lon: 0.82, type: 'amber', name: 'Sydney' },
      { lat: 0.58, lon: 0.28, type: 'cyan', name: 'São Paulo' },
      { lat: 0.38, lon: 0.58, type: 'amber', name: 'Dubai' },
      { lat: 0.21, lon: 0.22, type: 'cyan', name: 'Toronto' },
      { lat: 0.18, lon: 0.12, type: 'amber', name: 'Vancouver' },
      { lat: 0.35, lon: 0.88, type: 'cyan', name: 'Seoul' },
      { lat: 0.45, lon: 0.72, type: 'amber', name: 'Singapore' },
      { lat: 0.28, lon: 0.42, type: 'cyan', name: 'Paris' },
      { lat: 0.42, lon: 0.52, type: 'amber', name: 'Nairobi' },
      { lat: 0.28, lon: 0.78, type: 'cyan', name: 'Beijing' },
      { lat: 0.32, lon: 0.74, type: 'amber', name: 'Hong Kong' },
      { lat: 0.55, lon: 0.18, type: 'cyan', name: 'Lima' },
      { lat: 0.28, lon: 0.08, type: 'amber', name: 'Los Angeles' }
    ];

    function createConnections() {
      const conn = [];
      for (let i = 0; i < markers.length; i++) {
        for (let j = i + 1; j < markers.length; j++) {
          const dist = Math.hypot(markers[i].lat - markers[j].lat, markers[i].lon - markers[j].lon);
          if (dist < 0.6) conn.push({ from: i, to: j }); // More connections
        }
      }
      return conn;
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background network
      ctx.beginPath();
      ctx.strokeStyle = colors.line;
      ctx.lineWidth = 0.4; // Very thin but crisp
      connections.forEach(c => {
        const m1 = markers[c.from];
        const m2 = markers[c.to];
        ctx.moveTo(m1.lon * canvas.width, m1.lat * canvas.height);
        ctx.lineTo(m2.lon * canvas.width, m2.lat * canvas.height);
      });
      ctx.stroke();

      // Draw continent data points
      continentDots.forEach(dot => {
        ctx.fillStyle = colors.dots;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();

        // Random glimmers
        if (Math.random() > 0.9997) {
          ctx.fillStyle = colors.cyan;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw animated nodes
      const time = Date.now() / 1000;
      markers.forEach((m, idx) => {
        const x = m.lon * canvas.width;
        const y = m.lat * canvas.height;
        const color = m.type === 'amber' ? colors.amber : colors.cyan;
        const glow = m.type === 'amber' ? colors.amberGlow : colors.cyanGlow;
        const pulse = Math.sin(time * 2.5 + idx) * 0.25 + 1.2;

        // Outer volumetric glow
        const grad = ctx.createRadialGradient(x, y, 0, x, y, 45 * pulse);
        grad.addColorStop(0, glow);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, 45 * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Pulsing ring (CSS equivalent)
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, 8 * pulse, 0, Math.PI * 2);
        ctx.stroke();

        // Center core
        ctx.shadowColor = color;
        ctx.shadowBlur = 15;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(draw);
    }

    // Initialize and Start
    continentDots.push(...generateContinentDots());
    connections.push(...createConnections());
    draw();

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updateSize();
        continentDots.length = 0;
        continentDots.push(...generateContinentDots());
      }, 200);
    });
  }
})();
