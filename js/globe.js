// Cloudflare-style Half-Sphere Globe visualization for ABC Chemical
(function() {
  'use strict';

  // Initialize globe when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobe);
  } else {
    initGlobe();
  }

  function initGlobe() {
    const container = document.getElementById('globe-container');
    if (!container) return;

    // Create canvas for the half-sphere
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const size = Math.min(600, window.innerWidth - 40);
    canvas.width = size;
    canvas.height = size * 0.6; // Half sphere takes less height
    canvas.style.maxWidth = '100%';
    canvas.style.height = 'auto';
    canvas.style.display = 'block';
    canvas.style.margin = '0 auto';
    
    container.innerHTML = '';
    container.appendChild(canvas);

    // Globe configuration
    const centerX = canvas.width / 2;
    const centerY = canvas.height * 0.85; // Position sphere lower to show top hemisphere
    const radius = Math.min(canvas.width, canvas.height) * 0.42;
    
    let rotation = 0;
    const rotationSpeed = 0.003;

    // Blue color palette inspired by Cloudflare
    const colors = {
      sphere: {
        gradient1: '#1e3a8a', // Deep blue
        gradient2: '#3b82f6', // Medium blue
        gradient3: '#60a5fa', // Light blue
      },
      grid: 'rgba(255, 255, 255, 0.15)',
      gridHighlight: 'rgba(255, 255, 255, 0.25)',
      glow: 'rgba(59, 130, 246, 0.3)',
      markers: '#fbbf24', // Golden yellow for markers
      connections: 'rgba(251, 191, 36, 0.2)',
    };

    // Generate grid lines (latitude and longitude)
    function generateGridLines() {
      const lines = [];
      const latitudes = 12;
      const longitudes = 24;

      // Latitude lines (horizontal circles)
      for (let i = 0; i <= latitudes / 2; i++) { // Only top half
        const angle = (Math.PI * i) / latitudes;
        const y = -Math.cos(angle) * radius;
        const r = Math.sin(angle) * radius;
        lines.push({ type: 'latitude', y, r, angle });
      }

      // Longitude lines (vertical semi-circles)
      for (let i = 0; i < longitudes; i++) {
        const angle = (Math.PI * 2 * i) / longitudes;
        lines.push({ type: 'longitude', angle });
      }

      return lines;
    }

    // Generate location markers
    function generateMarkers() {
      return [
        { lat: 0.6, lon: 0.8, size: 1.0, pulse: 0 },      // Asia
        { lat: 0.5, lon: -0.3, size: 0.9, pulse: 0.33 },   // North America
        { lat: 0.4, lon: 0.2, size: 0.85, pulse: 0.66 },   // Europe
        { lat: 0.3, lon: 1.2, size: 0.8, pulse: 0.2 },     // East Asia
        { lat: 0.45, lon: -0.8, size: 0.75, pulse: 0.5 },  // South America
        { lat: 0.35, lon: 0.6, size: 0.7, pulse: 0.8 },    // Middle East
      ];
    }

    const gridLines = generateGridLines();
    const markers = generateMarkers();

    // Project 3D point to 2D canvas
    function project3D(lat, lon, r = radius) {
      const phi = lat;
      const theta = lon + rotation;
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const z = r * Math.sin(phi) * Math.sin(theta);
      const y = -r * Math.cos(phi);
      
      // Perspective projection
      const scale = 1;
      const perspective = 800;
      const factor = perspective / (perspective + z);
      
      return {
        x: centerX + x * factor * scale,
        y: centerY + y * factor * scale,
        z: z,
        visible: z > -r * 0.3 && y <= 0, // Only show top hemisphere and front-facing
        factor: factor
      };
    }

    // Draw the sphere with gradient
    function drawSphere() {
      // Create radial gradient for 3D effect
      const gradient = ctx.createRadialGradient(
        centerX - radius * 0.3, 
        centerY - radius * 0.3, 
        radius * 0.1,
        centerX, 
        centerY, 
        radius
      );
      
      gradient.addColorStop(0, colors.sphere.gradient3);
      gradient.addColorStop(0.5, colors.sphere.gradient2);
      gradient.addColorStop(1, colors.sphere.gradient1);

      // Draw main sphere (top hemisphere only)
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, Math.PI, 0, false); // Top half circle
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();

      // Add subtle inner shadow for depth
      const shadowGradient = ctx.createRadialGradient(
        centerX + radius * 0.3,
        centerY + radius * 0.3,
        radius * 0.1,
        centerX,
        centerY,
        radius
      );
      shadowGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      shadowGradient.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
      
      ctx.globalCompositeOperation = 'multiply';
      ctx.fillStyle = shadowGradient;
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
      
      ctx.restore();
    }

    // Draw outer glow
    function drawGlow() {
      ctx.save();
      const glowGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.95,
        centerX,
        centerY,
        radius * 1.15
      );
      glowGradient.addColorStop(0, colors.glow);
      glowGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.15, Math.PI, 0, false);
      ctx.fillStyle = glowGradient;
      ctx.fill();
      ctx.restore();
    }

    // Draw grid lines
    function drawGridLines() {
      ctx.save();
      ctx.strokeStyle = colors.grid;
      ctx.lineWidth = 0.5;
      ctx.lineCap = 'round';

      gridLines.forEach(line => {
        if (line.type === 'latitude') {
          // Draw latitude circles
          ctx.beginPath();
          const points = [];
          
          for (let i = 0; i <= 180; i += 2) {
            const angle = (i * Math.PI) / 180;
            const x = Math.cos(angle + rotation) * line.r;
            const z = Math.sin(angle + rotation) * line.r;
            const y = line.y;
            
            if (y <= 0) { // Only top hemisphere
              const perspective = 800;
              const factor = perspective / (perspective + z);
              const px = centerX + x * factor;
              const py = centerY + y * factor;
              
              if (z > -line.r * 0.3) { // Front-facing
                points.push({ x: px, y: py, z: z });
              }
            }
          }
          
          // Draw the visible part of the latitude line
          if (points.length > 1) {
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            for (let i = 1; i < points.length; i++) {
              ctx.lineTo(points[i].x, points[i].y);
            }
            ctx.stroke();
          }
          
        } else if (line.type === 'longitude') {
          // Draw longitude semi-circles (from north pole to equator)
          ctx.beginPath();
          const points = [];
          
          for (let i = 0; i <= 90; i += 2) {
            const lat = (i * Math.PI) / 180;
            const proj = project3D(lat, line.angle);
            
            if (proj.visible) {
              points.push(proj);
            }
          }
          
          if (points.length > 1) {
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            for (let i = 1; i < points.length; i++) {
              ctx.lineTo(points[i].x, points[i].y);
            }
            ctx.stroke();
          }
        }
      });

      ctx.restore();
    }

    // Draw connection lines between markers
    function drawConnections() {
      ctx.save();
      ctx.strokeStyle = colors.connections;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 5]);

      for (let i = 0; i < markers.length; i++) {
        for (let j = i + 1; j < markers.length; j++) {
          const m1 = markers[i];
          const m2 = markers[j];
          
          const p1 = project3D(m1.lat, m1.lon);
          const p2 = project3D(m2.lat, m2.lon);
          
          if (p1.visible && p2.visible) {
            // Draw curved connection
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            
            // Calculate control point for curve
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2 - 30;
            
            ctx.quadraticCurveTo(midX, midY, p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      ctx.setLineDash([]);
      ctx.restore();
    }

    // Draw location markers
    function drawMarkers(time) {
      ctx.save();

      markers.forEach(marker => {
        const proj = project3D(marker.lat, marker.lon);
        
        if (proj.visible) {
          // Pulsing animation
          const pulse = Math.sin(time * 2 + marker.pulse * Math.PI * 2) * 0.3 + 1;
          const size = 4 * marker.size * proj.factor * pulse;
          
          // Outer glow
          const glowGradient = ctx.createRadialGradient(
            proj.x, proj.y, 0,
            proj.x, proj.y, size * 3
          );
          glowGradient.addColorStop(0, colors.markers);
          glowGradient.addColorStop(1, 'rgba(251, 191, 36, 0)');
          
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, size * 3, 0, Math.PI * 2);
          ctx.fillStyle = glowGradient;
          ctx.fill();
          
          // Main marker
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, size, 0, Math.PI * 2);
          ctx.fillStyle = colors.markers;
          ctx.shadowColor = colors.markers;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      ctx.restore();
    }

    // Animation loop
    function animate() {
      const time = Date.now() / 1000;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw glow first
      drawGlow();
      
      // Draw sphere
      drawSphere();
      
      // Draw grid lines
      drawGridLines();
      
      // Draw connections and markers
      drawConnections();
      drawMarkers(time);
      
      // Update rotation
      rotation += rotationSpeed;
      
      // Continue animation
      requestAnimationFrame(animate);
    }

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newSize = Math.min(600, window.innerWidth - 40);
        if (Math.abs(newSize - canvas.width) > 50) {
          initGlobe(); // Reinitialize with new size
        }
      }, 250);
    });

    // Start animation
    animate();
  }
})();
