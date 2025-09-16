'use client';

import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

const DrawRandomUnderline = () => {
  const containerRef = useRef(null);
  const [nextIndex, setNextIndex] = useState(0);

  const svgVariants = [
    `<svg width="310" height="41" viewBox="0 0 310 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0039 33.582C32.2307 33.7406 47.4552 33.7271 62.676 33.7113C67.3044 33.7064 96.546 33.9549 104.728 32.9769C113.615 31.9146 104.516 29.2022 102.022 28.1821C89.9573 23.2459 77.3751 19.9248 65.0451 15.9546C57.8987 13.6536 37.2813 9.3934 44.2314 7.00157C50.9667 4.68363 64.2873 6.71856 70.4249 6.86582C105.866 7.71618 141.306 8.48751 176.75 9.49827C217.874 10.671 258.906 11.9547 300 15.3886" stroke="currentColor" stroke-width="10" stroke-linecap="round"/></svg>`,
    `<svg width="310" height="40" viewBox="0 0 310 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 24.2592C26.233 20.2879 47.7083 16.9968 69.135 13.8421C98.0469 9.5853 128.407 4.02322 158.059 5.14674C172.583 5.69708 187.686 8.66104 201.598 11.9696C207.232 13.3093 215.437 14.9471 220.137 18.3619C224.401 21.4596 220.737 25.6575 217.184 27.6168C208.309 32.5097 197.199 34.281 186.698 34.8486C183.159 35.0399 147.197 36.2657 155.105 26.5837C158.11 22.9053 162.993 20.6229 167.764 18.7924C178.386 14.7164 190.115 12.1115 201.624 10.3984C218.367 7.90626 235.528 7.06127 252.521 7.49276C258.455 7.64343 264.389 7.92791 270.295 8.41825C280.321 9.25056 296 10.8932 305 13.0242" stroke="currentColor" stroke-width="10" stroke-linecap="round"/></svg>`,
    `<svg width="310" height="40" viewBox="0 0 310 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 29.5014C9.61174 24.4515 12.9521 17.9873 20.9532 17.5292C23.7742 17.3676 27.0987 17.7897 29.6575 19.0014C33.2644 20.7093 35.6481 24.0004 39.4178 25.5014C48.3911 29.0744 55.7503 25.7731 63.3048 21.0292C67.9902 18.0869 73.7668 16.1366 79.3721 17.8903C85.1682 19.7036 88.2173 26.2464 94.4121 27.2514C102.584 28.5771 107.023 25.5064 113.276 20.6125C119.927 15.4067 128.83 12.3333 137.249 15.0014C141.418 16.3225 143.116 18.7528 146.581 21.0014C149.621 22.9736 152.78 23.6197 156.284 24.2514C165.142 25.8479 172.315 17.5185 179.144 13.5014C184.459 10.3746 191.785 8.74853 195.868 14.5292C199.252 19.3205 205.597 22.9057 211.621 22.5014C215.553 22.2374 220.183 17.8356 222.979 15.5569C225.4 13.5845 227.457 11.1105 230.742 10.5292C232.718 10.1794 234.784 12.9691 236.164 14.0014C238.543 15.7801 240.717 18.4775 243.356 19.8903C249.488 23.1729 255.706 21.2551 261.079 18.0014C266.571 14.6754 270.439 11.5202 277.146 13.6125C280.725 14.7289 283.221 17.209 286.393 19.0014C292.321 22.3517 298.255 22.5014 305 22.5014" stroke="currentColor" stroke-width="10" stroke-linecap="round"/></svg>`,
    `<svg width="310" height="40" viewBox="0 0 310 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0039 32.6826C32.2307 32.8412 47.4552 32.8277 62.676 32.8118C67.3044 32.807 96.546 33.0555 104.728 32.0775C113.615 31.0152 104.516 28.3028 102.022 27.2826C89.9573 22.3465 77.3751 19.0254 65.0451 15.0552C57.8987 12.7542 37.2813 8.49399 44.2314 6.10216C50.9667 3.78422 64.2873 5.81914 70.4249 5.96641C105.866 6.81677 141.306 7.58809 176.75 8.59886C217.874 9.77162 258.906 11.0553 300 14.4892" stroke="currentColor" stroke-width="10" stroke-linecap="round"/></svg>`,
    `<svg width="310" height="40" viewBox="0 0 310 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99805 20.9998C65.6267 17.4649 126.268 13.845 187.208 12.8887C226.483 12.2723 265.751 13.2796 304.998 13.9998" stroke="currentColor" stroke-width="10" stroke-linecap="round"/></svg>`,
    `<svg width="310" height="40" viewBox="0 0 310 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 29.8857C52.3147 26.9322 99.4329 21.6611 146.503 17.1765C151.753 16.6763 157.115 15.9505 162.415 15.6551C163.28 15.6069 165.074 15.4123 164.383 16.4275C161.704 20.3627 157.134 23.7551 153.95 27.4983C153.209 28.3702 148.194 33.4751 150.669 34.6605C153.638 36.0819 163.621 32.6063 165.039 32.2029C178.55 28.3608 191.49 23.5968 204.869 19.5404C231.903 11.3436 259.347 5.83254 288.793 5.12258C294.094 4.99476 299.722 4.82265 305 5.45025" stroke="currentColor" stroke-width="10" stroke-linecap="round"/></svg>`
  ];

  const menuItems = [
    { text: 'Branding', href: '#' },
    { text: 'Design', href: '#' },
    { text: 'Development', href: '#' }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const drawLineElements = containerRef.current.querySelectorAll('[data-draw-line]');
    let currentIndex = nextIndex;

    const cleanupFunctions = [];

    drawLineElements.forEach((container) => {
      const box = container.querySelector('[data-draw-line-box]');
      if (!box) return;

      let currentAnimation = null;
      let isHovered = false;

      const showUnderline = () => {
        if (isHovered) return; // Prevent duplicate calls
        isHovered = true;

        // Kill any existing animation
        if (currentAnimation) {
          currentAnimation.kill();
        }

        // Get random SVG
        const svgIndex = currentIndex;
        currentIndex = (currentIndex + 1) % svgVariants.length;

        // Add SVG to container
        box.innerHTML = svgVariants[svgIndex];
        const svg = box.querySelector('svg');
        
        if (svg) {
          svg.setAttribute('preserveAspectRatio', 'none');
          svg.style.width = '100%';
          svg.style.height = '100%';

          const path = svg.querySelector('path');
          if (path) {
            path.setAttribute('stroke', 'currentColor');
            
            // Setup stroke-dash animation
            const pathLength = path.getTotalLength();
            path.style.strokeDasharray = pathLength + 'px';
            path.style.strokeDashoffset = pathLength + 'px';

            // Animate stroke in
            currentAnimation = gsap.to(path, {
              strokeDashoffset: '0px',
              duration: 0.8,
              ease: 'power2.out'
            });
          }
        }
      };

      const hideUnderline = () => {
        if (!isHovered) return; // Prevent duplicate calls
        isHovered = false;

        const path = box.querySelector('path');
        if (!path) return;

        // Kill any existing animation
        if (currentAnimation) {
          currentAnimation.kill();
        }

        // Animate stroke out
        const pathLength = path.getTotalLength();
        currentAnimation = gsap.to(path, {
          strokeDashoffset: -pathLength + 'px',
          duration: 0.5,
          ease: 'power2.in',
          onComplete: () => {
            box.innerHTML = ''; // Clear SVG
            currentAnimation = null;
          }
        });
      };

      // Add event listeners
      container.addEventListener('mouseenter', showUnderline);
      container.addEventListener('mouseleave', hideUnderline);

      // Store cleanup function
      const cleanup = () => {
        if (currentAnimation) {
          currentAnimation.kill();
        }
        container.removeEventListener('mouseenter', showUnderline);
        container.removeEventListener('mouseleave', hideUnderline);
        box.innerHTML = '';
      };
      cleanupFunctions.push(cleanup);
    });

    setNextIndex(currentIndex);

    // Return cleanup function
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [nextIndex, svgVariants]);

  return (
    <>
      <style jsx>{`
        .dru-container {
          background-color: #fefaee;
          font-family: 'PP Neue Montreal', Arial, sans-serif;
          color: #340824;
          font-size: 1vw;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          cursor: url("https://cdn.prod.website-files.com/6708f85ff3d3cba6aff436fb/671251b239d7aeb290a31ac5_cursor-default%402x.svg") 2 0, auto;
        }
        
        .dru-container a,
        .dru-container button {
          cursor: url("https://cdn.prod.website-files.com/6708f85ff3d3cba6aff436fb/671251b212e6b71494aa67ff_cursor-pointer%402x.svg") 12 0, pointer;
        }
        
        .dru-cloneable {
          padding: 2rem;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          display: flex;
          position: relative;
        }
        
        .dru-text-draw {
          color: #340824;
          margin-left: 1em;
          margin-right: 1em;
          font-size: 3.5vw;
          text-decoration: none;
          display: inline-block;
          position: relative;
        }
        
        .dru-text-draw__p {
          margin: 0 0 0.1em 0;
          font-size: 1.5em;
          font-weight: 500;
          line-height: 1.1;
        }
        
        .dru-text-draw__box {
          color: #e55050;
          width: 100%;
          height: 0.625em;
          position: relative;
          pointer-events: none;
        }

        @font-face {
          font-family: 'PP Neue Montreal';
          src: url('https://cdn.prod.website-files.com/6819ed8312518f61b84824df/6819ed8312518f61b84825ba_PPNeueMontreal-Medium.woff2') format('woff2');
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }

        @media (max-width: 768px) {
          .dru-text-draw {
            font-size: 6vw;
            margin-left: 0.5em;
            margin-right: 0.5em;
          }
        }
      `}</style>

      <div className="dru-container" ref={containerRef}>
        <section className="dru-cloneable">
          {menuItems.map((item, index) => (
            <a
              key={index}
              data-draw-line=""
              href={item.href}
              className="dru-text-draw"
            >
              <p className="dru-text-draw__p">{item.text}</p>
              <div data-draw-line-box="" className="dru-text-draw__box"></div>
            </a>
          ))}
        </section>
      </div>
    </>
  );
};

export default DrawRandomUnderline;