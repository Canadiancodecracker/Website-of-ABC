// ClouDNS-Style Dotted World Map - ABC Chemical
(function () {
  'use strict';

  // Initialize map when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
  } else {
    initMap();
  }

  function initMap() {
    const container = document.getElementById('globe-container');
    if (!container) {
      console.error('Globe container not found!');
      return;
    }

    console.log('Initializing ClouDNS-style dotted world map...');

    // Create canvas for the dotted map
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const updateSize = () => {
      const containerWidth = container.offsetWidth;
      const width = containerWidth > 0 ? Math.min(1000, containerWidth) : 800;
      canvas.width = width;
      canvas.height = width * 0.5; // 2:1 aspect ratio for world map
      canvas.style.width = '100%';
      canvas.style.height = 'auto';
      console.log('Canvas sized:', width, 'x', canvas.height);
    };
    updateSize();

    canvas.style.display = 'block';
    canvas.style.margin = '0 auto';

    container.innerHTML = '';
    container.appendChild(canvas);

    // Color palette - ClouDNS inspired
    const colors = {
      background: '#E8E8E8',      // Light gray background
      dots: '#B0B0B0',            // Gray dots for continents
      markers: '#FF8C42',         // Orange markers (like ClouDNS)
      markerGlow: 'rgba(255, 140, 66, 0.4)',
      pulse: '#FF6B35'            // Brighter orange for pulse
    };

    // Simplified world map coordinates (lat, lon) - normalized to 0-1 range
    // lat: 0 = top (90°N), 1 = bottom (90°S)
    // lon: 0 = left (-180°), 1 = right (180°)
    const continentDots = [];

    // Generate dots for continents
    function generateContinentDots() {
      const dots = [];
      const dotSpacing = 8; // pixels between dots

      // North America
      addContinentRegion(dots, 0.15, 0.45, 0.15, 0.35, dotSpacing);

      // South America
      addContinentRegion(dots, 0.45, 0.75, 0.25, 0.35, dotSpacing);

      // Europe
      addContinentRegion(dots, 0.15, 0.35, 0.48, 0.58, dotSpacing);

      // Africa
      addContinentRegion(dots, 0.35, 0.75, 0.45, 0.58, dotSpacing);

      // Asia
      addContinentRegion(dots, 0.1, 0.5, 0.58, 0.85, dotSpacing);

      // Australia
      addContinentRegion(dots, 0.55, 0.75, 0.75, 0.85, dotSpacing);

      return dots;
    }

    function addContinentRegion(dots, latStart, latEnd, lonStart, lonEnd, spacing) {
      const latSteps = Math.floor((latEnd - latStart) * canvas.height / spacing);
      const lonSteps = Math.floor((lonEnd - lonStart) * canvas.width / spacing);

      for (let i = 0; i < latSteps; i++) {
        for (let j = 0; j < lonSteps; j++) {
          // Add some randomness to make it look more natural
          if (Math.random() > 0.3) { // 70% density
            const lat = latStart + (i / latSteps) * (latEnd - latStart);
            const lon = lonStart + (j / lonSteps) * (lonEnd - lonStart);
            dots.push({ lat, lon });
          }
        }
      }
    }

    // Location markers (major cities/data centers)
    const markers = [
      // North America
      { lat: 0.25, lon: 0.18, name: 'Vancouver', pulse: 0 },
      { lat: 0.27, lon: 0.20, name: 'Seattle', pulse: 0.1 },
      { lat: 0.30, lon: 0.21, name: 'San Francisco', pulse: 0.2 },
      { lat: 0.33, lon: 0.22, name: 'Los Angeles', pulse: 0.3 },
      { lat: 0.28, lon: 0.26, name: 'Dallas', pulse: 0.4 },
      { lat: 0.24, lon: 0.28, name: 'Chicago', pulse: 0.5 },
      { lat: 0.23, lon: 0.31, name: 'New York', pulse: 0 },
      { lat: 0.32, lon: 0.30, name: 'Miami', pulse: 0.6 },

      // South America
      { lat: 0.58, lon: 0.30, name: 'São Paulo', pulse: 0.7 },
      { lat: 0.65, lon: 0.29, name: 'Buenos Aires', pulse: 0.8 },

      // Europe
      { lat: 0.22, lon: 0.49, name: 'London', pulse: 0.1 },
      { lat: 0.26, lon: 0.51, name: 'Paris', pulse: 0.2 },
      { lat: 0.25, lon: 0.53, name: 'Frankfurt', pulse: 0.3 },
      { lat: 0.28, lon: 0.52, name: 'Amsterdam', pulse: 0.4 },
      { lat: 0.24, lon: 0.58, name: 'Moscow', pulse: 0.5 },

      // Middle East & Africa
      { lat: 0.38, lon: 0.60, name: 'Dubai', pulse: 0.6 },
      { lat: 0.70, lon: 0.53, name: 'Johannesburg', pulse: 0.7 },

      // Asia-Pacific
      { lat: 0.32, lon: 0.68, name: 'Mumbai', pulse: 0.8 },
      { lat: 0.28, lon: 0.74, name: 'Hong Kong', pulse: 0.9 },
      { lat: 0.25, lon: 0.76, name: 'Shanghai', pulse: 0 },
      { lat: 0.23, lon: 0.78, name: 'Tokyo', pulse: 0.1 },
      { lat: 0.45, lon: 0.73, name: 'Singapore', pulse: 0.2 },
      { lat: 0.68, lon: 0.80, name: 'Sydney', pulse: 0.3 },
      { lat: 0.70, lon: 0.79, name: 'Melbourne', pulse: 0.4 },
    ];

    // Convert normalized coordinates to canvas pixels
    function toCanvasCoords(lat, lon) {
      return {
        x: lon * canvas.width,
        y: lat * canvas.height
      };
    }

    // Draw background
    function drawBackground() {
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Draw continent dots
    function drawContinentDots() {
      ctx.fillStyle = colors.dots;
      continentDots.forEach(dot => {
        const pos = toCanvasCoords(dot.lat, dot.lon);
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Draw location markers with pulse animation
    function drawMarkers(time) {
      markers.forEach(marker => {
        const pos = toCanvasCoords(marker.lat, marker.lon);
        const pulse = Math.sin(time * 2 + marker.pulse * Math.PI * 2) * 0.3 + 1;
        const baseSize = 4;
        const size = baseSize * pulse;

        // Outer glow/pulse
        const glowSize = size * 4;
        const glowGradient = ctx.createRadialGradient(
          pos.x, pos.y, 0,
          pos.x, pos.y, glowSize
        );
        glowGradient.addColorStop(0, colors.markerGlow);
        glowGradient.addColorStop(1, 'rgba(255, 140, 66, 0)');

        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Main marker circle
        ctx.fillStyle = colors.markers;
        ctx.shadowColor = colors.pulse;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Inner white dot
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, size * 0.4, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Animation loop
    function animate() {
      const time = Date.now() / 1000;

      drawBackground();
      drawContinentDots();
      drawMarkers(time);

      requestAnimationFrame(animate);
    }

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateSize();
        continentDots.length = 0;
        continentDots.push(...generateContinentDots());
      }, 250);
    });

    // Initialize and start
    continentDots.push(...generateContinentDots());
    console.log('Generated', continentDots.length, 'continent dots');
    console.log('Placed', markers.length, 'location markers');
    animate();
  }
})();
