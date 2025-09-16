'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

const AnimatedHoverDisclosures = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef(null);
  const itemsRef = useRef([]);

  const disclosureItems = [
    {
      title: 'The Craft',
      description: 'Gain the confidence to build anything you envision, transforming motion, interaction, and design principles into second nature.',
      href: '#',
      image: 'https://picsum.photos/720/720?random=12',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12l4 6-10 13L2 9Z" />
          <path d="M11 3 8 9l4 13 4-13-3-6" />
          <path d="M2 9h20" />
        </svg>
      )
    },
    {
      title: 'CSS Animation',
      description: 'Master CSS animations from your very first set of @keyframes right through to things no one else ever teaches you.',
      href: '#',
      image: 'https://picsum.photos/720/720?random=17',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M7 3v18" />
          <path d="M3 7.5h4" />
          <path d="M3 12h18" />
          <path d="M3 16.5h4" />
          <path d="M17 3v18" />
          <path d="M17 7.5h4" />
          <path d="M17 16.5h4" />
        </svg>
      )
    },
    {
      title: 'SVG Filters',
      description: 'Shaders on a budget. Learn how to use noise to your advantage whilst making flames and stickers.',
      href: '#',
      image: 'https://picsum.photos/720/720?random=19',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      )
    },
    {
      title: 'Scroll Animation',
      description: 'Take your users on a journey with the joy of tasteful scroll animation. You might not even need JavaScript.',
      href: '#',
      image: 'https://picsum.photos/720/720?random=42',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17V5a2 2 0 0 0-2-2H4" />
          <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
        </svg>
      )
    },
    {
      title: 'Taming Canvas',
      description: 'Grasp how to tame the pixel playground and when to do so. Whilst building with "Performance Driven Development".',
      href: '#',
      image: 'https://picsum.photos/720/720?random=128',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
      )
    },
    {
      title: 'Layout Tricks',
      description: 'Do you really need a library for that? Sometimes stepping back and rethinking the problem yields a nifty solution.',
      href: '#',
      image: 'https://picsum.photos/720/720?random=56',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
          <path d="m14 7 3 3" />
          <path d="M5 6v4" />
          <path d="M19 14v4" />
          <path d="M10 2v2" />
          <path d="M7 8H3" />
          <path d="M21 16h-4" />
          <path d="M11 3H9" />
        </svg>
      )
    },
    {
      title: 'Mastering Time',
      description: "It's not all just easings and compositions. Time plays a crucial part in various UI patterns that might not seem obvious at first.",
      href: '#',
      image: 'https://picsum.photos/720/720?random=39',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 22h14" />
          <path d="M5 2h14" />
          <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
          <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
        </svg>
      )
    }
  ];

  const setIndex = useCallback((index) => {
    if (index >= 0 && index < disclosureItems.length) {
      setActiveIndex(index);
      if (listRef.current) {
        const cols = new Array(disclosureItems.length)
          .fill()
          .map((_, i) => (index === i ? '10fr' : '1fr'))
          .join(' ');
        listRef.current.style.setProperty('grid-template-columns', cols);
      }
    }
  }, [disclosureItems.length]);

  const handleInteraction = useCallback((event) => {
    const target = event.target.closest('.hd-item');
    if (target && itemsRef.current.includes(target)) {
      const index = itemsRef.current.indexOf(target);
      setIndex(index);
    }
  }, [setIndex]);

  const resync = useCallback(() => {
    if (listRef.current && itemsRef.current.length > 0) {
      const w = Math.max(
        ...itemsRef.current.map((i) => i?.offsetWidth || 0)
      );
      listRef.current.style.setProperty('--hd-article-width', w);
    }
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    list.addEventListener('focus', handleInteraction, true);
    list.addEventListener('click', handleInteraction);
    list.addEventListener('pointermove', handleInteraction);
    window.addEventListener('resize', resync);
    resync();

    return () => {
      list.removeEventListener('focus', handleInteraction, true);
      list.removeEventListener('click', handleInteraction);
      list.removeEventListener('pointermove', handleInteraction);
      window.removeEventListener('resize', resync);
    };
  }, [handleInteraction, resync]);

  return (
    <>
      <style jsx>{`
        .hd-container {
          background: light-dark(#fff, #000);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 1rem;
          padding-block: 2rem;
          font-family: 'SF Pro Text', 'SF Pro Icons', 'AOS Icons', 'Helvetica Neue', Helvetica, Arial, sans-serif, system-ui;
          position: relative;
          min-height: 100vh;
          
          --hd-gap: 8px;
          --hd-base: clamp(2rem, 8cqi, 80px);
          --hd-easing: linear(
            0 0%,
            0.1538 4.09%,
            0.2926 8.29%,
            0.4173 12.63%,
            0.5282 17.12%,
            0.6255 21.77%,
            0.7099 26.61%,
            0.782 31.67%,
            0.8425 37%,
            0.8887 42.23%,
            0.9257 47.79%,
            0.9543 53.78%,
            0.9752 60.32%,
            0.9883 67.11%,
            0.9961 75%,
            1 100%
          );
          --hd-speed: 0.6s;
          --hd-font-size-min: 16;
          --hd-font-size-max: 20;
          --hd-font-ratio-min: 1.2;
          --hd-font-ratio-max: 1.33;
          --hd-font-width-min: 375;
          --hd-font-width-max: 1500;
        }

        .hd-container::before {
          --hd-size: 45px;
          --hd-line: color-mix(in hsl, canvasText, transparent 70%);
          content: '';
          height: 100vh;
          width: 100vw;
          position: fixed;
          background: linear-gradient(
                90deg,
                var(--hd-line) 1px,
                transparent 1px var(--hd-size)
              )
              50% 50% / var(--hd-size) var(--hd-size),
            linear-gradient(var(--hd-line) 1px, transparent 1px var(--hd-size)) 50% 50% /
              var(--hd-size) var(--hd-size);
          mask: linear-gradient(-20deg, transparent 50%, white);
          top: 0;
          transform-style: flat;
          pointer-events: none;
          z-index: -1;
        }

        .hd-title {
          --hd-font-level: 4.25;
          --hd-fluid-min: calc(22 * pow(var(--hd-font-ratio-min), var(--hd-font-level, 0)));
          --hd-fluid-max: calc(var(--hd-font-size-max) * pow(var(--hd-font-ratio-max), var(--hd-font-level, 0)));
          --hd-fluid-preferred: calc((var(--hd-fluid-max) - var(--hd-fluid-min)) / (var(--hd-font-width-max) - var(--hd-font-width-min)));
          --hd-fluid-type: clamp(
            (var(--hd-fluid-min) / 16) * 1rem,
            ((var(--hd-fluid-min) / 16) * 1rem) - (((var(--hd-fluid-preferred) * var(--hd-font-width-min)) / 16) * 1rem) + (var(--hd-fluid-preferred) * 100vi),
            (var(--hd-fluid-max) / 16) * 1rem
          );
          font-size: var(--hd-fluid-type);
          margin: 0;
        }

        .hd-subtitle {
          width: 74ch;
          max-width: calc(100% - 4rem);
          text-wrap: balance;
          font-family: monospace;
          margin-bottom: 4rem;
          line-height: 1.5;
          opacity: 0.8;
          font-weight: 400;
          margin-top: 0;
        }

        @media (max-width: 768px) {
          .hd-subtitle {
            text-align: center;
          }
        }

        .hd-list {
          display: grid;
          container-type: inline-size;
          grid-template-columns: 10fr 1fr 1fr 1fr 1fr 1fr 1fr;
          gap: var(--hd-gap);
          list-style-type: none;
          justify-content: center;
          padding: 0;
          height: clamp(300px, 40dvh, 474px);
          margin: 0;
          width: 820px;
          max-width: calc(100% - 4rem);
          transition: grid-template-columns var(--hd-speed) var(--hd-easing);
        }

        .hd-item {
          background: light-dark(#fff, #000);
          position: relative;
          overflow: hidden;
          min-width: var(--hd-base);
          border-radius: 8px;
          border: 1px solid color-mix(in hsl, canvas, canvasText 50%);
          cursor: pointer;
        }

        .hd-article {
          width: calc(var(--hd-article-width) * 1px);
          height: 100%;
          position: absolute;
          font-family: monospace;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* Collapsed state - vertical title at left edge */
        .hd-collapsed-title {
          position: absolute;
          top: 50%;
          left: 1rem;
          transform: translateY(-50%);
          font-size: 0.85rem;
          font-weight: 500;
          text-transform: uppercase;
          font-family: monospace;
          white-space: nowrap;
          margin: 0;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 0.1em;
          opacity: 0.9;
          z-index: 2;
          transition: opacity var(--hd-speed) var(--hd-easing),
                      transform var(--hd-speed) var(--hd-easing);
        }

        /* Collapsed state - icon at bottom left */
        .hd-collapsed-icon {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          width: 20px;
          height: 20px;
          fill: none;
          opacity: 0.7;
          z-index: 2;
          transition: opacity var(--hd-speed) var(--hd-easing),
                      transform var(--hd-speed) var(--hd-easing);
        }

        /* Expanded content - horizontal layout (keep as is) */
        .hd-expanded-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 1rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity var(--hd-speed) var(--hd-easing),
                      transform var(--hd-speed) var(--hd-easing);
        }

        .hd-expanded-title {
          font-size: 1.2rem;
          font-weight: 500;
          text-transform: uppercase;
          font-family: monospace;
          margin: 0 0 1rem 0;
          text-align: left;
        }

        .hd-expanded-description {
          font-size: 13px;
          text-wrap: balance;
          line-height: 1.4;
          margin: 0 0 1.5rem 0;
          flex-grow: 1;
          opacity: 0.8;
        }

        .hd-expanded-link {
          margin-top: auto;
          height: 18px;
          line-height: 1;
          color: inherit;
          text-decoration: none;
          width: fit-content;
          font-weight: 500;
        }

        .hd-expanded-link:is(:focus-visible, :hover) {
          outline: none;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        /* Expanded state icon - bottom right */
        .hd-expanded-icon {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          width: 20px;
          height: 20px;
          fill: none;
          opacity: 0;
          z-index: 2;
          transition: opacity var(--hd-speed) var(--hd-easing);
        }

        /* Background image */
        .hd-article img {
          position: absolute;
          pointer-events: none;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1) brightness(1.5);
          scale: 1.1;
          transition: filter calc(var(--hd-speed) * 1.2) var(--hd-easing),
                      scale calc(var(--hd-speed) * 1.2) var(--hd-easing);
          mask: radial-gradient(100% 100% at 100% 0, #fff, #0000);
        }

        /* Active state - expanded */
        .hd-item.hd-active .hd-collapsed-title {
          opacity: 0;
          transform: translateY(-50%) translateX(-20px);
          transition-duration: calc(var(--hd-speed) * 0.8);
        }

        .hd-item.hd-active .hd-collapsed-icon {
          opacity: 0;
          transform: translateY(10px);
          transition-duration: calc(var(--hd-speed) * 0.8);
        }

        .hd-item.hd-active .hd-expanded-content {
          opacity: 1;
          transform: translateY(0);
          transition-delay: calc(var(--hd-speed) * 0.2);
        }

        .hd-item.hd-active .hd-expanded-icon {
          opacity: 1;
          transition-delay: calc(var(--hd-speed) * 0.4);
        }

        .hd-item.hd-active img {
          filter: grayscale(0) brightness(1);
          scale: 1;
          transition-delay: calc(var(--hd-speed) * 0.2);
        }

        /* Non-active state - collapsed (ensure visibility) */
        .hd-item:not(.hd-active) .hd-collapsed-title {
          opacity: 1;
          transform: translateY(-50%);
        }

        .hd-item:not(.hd-active) .hd-collapsed-icon {
          opacity: 0.8;
          transform: translateY(0);
        }

        .hd-item:not(.hd-active) .hd-expanded-content {
          opacity: 0;
        }

        .hd-item:not(.hd-active) .hd-expanded-icon {
          opacity: 0;
        }

        /* Utilities */
        .hd-sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
      
      <div className="hd-container">
        <h1 className="hd-title">the craft of ui</h1>
        <p className="hd-subtitle">
          Unlock the art and science of interface development. This isn't just about
          pushing pixels or following documentation — it's about mastering the
          tools, understanding the nuances, and shaping experiences with intention.
        </p>
        <ul className="hd-list" ref={listRef}>
          {disclosureItems.map((item, index) => (
            <li
              key={index}
              className={`hd-item ${index === activeIndex ? 'hd-active' : ''}`}
              ref={el => itemsRef.current[index] = el}
              tabIndex={0}
            >
              <article className="hd-article">
                {/* Collapsed state - title at left edge, icon at bottom left */}
                <h3 className="hd-collapsed-title">{item.title}</h3>
                <div className="hd-collapsed-icon">
                  {item.icon}
                </div>

                {/* Expanded state - full layout */}
                <div className="hd-expanded-content">
                  <h3 className="hd-expanded-title">{item.title}</h3>
                  <p className="hd-expanded-description">{item.description}</p>
                  <a href={item.href} className="hd-expanded-link">
                    <span>Watch now</span>
                  </a>
                </div>

                {/* Expanded state icon */}
                <div className="hd-expanded-icon">
                  {item.icon}
                </div>

                <img src={item.image} alt="" />
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AnimatedHoverDisclosures;