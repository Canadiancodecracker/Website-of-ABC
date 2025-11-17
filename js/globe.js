// Globe visualization for ABC Chemical global presence
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

    // Create a simple globe visualization using CSS
    const globeHTML = `
      <div class="globe-wrapper" style="max-width: 600px; margin: 0 auto; position: relative; height: 400px;">
        <div class="globe-sphere" style="
          width: 300px;
          height: 300px;
          margin: 50px auto;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%);
          border-radius: 50%;
          box-shadow: 
            inset -25px -25px 40px rgba(0,0,0,.5),
            0 0 60px rgba(59, 130, 246, 0.4),
            0 0 100px rgba(59, 130, 246, 0.2);
          position: relative;
          overflow: hidden;
          animation: rotate 20s linear infinite;
        ">
          <!-- Grid lines -->
          <div style="
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 1px;
            background: rgba(255,255,255,0.2);
          "></div>
          <div style="
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 1px;
            background: rgba(255,255,255,0.2);
          "></div>
          
          <!-- Location markers -->
          <div class="marker" style="
            position: absolute;
            width: 8px;
            height: 8px;
            background: #fbbf24;
            border-radius: 50%;
            box-shadow: 0 0 10px #fbbf24;
            top: 30%;
            left: 40%;
            animation: pulse 2s ease-in-out infinite;
          "></div>
          <div class="marker" style="
            position: absolute;
            width: 8px;
            height: 8px;
            background: #fbbf24;
            border-radius: 50%;
            box-shadow: 0 0 10px #fbbf24;
            top: 50%;
            right: 30%;
            animation: pulse 2s ease-in-out infinite 0.5s;
          "></div>
          <div class="marker" style="
            position: absolute;
            width: 8px;
            height: 8px;
            background: #fbbf24;
            border-radius: 50%;
            box-shadow: 0 0 10px #fbbf24;
            bottom: 35%;
            left: 55%;
            animation: pulse 2s ease-in-out infinite 1s;
          "></div>
        </div>
      </div>
      
      <style>
        @keyframes rotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.7;
          }
        }
      </style>
    `;

    container.innerHTML = globeHTML;
  }
})();

