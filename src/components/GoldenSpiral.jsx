import { useEffect, useRef } from 'react';

// Configuration for the spiral
const config = {
  points: 600,
  dotRadius: 0.5, // Scaled down for smaller SVG (128x128px)
  duration: 3,
  gradientColors: ['#F59E0B', '#D97706'], // Bee Sweet palette
  pulseEffect: true,
  opacityMin: 0.3,
  opacityMax: 1.0,
  sizeMin: 0.5,
  sizeMax: 1.5,
};

export default function GoldenSpiral() {
  const svgRef = useRef(null);

  useEffect(() => {
    const generateSpiral = () => {
      const N = config.points;
      const SIZE = 128; // Matches w-32 h-32 (128px)
      const DOT_RADIUS = config.dotRadius;
      const MARGIN = 2;
      const DURATION = config.duration;
      const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5)); // ≈137.5°
      const CENTER = SIZE / 2;
      const MAX_RADIUS = CENTER - MARGIN - DOT_RADIUS;
      const svgNS = 'http://www.w3.org/2000/svg';

      // Create SVG root
      const svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('width', SIZE);
      svg.setAttribute('height', SIZE);
      svg.setAttribute('viewBox', `0 0 ${SIZE} ${SIZE}`);

      // Add gradient definition
      const defs = document.createElementNS(svgNS, 'defs');
      const gradient = document.createElementNS(svgNS, 'linearGradient');
      gradient.setAttribute('id', 'spiralGradient');
      gradient.setAttribute('gradientUnits', 'userSpaceOnUse');
      gradient.setAttribute('x1', '0%');
      gradient.setAttribute('y1', '0%');
      gradient.setAttribute('x2', '100%');
      gradient.setAttribute('y2', '100%');

      config.gradientColors.forEach((color, index) => {
        const stop = document.createElementNS(svgNS, 'stop');
        stop.setAttribute('offset', `${index * (100 / (config.gradientColors.length - 1))}%`);
        stop.setAttribute('stop-color', color);
        gradient.appendChild(stop);
      });

      defs.appendChild(gradient);
      svg.appendChild(defs);

      // Generate & animate dots
      for (let i = 0; i < N; i++) {
        const idx = i + 0.5;
        const frac = idx / N;
        const r = Math.sqrt(frac) * MAX_RADIUS;
        const theta = idx * GOLDEN_ANGLE;
        const x = CENTER + r * Math.cos(theta);
        const y = CENTER + r * Math.sin(theta);

        // Create SVG circle
        const c = document.createElementNS(svgNS, 'circle');
        c.setAttribute('cx', x);
        c.setAttribute('cy', y);
        c.setAttribute('r', DOT_RADIUS);
        c.setAttribute('fill', 'url(#spiralGradient)');
        c.setAttribute('opacity', '0.6');

        if (config.pulseEffect) {
          // Radius pulse
          const animR = document.createElementNS(svgNS, 'animate');
          animR.setAttribute('attributeName', 'r');
          animR.setAttribute(
            'values',
            `${DOT_RADIUS * config.sizeMin};${DOT_RADIUS * config.sizeMax};${DOT_RADIUS * config.sizeMin}`
          );
          animR.setAttribute('dur', `${DURATION}s`);
          animR.setAttribute('begin', `${frac * DURATION}s`);
          animR.setAttribute('repeatCount', 'indefinite');
          animR.setAttribute('calcMode', 'spline');
          animR.setAttribute('keySplines', '0.4 0 0.6 1;0.4 0 0.6 1');
          c.appendChild(animR);

          // Opacity pulse
          const animO = document.createElementNS(svgNS, 'animate');
          animO.setAttribute('attributeName', 'opacity');
          animO.setAttribute('values', `${config.opacityMin};${config.opacityMax};${config.opacityMin}`);
          animO.setAttribute('dur', `${DURATION}s`);
          animO.setAttribute('begin', `${frac * DURATION}s`);
          animO.setAttribute('repeatCount', 'indefinite');
          animO.setAttribute('calcMode', 'spline');
          animO.setAttribute('keySplines', '0.4 0 0.6 1;0.4 0 0.6 1');
          c.appendChild(animO);
        }

        svg.appendChild(c);
      }

      return svg;
    };

    // Append SVG to the ref
    const svgContainer = svgRef.current;
    if (svgContainer) {
      svgContainer.innerHTML = '';
      svgContainer.appendChild(generateSpiral());
    }

    // Cleanup on unmount
    return () => {
      if (svgContainer) {
        svgContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div ref={svgRef} className="w-32 h-32" />
  );
}
