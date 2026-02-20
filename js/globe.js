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
      dots: 'rgba(100, 255, 218, 0.15)',
      amber: 'rgba(255, 176, 31, 1)',
      amberGlow: 'rgba(255, 176, 31, 0.3)',
      cyan: 'rgba(100, 255, 218, 1)',
      cyanGlow: 'rgba(100, 255, 218, 0.3)',
      line: 'rgba(100, 255, 218, 0.08)',
    };

    const continentDots = [];
    const connections = [];

    function generateContinentDots() {
      const dots = [];
      const dotSpacing = canvas.width < 600 ? 5 : 7;
      const regions = [
        { x: 0.10, y: 0.15, w: 0.18, h: 0.22 }, { x: 0.08, y: 0.12, w: 0.05, h: 0.05 },
        { x: 0.24, y: 0.45, w: 0.10, h: 0.25 }, { x: 0.46, y: 0.15, w: 0.12, h: 0.12 },
        { x: 0.48, y: 0.10, w: 0.05, h: 0.08 }, { x: 0.48, y: 0.35, w: 0.12, h: 0.28 },
        { x: 0.58, y: 0.10, w: 0.25, h: 0.35 }, { x: 0.65, y: 0.30, w: 0.10, h: 0.15 },
        { x: 0.78, y: 0.55, w: 0.10, h: 0.12 }
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
            if (Math.random() > 0.25) {
              const x = startX + (j * dotSpacing) + (Math.random() * 3);
              const y = startY + (i * dotSpacing) + (Math.random() * 3);
              dots.push({ x, y, size: Math.random() * 1.2 + 0.3 });
            }
          }
        }
      });
      return dots;
    }

    const markers = [
      { lat: 0.24, lon: 0.18, type: 'amber' }, { lat: 0.32, lon: 0.14, type: 'cyan' },
      { lat: 0.22, lon: 0.47, type: 'amber' }, { lat: 0.25, lon: 0.51, type: 'cyan' },
      { lat: 0.30, lon: 0.76, type: 'amber' }, { lat: 0.28, lon: 0.84, type: 'cyan' },
      { lat: 0.34, lon: 0.68, type: 'cyan' }, { lat: 0.62, lon: 0.82, type: 'amber' },
      { lat: 0.58, lon: 0.28, type: 'cyan' }, { lat: 0.38, lon: 0.58, type: 'amber' }
    ];

    function createConnections() {
      const conn = [];
      for (let i = 0; i < markers.length; i++) {
        for (let j = i + 1; j < markers.length; j++) {
          const dist = Math.hypot(markers[i].lat - markers[j].lat, markers[i].lon - markers[j].lon);
          if (dist < 0.4) conn.push({ from: i, to: j });
        }
      }
      return conn;
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.strokeStyle = colors.line;
      ctx.lineWidth = 0.5;
      connections.forEach(c => {
        const m1 = markers[c.from];
        const m2 = markers[c.to];
        ctx.moveTo(m1.lon * canvas.width, m1.lat * canvas.height);
        ctx.lineTo(m2.lon * canvas.width, m2.lat * canvas.height);
      });
      ctx.stroke();

      continentDots.forEach(dot => {
        ctx.fillStyle = colors.dots;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
        if (Math.random() > 0.9995) {
          ctx.fillStyle = 'rgba(100, 255, 218, 0.5)';
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      const time = Date.now() / 1000;
      markers.forEach((m, idx) => {
        const x = m.lon * canvas.width;
        const y = m.lat * canvas.height;
        const color = m.type === 'amber' ? colors.amber : colors.cyan;
        const glow = m.type === 'amber' ? colors.amberGlow : colors.cyanGlow;
        const pulse = Math.sin(time * 2 + idx) * 0.2 + 1;

        const grad = ctx.createRadialGradient(x, y, 0, x, y, 18 * pulse);
        grad.addColorStop(0, glow);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, 18 * pulse, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowColor = color;
        ctx.shadowBlur = 12;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, 2.5 * pulse, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      requestAnimationFrame(draw);
    }

    continentDots.push(...generateContinentDots());
    connections.push(...createConnections());
    draw();

    window.addEventListener('resize', () => {
      updateSize();
      continentDots.length = 0;
      continentDots.push(...generateContinentDots());
    });
  }
})();
