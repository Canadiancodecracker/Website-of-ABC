// ClouDNS-Style Dotted World Map - ABC Chemical (Accurate Continents)
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
      markers: '#FF8C42',         // Orange markers
      markerGlow: 'rgba(255, 140, 66, 0.6)',
      pulse: '#FF6B35'            // Brighter orange for pulse
    };

    // Detailed world map coordinates using pixel-based approach
    // This creates a more accurate representation of continents
    const continentDots = [];

    // Generate accurate continent dots based on world map projection
    function generateContinentDots() {
      const dots = [];
      const dotSize = 2; // Size of each dot
      const dotSpacing = 6; // Spacing between dots

      // North America - more detailed shape
      addDetailedContinent(dots, [
        // Alaska
        { x: 0.08, y: 0.12, w: 0.08, h: 0.08 },
        // Canada
        { x: 0.10, y: 0.15, w: 0.20, h: 0.12 },
        // USA
        { x: 0.12, y: 0.25, w: 0.18, h: 0.15 },
        // Mexico
        { x: 0.14, y: 0.38, w: 0.10, h: 0.08 },
      ], dotSpacing);

      // South America
      addDetailedContinent(dots, [
        // Northern part
        { x: 0.22, y: 0.45, w: 0.10, h: 0.08 },
        // Brazil region
        { x: 0.24, y: 0.52, w: 0.12, h: 0.15 },
        // Southern cone
        { x: 0.26, y: 0.65, w: 0.06, h: 0.12 },
      ], dotSpacing);

      // Europe
      addDetailedContinent(dots, [
        // Scandinavia
        { x: 0.48, y: 0.10, w: 0.08, h: 0.12 },
        // Western Europe
        { x: 0.46, y: 0.20, w: 0.10, h: 0.10 },
        // Eastern Europe
        { x: 0.52, y: 0.22, w: 0.12, h: 0.10 },
      ], dotSpacing);

      // Africa
      addDetailedContinent(dots, [
        // North Africa
        { x: 0.48, y: 0.32, w: 0.14, h: 0.08 },
        // Central Africa
        { x: 0.50, y: 0.40, w: 0.12, h: 0.12 },
        // Southern Africa
        { x: 0.52, y: 0.52, w: 0.10, h: 0.15 },
      ], dotSpacing);

      // Asia - largest continent
      addDetailedContinent(dots, [
        // Russia/Siberia
        { x: 0.58, y: 0.10, w: 0.28, h: 0.15 },
        // Middle East
        { x: 0.58, y: 0.28, w: 0.10, h: 0.10 },
        // India
        { x: 0.66, y: 0.32, w: 0.08, h: 0.12 },
        // Southeast Asia
        { x: 0.70, y: 0.40, w: 0.08, h: 0.08 },
        // China/East Asia
        { x: 0.72, y: 0.22, w: 0.14, h: 0.18 },
        // Japan
        { x: 0.84, y: 0.26, w: 0.04, h: 0.10 },
      ], dotSpacing);

      // Australia
      addDetailedContinent(dots, [
        { x: 0.76, y: 0.55, w: 0.12, h: 0.12 },
      ], dotSpacing);

      // Antarctica (optional, bottom edge)
      addDetailedContinent(dots, [
        { x: 0.15, y: 0.85, w: 0.70, h: 0.05 },
      ], dotSpacing);

      return dots;
    }

    function addDetailedContinent(dots, regions, spacing) {
      regions.forEach(region => {
        const startX = region.x * canvas.width;
        const startY = region.y * canvas.height;
        const width = region.w * canvas.width;
        const height = region.h * canvas.height;

        const cols = Math.floor(width / spacing);
        const rows = Math.floor(height / spacing);

        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            // Add randomness for natural look
            if (Math.random() > 0.25) { // 75% density
              const x = startX + (j * spacing) + (Math.random() * spacing * 0.5);
              const y = startY + (i * spacing) + (Math.random() * spacing * 0.5);

              // Normalize back to 0-1 range
              dots.push({
                lat: y / canvas.height,
                lon: x / canvas.width
              });
            }
          }
        }
      });
    }

    // Location markers - major cities where ABC Chemical has presence
    const markers = [
      // North America (10 locations)
      { lat: 0.20, lon: 0.12, name: 'Vancouver', pulse: 0 },
      { lat: 0.22, lon: 0.14, name: 'Seattle', pulse: 0.1 },
      { lat: 0.28, lon: 0.15, name: 'San Francisco', pulse: 0.2 },
      { lat: 0.32, lon: 0.16, name: 'Los Angeles', pulse: 0.3 },
      { lat: 0.30, lon: 0.20, name: 'Dallas', pulse: 0.4 },
      { lat: 0.24, lon: 0.22, name: 'Chicago', pulse: 0.5 },
      { lat: 0.23, lon: 0.26, name: 'New York', pulse: 0 },
      { lat: 0.26, lon: 0.25, name: 'Washington DC', pulse: 0.6 },
      { lat: 0.32, lon: 0.24, name: 'Atlanta', pulse: 0.7 },
      { lat: 0.36, lon: 0.24, name: 'Miami', pulse: 0.8 },

      // South America (4 locations)
      { lat: 0.58, lon: 0.28, name: 'São Paulo', pulse: 0.1 },
      { lat: 0.65, lon: 0.28, name: 'Buenos Aires', pulse: 0.2 },
      { lat: 0.50, lon: 0.26, name: 'Lima', pulse: 0.3 },
      { lat: 0.48, lon: 0.27, name: 'Bogotá', pulse: 0.4 },

      // Europe (12 locations)
      { lat: 0.22, lon: 0.47, name: 'London', pulse: 0.5 },
      { lat: 0.24, lon: 0.48, name: 'Paris', pulse: 0.6 },
      { lat: 0.25, lon: 0.51, name: 'Frankfurt', pulse: 0.7 },
      { lat: 0.23, lon: 0.50, name: 'Amsterdam', pulse: 0.8 },
      { lat: 0.28, lon: 0.47, name: 'Madrid', pulse: 0.9 },
      { lat: 0.26, lon: 0.52, name: 'Milan', pulse: 0 },
      { lat: 0.24, lon: 0.54, name: 'Vienna', pulse: 0.1 },
      { lat: 0.22, lon: 0.56, name: 'Warsaw', pulse: 0.2 },
      { lat: 0.18, lon: 0.52, name: 'Stockholm', pulse: 0.3 },
      { lat: 0.28, lon: 0.56, name: 'Athens', pulse: 0.4 },
      { lat: 0.27, lon: 0.58, name: 'Istanbul', pulse: 0.5 },
      { lat: 0.20, lon: 0.60, name: 'Moscow', pulse: 0.6 },

      // Middle East & Africa (5 locations)
      { lat: 0.36, lon: 0.60, name: 'Dubai', pulse: 0.7 },
      { lat: 0.38, lon: 0.58, name: 'Riyadh', pulse: 0.8 },
      { lat: 0.38, lon: 0.54, name: 'Cairo', pulse: 0.9 },
      { lat: 0.62, lon: 0.56, name: 'Johannesburg', pulse: 0 },
      { lat: 0.48, lon: 0.60, name: 'Nairobi', pulse: 0.1 },

      // Asia-Pacific (14 locations)
      { lat: 0.34, lon: 0.66, name: 'Mumbai', pulse: 0.2 },
      { lat: 0.38, lon: 0.68, name: 'Bangalore', pulse: 0.3 },
      { lat: 0.38, lon: 0.72, name: 'Bangkok', pulse: 0.4 },
      { lat: 0.34, lon: 0.75, name: 'Hong Kong', pulse: 0.5 },
      { lat: 0.30, lon: 0.76, name: 'Shanghai', pulse: 0.6 },
      { lat: 0.26, lon: 0.77, name: 'Beijing', pulse: 0.7 },
      { lat: 0.28, lon: 0.80, name: 'Seoul', pulse: 0.8 },
      { lat: 0.28, lon: 0.84, name: 'Tokyo', pulse: 0.9 },
      { lat: 0.32, lon: 0.83, name: 'Osaka', pulse: 0 },
      { lat: 0.36, lon: 0.78, name: 'Taipei', pulse: 0.1 },
      { lat: 0.42, lon: 0.79, name: 'Manila', pulse: 0.2 },
      { lat: 0.46, lon: 0.74, name: 'Singapore', pulse: 0.3 },
      { lat: 0.62, lon: 0.82, name: 'Sydney', pulse: 0.4 },
      { lat: 0.66, lon: 0.81, name: 'Melbourne', pulse: 0.5 },
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
        const baseSize = 5;
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
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Inner white dot
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, size * 0.35, 0, Math.PI * 2);
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
