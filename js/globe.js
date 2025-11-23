// Cloudflare-style Half-Sphere Globe with World Map - ABC Chemical
(function () {
  'use strict';

  // Initialize globe when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobe);
  } else {
    initGlobe();
  }

  let retryCount = 0;
  const MAX_RETRIES = 20;

  function initGlobe() {
    const container = document.getElementById('globe-container');
    if (!container) {
      console.error('Globe container not found!');
      return;
    }

    console.log('Globe container found, initializing... (attempt', retryCount + 1, ')');
    console.log('Container width:', container.offsetWidth);
    console.log('Container parent width:', container.parentElement?.offsetWidth);

    // If container width is 0, wait and retry (with limit)
    if (container.offsetWidth === 0) {
      retryCount++;
      if (retryCount < MAX_RETRIES) {
        console.log('Container width is 0, retrying... (', retryCount, '/', MAX_RETRIES, ')');
        requestAnimationFrame(() => setTimeout(initGlobe, 50));
        return;
      } else {
        console.warn('Max retries reached, initializing with fallback width');
        // Continue with fallback width
      }
    }

    // Create canvas for the half-sphere
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size - Optimized for side-by-side layout
    const updateSize = () => {
      const containerWidth = container.offsetWidth;
      const width = containerWidth > 0 ? Math.min(800, containerWidth) : 600; // Fallback to 600
      canvas.width = width;
      canvas.height = width * 0.75; // Adjusted aspect ratio for better fit
      canvas.style.width = '100%';
      canvas.style.height = 'auto';
      console.log('Canvas sized:', width, 'x', canvas.height);
    };
    updateSize();

    canvas.style.display = 'block';
    canvas.style.margin = '0 auto';

    container.innerHTML = '';
    container.appendChild(canvas);
    console.log('Canvas appended to container');

    // Globe configuration - Optimized for new layout
    let centerX = canvas.width / 2;
    let centerY = canvas.height * 0.6; // Centered vertically
    let radius = Math.min(canvas.width, canvas.height) * 0.55; // Slightly smaller for better fit


    let rotation = 0;
    const rotationSpeed = 0.0015; // Slower, majestic rotation

    // Modern Scientific Palette - Deep Blue, Neon Cyan, White
    const colors = {
      sphere: {
        base: 'rgba(10, 22, 40, 0.3)',           // Deep blue base with transparency
        glossInner: 'rgba(6, 182, 212, 0.08)',   // Neon cyan glow inside
        glossOuter: 'rgba(8, 47, 73, 0.95)',     // Darker deep blue edge
        highlight: 'rgba(255, 255, 255, 0.2)',   // White highlight
      },
      map: {
        continents: '#0E7490',  // Cyan-700 for continents
        shadow: 'rgba(0,0,0,0.4)',
      },
      grid: 'rgba(6, 182, 212, 0.5)',      // Bright neon cyan grid
      markers: '#06B6D4',                   // Neon cyan markers
      markerGlow: 'rgba(6, 182, 212, 0.7)',
      connections: 'rgba(34, 211, 238, 0.6)', // Light cyan connections
    };

    // Simplified world map data (major continents as polygon coordinates)
    // Coordinates are in [latitude, longitude] format
    const worldMapData = {
      // North America
      northAmerica: [
        [1.3, -2.5], [1.2, -2.3], [1.1, -2.1], [1.0, -1.9], [0.9, -1.8],
        [0.85, -1.6], [0.8, -1.5], [0.7, -1.45], [0.65, -1.5], [0.6, -1.6],
        [0.55, -1.7], [0.5, -1.85], [0.45, -2.0], [0.5, -2.2], [0.6, -2.3],
        [0.7, -2.4], [0.85, -2.5], [1.0, -2.55], [1.15, -2.55]
      ],
      // South America
      southAmerica: [
        [0.45, -1.35], [0.4, -1.25], [0.35, -1.15], [0.3, -1.05], [0.25, -0.95],
        [0.2, -0.95], [0.15, -1.0], [0.1, -1.05], [0.05, -1.1], [0.0, -1.15],
        [0.05, -1.2], [0.1, -1.25], [0.15, -1.3], [0.2, -1.35], [0.25, -1.4],
        [0.3, -1.38], [0.35, -1.35], [0.4, -1.3]
      ],
      // Europe
      europe: [
        [1.1, -0.15], [1.05, -0.05], [1.0, 0.05], [0.95, 0.15], [0.9, 0.25],
        [0.85, 0.35], [0.8, 0.45], [0.75, 0.55], [0.7, 0.65], [0.72, 0.7],
        [0.75, 0.75], [0.8, 0.8], [0.85, 0.85], [0.9, 0.8], [0.95, 0.7],
        [1.0, 0.6], [1.05, 0.5], [1.08, 0.35], [1.1, 0.2], [1.12, 0.05],
        [1.12, -0.1]
      ],
      // Africa
      africa: [
        [0.7, 0.3], [0.65, 0.35], [0.6, 0.4], [0.55, 0.5], [0.5, 0.6],
        [0.45, 0.7], [0.4, 0.8], [0.35, 0.85], [0.3, 0.88], [0.25, 0.9],
        [0.2, 0.88], [0.15, 0.85], [0.1, 0.8], [0.05, 0.75], [0.03, 0.68],
        [0.05, 0.6], [0.08, 0.5], [0.12, 0.42], [0.18, 0.36], [0.25, 0.32],
        [0.32, 0.3], [0.4, 0.28], [0.5, 0.27], [0.6, 0.28], [0.65, 0.29]
      ],
      // Asia
      asia: [
        [1.1, 0.85], [1.05, 0.95], [1.0, 1.1], [0.95, 1.25], [0.9, 1.4],
        [0.85, 1.55], [0.8, 1.7], [0.75, 1.85], [0.7, 2.0], [0.65, 2.1],
        [0.6, 2.15], [0.55, 2.18], [0.5, 2.2], [0.45, 2.18], [0.4, 2.15],
        [0.35, 2.1], [0.3, 2.05], [0.25, 1.95], [0.22, 1.85], [0.2, 1.7],
        [0.22, 1.55], [0.25, 1.4], [0.3, 1.25], [0.35, 1.15], [0.4, 1.05],
        [0.45, 0.98], [0.5, 0.93], [0.55, 0.9], [0.6, 0.88], [0.65, 0.87],
        [0.7, 0.87], [0.75, 0.88], [0.8, 0.9], [0.85, 0.92], [0.9, 0.93],
        [0.95, 0.92], [1.0, 0.9], [1.05, 0.87]
      ],
      // Australia
      australia: [
        [0.15, 2.05], [0.12, 2.1], [0.08, 2.15], [0.05, 2.18], [0.02, 2.2],
        [-0.02, 2.22], [-0.05, 2.23], [-0.08, 2.22], [-0.1, 2.2], [-0.12, 2.15],
        [-0.13, 2.1], [-0.12, 2.05], [-0.1, 2.0], [-0.07, 1.97], [-0.03, 1.95],
        [0.02, 1.95], [0.06, 1.97], [0.1, 2.0], [0.13, 2.02]
      ]
    };

    // 40+ Global location markers (major cities and data centers)
    function generateMarkers() {
      return [
        // North America (12 locations)
        { lat: 1.15, lon: -2.25, size: 0.75, pulse: 0, hub: false },    // Vancouver
        { lat: 1.05, lon: -2.15, size: 0.85, pulse: 0.1, hub: false },  // Seattle
        { lat: 0.95, lon: -2.1, size: 0.9, pulse: 0.2, hub: false },    // San Francisco
        { lat: 0.85, lon: -2.05, size: 0.85, pulse: 0.15, hub: false }, // Los Angeles
        { lat: 0.9, lon: -1.85, size: 0.8, pulse: 0.25, hub: false },   // Phoenix
        { lat: 0.95, lon: -1.75, size: 0.9, pulse: 0.3, hub: false },   // Dallas
        { lat: 1.05, lon: -1.6, size: 0.95, pulse: 0.35, hub: true },   // Chicago (HUB)
        { lat: 1.1, lon: -1.35, size: 1.0, pulse: 0, hub: true },       // New York (HUB)
        { lat: 1.05, lon: -1.5, size: 0.85, pulse: 0.4, hub: false },   // Washington DC
        { lat: 0.95, lon: -1.45, size: 0.8, pulse: 0.45, hub: false },  // Atlanta
        { lat: 0.85, lon: -1.48, size: 0.85, pulse: 0.5, hub: false },  // Miami
        { lat: 1.0, lon: -1.95, size: 0.75, pulse: 0.55, hub: false },  // Denver

        // South America (4 locations)
        { lat: 0.35, lon: -1.05, size: 0.8, pulse: 0.6, hub: false },   // São Paulo
        { lat: 0.25, lon: -1.1, size: 0.75, pulse: 0.65, hub: false },  // Buenos Aires
        { lat: 0.4, lon: -1.3, size: 0.7, pulse: 0.7, hub: false },     // Lima
        { lat: 0.45, lon: -1.25, size: 0.7, pulse: 0.75, hub: false },  // Bogotá

        // Europe (14 locations)
        { lat: 1.05, lon: -0.05, size: 1.0, pulse: 0, hub: true },      // London (HUB)
        { lat: 0.95, lon: 0.05, size: 0.9, pulse: 0.05, hub: false },   // Paris
        { lat: 0.95, lon: 0.2, size: 0.95, pulse: 0.1, hub: true },     // Frankfurt (HUB)
        { lat: 0.9, lon: 0.15, size: 0.8, pulse: 0.15, hub: false },    // Amsterdam
        { lat: 0.85, lon: -0.08, size: 0.75, pulse: 0.2, hub: false },  // Madrid
        { lat: 0.85, lon: 0.25, size: 0.8, pulse: 0.25, hub: false },   // Milan
        { lat: 0.9, lon: 0.35, size: 0.75, pulse: 0.3, hub: false },    // Vienna
        { lat: 0.95, lon: 0.4, size: 0.8, pulse: 0.35, hub: false },    // Warsaw
        { lat: 1.0, lon: 0.5, size: 0.85, pulse: 0.4, hub: false },     // Stockholm
        { lat: 0.8, lon: 0.42, size: 0.75, pulse: 0.45, hub: false },   // Athens
        { lat: 0.85, lon: 0.55, size: 0.8, pulse: 0.5, hub: false },    // Istanbul
        { lat: 1.0, lon: 0.7, size: 0.85, pulse: 0.55, hub: false },    // Moscow
        { lat: 0.9, lon: 0.28, size: 0.75, pulse: 0.6, hub: false },    // Zurich
        { lat: 0.88, lon: 0.48, size: 0.75, pulse: 0.65, hub: false },  // Bucharest

        // Middle East & Africa (6 locations)
        { lat: 0.75, lon: 0.85, size: 0.8, pulse: 0.7, hub: false },    // Dubai
        { lat: 0.7, lon: 0.72, size: 0.75, pulse: 0.75, hub: false },   // Riyadh
        { lat: 0.65, lon: 0.55, size: 0.75, pulse: 0.8, hub: false },   // Cairo
        { lat: 0.15, lon: 0.55, size: 0.75, pulse: 0.85, hub: false },  // Johannesburg
        { lat: 0.2, lon: 0.5, size: 0.7, pulse: 0.9, hub: false },      // Cape Town
        { lat: 0.45, lon: 0.7, size: 0.7, pulse: 0.95, hub: false },    // Nairobi

        // Asia-Pacific (16 locations)
        { lat: 0.7, lon: 0.95, size: 0.85, pulse: 0, hub: false },      // Mumbai
        { lat: 0.6, lon: 1.05, size: 0.8, pulse: 0.05, hub: false },    // Bangalore
        { lat: 0.75, lon: 1.5, size: 0.85, pulse: 0.1, hub: false },    // Bangkok
        { lat: 0.8, lon: 1.6, size: 0.9, pulse: 0.15, hub: true },      // Hong Kong (HUB)
        { lat: 0.85, lon: 1.65, size: 0.9, pulse: 0.2, hub: false },    // Shanghai
        { lat: 0.9, lon: 1.7, size: 0.9, pulse: 0.25, hub: false },     // Beijing
        { lat: 0.8, lon: 1.8, size: 0.85, pulse: 0.3, hub: false },     // Seoul
        { lat: 0.85, lon: 1.95, size: 1.0, pulse: 0, hub: true },       // Tokyo (HUB)
        { lat: 0.8, lon: 1.9, size: 0.85, pulse: 0.35, hub: false },    // Osaka
        { lat: 0.7, lon: 1.7, size: 0.8, pulse: 0.4, hub: false },      // Taipei
        { lat: 0.6, lon: 1.75, size: 0.8, pulse: 0.45, hub: false },    // Manila
        { lat: 0.5, lon: 1.7, size: 0.9, pulse: 0.5, hub: true },       // Singapore (HUB)
        { lat: 0.55, lon: 1.65, size: 0.8, pulse: 0.55, hub: false },   // Kuala Lumpur
        { lat: 0.6, lon: 1.55, size: 0.75, pulse: 0.6, hub: false },    // Jakarta
        { lat: 0.05, lon: 2.1, size: 0.85, pulse: 0.65, hub: false },   // Sydney
        { lat: 0.0, lon: 2.05, size: 0.8, pulse: 0.7, hub: false },     // Melbourne
      ];
    }

    // Update markers to match JSON density preference (visually approximated by existing data)
    const markers = generateMarkers();
    const hubMarkers = markers.filter(m => m.hub);

    // Project 3D point to 2D canvas
    function project3D(lat, lon, r = radius) {
      const phi = lat;
      const theta = lon + rotation;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const z = r * Math.sin(phi) * Math.sin(theta);
      const y = -r * Math.cos(phi);

      const perspective = 1000; // Increased perspective for flatter look
      const factor = perspective / (perspective + z);

      return {
        x: centerX + x * factor,
        y: centerY + y * factor,
        z: z,
        visible: z > -r * 0.2 && y <= 0, // Adjusted visibility
        factor: factor,
        depth: z
      };
    }

    // Draw the metallic sphere with gloss and highlights
    function drawSphere() {
      // 1. Base Metallic Fill
      const gradient = ctx.createRadialGradient(
        centerX, centerY, radius * 0.5,
        centerX, centerY, radius
      );

      gradient.addColorStop(0, colors.sphere.base);
      gradient.addColorStop(1, colors.sphere.glossOuter);

      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, Math.PI, 0, false);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();

      // 2. Rim Light (Top)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.restore();
    }

    // Draw world map continents
    function drawWorldMap() {
      ctx.save();

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, Math.PI, 0, false);
      ctx.clip();

      // Shadow settings from JSON
      ctx.shadowColor = colors.map.shadow;
      ctx.shadowBlur = 15;

      Object.keys(worldMapData).forEach((continentName) => {
        const continent = worldMapData[continentName];
        const points = [];

        continent.forEach(coord => {
          const [lat, lon] = coord;
          const proj = project3D(lat, lon);
          if (proj.visible) points.push(proj);
        });

        if (points.length > 2) {
          ctx.beginPath();
          ctx.moveTo(points[0].x, points[0].y);
          for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
          }
          ctx.closePath();

          ctx.fillStyle = colors.map.continents;
          ctx.fill();
        }
      });

      ctx.restore();
    }

    // Draw subtle grid lines - "SALES NET"
    function drawGridLines() {
      ctx.save();
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 0.8; // Thicker lines
      ctx.globalAlpha = 0.6; // More visible

      // Latitude lines
      for (let i = 1; i <= 8; i++) { // More lines
        const angle = (Math.PI * i) / 16;
        const y = -Math.cos(angle) * radius;
        const r = Math.sin(angle) * radius;

        ctx.beginPath();
        for (let j = 0; j <= 180; j += 3) {
          const theta = (j * Math.PI) / 180;
          const x = Math.cos(theta + rotation) * r;
          const z = Math.sin(theta + rotation) * r;

          if (z > -r * 0.2 && y <= 0) {
            const perspective = 1000;
            const factor = perspective / (perspective + z);
            const px = centerX + x * factor;
            const py = centerY + y * factor;

            if (j === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
        }
        ctx.stroke();
      }

      // Longitude lines (added for "Net" effect)
      for (let i = 0; i < 24; i++) {
        const thetaOffset = (Math.PI * 2 * i) / 24;
        ctx.beginPath();
        let first = true;
        for (let j = 0; j <= 90; j += 5) {
          const phi = (j * Math.PI) / 180;
          const x = radius * Math.sin(phi) * Math.cos(thetaOffset + rotation);
          const z = radius * Math.sin(phi) * Math.sin(thetaOffset + rotation);
          const y = -radius * Math.cos(phi);

          if (z > -radius * 0.2 && y <= 0) {
            const perspective = 1000;
            const factor = perspective / (perspective + z);
            const px = centerX + x * factor;
            const py = centerY + y * factor;

            if (first) { ctx.moveTo(px, py); first = false; }
            else ctx.lineTo(px, py);
          }
        }
        ctx.stroke();
      }

      ctx.restore();
    }

    // Draw radial hub connections
    function drawRadialConnections() {
      ctx.save();
      ctx.lineWidth = 1.5; // Thicker
      ctx.shadowBlur = 8; // More glow
      ctx.shadowColor = colors.connections;

      hubMarkers.forEach(hub => {
        const hubProj = project3D(hub.lat, hub.lon);
        if (hubProj.visible) {
          markers.forEach(marker => {
            if (!marker.hub) {
              const markerProj = project3D(marker.lat, marker.lon);
              if (markerProj.visible) {
                const distance = Math.sqrt(
                  Math.pow(marker.lat - hub.lat, 2) +
                  Math.pow(marker.lon - hub.lon, 2)
                );

                if (distance < 0.7) {
                  ctx.strokeStyle = colors.connections;
                  ctx.beginPath();
                  ctx.moveTo(hubProj.x, hubProj.y);
                  const midX = (hubProj.x + markerProj.x) / 2;
                  const midY = (hubProj.y + markerProj.y) / 2 - 20; // Higher arch
                  ctx.quadraticCurveTo(midX, midY, markerProj.x, markerProj.y);
                  ctx.stroke();
                }
              }
            }
          });
        }
      });
      ctx.restore();
    }

    // Draw location markers
    function drawMarkers(time) {
      ctx.save();
      const sortedMarkers = [...markers].sort((a, b) => {
        const projA = project3D(a.lat, a.lon);
        const projB = project3D(b.lat, b.lon);
        return projA.z - projB.z;
      });

      sortedMarkers.forEach(marker => {
        const proj = project3D(marker.lat, marker.lon);
        if (proj.visible) {
          const pulse = Math.sin(time * 2.5 + marker.pulse * Math.PI * 2) * 0.3 + 1;
          const size = (marker.hub ? 5 : 3.5) * proj.factor * pulse;

          // Outer Glow
          const glowSize = size * 5;
          const glowGradient = ctx.createRadialGradient(
            proj.x, proj.y, 0,
            proj.x, proj.y, glowSize
          );
          glowGradient.addColorStop(0, colors.markerGlow);
          glowGradient.addColorStop(1, 'rgba(96, 165, 250, 0)');

          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, glowSize, 0, Math.PI * 2);
          ctx.fill();

          // Core Marker
          ctx.fillStyle = colors.markers;
          ctx.shadowColor = colors.markerGlow;
          ctx.shadowBlur = 10;

          ctx.beginPath();
          ctx.arc(proj.x, proj.y, size, 0, Math.PI * 2);
          ctx.fill();

          if (marker.hub) {
            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.arc(proj.x, proj.y, size * 0.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });
      ctx.restore();
    }

    // Animation loop
    function animate() {
      const time = Date.now() / 1000;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawSphere();
      drawWorldMap();
      drawGridLines();
      drawRadialConnections();
      drawMarkers(time);

      // Edge Fade to blend with background
      const fadeGradient = ctx.createLinearGradient(0, canvas.height * 0.7, 0, canvas.height);
      fadeGradient.addColorStop(0, 'rgba(10, 22, 40, 0)');
      fadeGradient.addColorStop(1, 'rgba(10, 22, 40, 1)'); // Match new background color
      ctx.fillStyle = fadeGradient;
      ctx.fillRect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3);

      rotation += rotationSpeed;
      requestAnimationFrame(animate);
    }

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateSize();
        centerX = canvas.width / 2;
        centerY = canvas.height * 0.6;
        radius = Math.min(canvas.width, canvas.height) * 0.55;
      }, 250);
    });

    // Start animation
    animate();
  }
})();
