'use client';

import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import '../gallery/gallery.css'; // ✅ import your CSS


// Register CustomEase
gsap.registerPlugin(CustomEase);

export default function Gallery({ logoText, cards, categories }) {
  // Refs for DOM elements
  const gridContainerRef = useRef(null);
  const centerCardRef = useRef(null);
  const centerImageRef = useRef(null);
  const categoriesMenuRef = useRef(null);
  const logoContainerRef = useRef(null);
  const logoCharsRef = useRef([]);
  const firstLetterRefs = useRef([]);
  const spacerRefs = useRef([]);

  // State for interaction
  const [isExpanded, setIsExpanded] = useState(false);
  const [supportsHover, setSupportsHover] = useState(true);

  // Animation timelines
  const expandTimelineRef = useRef(null);
  const centerImageZoomRef = useRef(null);
  const logoTimelineRef = useRef(null);
  const menuAnimationRef = useRef(null);
  const masterTimelineRef = useRef(null);
  const glowTimelineRef = useRef(null);

  // Router for navigation
  const router = useRouter();

  // Logo characters and first letter indices
  const logoCharacters = logoText.split('');
  const words = logoText.trim().split(/\s+/).filter(word => word);
  const firstLetterIndices = [];
  const spacerIndices = [];

  // Calculate first letter indices and spacer indices
  let charIndex = 0;
  words.forEach((word, i) => {
    // Skip leading spaces
    while (charIndex < logoCharacters.length && logoCharacters[charIndex] === ' ') {
      spacerIndices.push(charIndex);
      charIndex++;
    }
    if (charIndex < logoCharacters.length) {
      firstLetterIndices.push(charIndex); // First letter of the word
      charIndex += word.length; // Move to the end of the word
    }
  });
  // Capture any trailing spaces
  while (charIndex < logoCharacters.length) {
    if (logoCharacters[charIndex] === ' ') {
      spacerIndices.push(charIndex);
    }
    charIndex++;
  }

  // Check hover support on client side
  useEffect(() => {
    setSupportsHover(window.matchMedia('(hover: hover)').matches);
  }, []);

  // Isolated logo animation function
  const animateLogo = (timeline) => {
    timeline.clear();
    const charDuration = 0.15;
    const finalMergeDuration = 0.5;

    // Hide non-first letters
    const hideSequence = logoCharacters
      .map((_, index) => index)
      .filter(index => !firstLetterIndices.includes(index) && !spacerIndices.includes(index))
      .reverse();

    hideSequence.forEach((index, i) => {
      const char = logoCharsRef.current[index];
      timeline.to(
        char,
        {
          opacity: 0,
          filter: 'blur(8px)',
          duration: charDuration,
          ease: 'customEase',
        },
        i * 0.05
      );
    });

    // Hide spacers
    spacerRefs.current.forEach((spacer, i) => {
      timeline.to(
        spacer,
        {
          opacity: 0,
          filter: 'blur(8px)',
          duration: charDuration,
          ease: 'customEase',
        },
        hideSequence.length * 0.05 + i * 0.05
      );
    });

    // Move first letters together
    firstLetterRefs.current.forEach((ref, i) => {
      if (i > 0) {
        timeline.to(
          ref,
          {
            x: () => {
              const firstRect = firstLetterRefs.current[0].getBoundingClientRect();
              const currentRect = ref.getBoundingClientRect();
              // Calculate target position based on the first letter's position
              // and the cumulative width of previous letters
              let targetX = firstRect.left;
              for (let j = 0; j < i; j++) {
                const prevRect = firstLetterRefs.current[j].getBoundingClientRect();
                targetX += prevRect.width + 2; // Add letter width + 2px gap
              }
              return targetX - currentRect.left;
            },
            duration: finalMergeDuration,
            ease: 'customEase',
          },
          hideSequence.length * 0.05 + spacerRefs.current.length * 0.05 + 0.05
        );
      }
    });
  };

  // Initialize animations
  useEffect(() => {
    // Define custom ease
    CustomEase.create('customEase', '0.86,0,0.07,1');

    // Animation durations
    const duration = 0.64;
    const menuInDuration = 0.64;

    // Create timelines
    menuAnimationRef.current = gsap.timeline({ paused: true });
    expandTimelineRef.current = gsap.timeline({ paused: true });
    centerImageZoomRef.current = gsap.timeline({ paused: true });
    logoTimelineRef.current = gsap.timeline({ paused: true });
    glowTimelineRef.current = gsap.timeline();

    // Category animation (desktop only)
    menuAnimationRef.current.staggerTo(
      '.category',
      menuInDuration,
      {
        opacity: 1,
        x: 0,
        visibility: 'visible',
        ease: 'customEase',
        stagger: 0.05,
      },
      0
    );

    // Center image zoom and glow fade-out (desktop only)
    centerImageZoomRef.current.to(centerImageRef.current, {
      scale: 1.08,
      duration,
      ease: 'customEase',
    }).to(centerCardRef.current, {
      boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)',
      duration,
      ease: 'customEase',
    }, 0);

    // Initialize logo animation
    animateLogo(logoTimelineRef.current);

    // Grid expansion (desktop only)
    const positions = [
      { top: 0, left: 0, xPercent: 0, yPercent: 0, delay: 0.05 },
      { top: 0, left: '50%', xPercent: -50, yPercent: 0, delay: 0.1 },
      { top: 0, left: '100%', xPercent: -100, yPercent: 0, delay: 0.15 },
      { top: '50%', left: 0, xPercent: 0, yPercent: -50, delay: 0.2 },
      { top: '50%', left: '100%', xPercent: -100, yPercent: -50, delay: 0.25 },
      { top: '100%', left: 0, xPercent: 0, yPercent: -100, delay: 0.3 },
      { top: '100%', left: '50%', xPercent: -50, yPercent: -100, delay: 0.35 },
      { top: '100%', left: '100%', xPercent: -100, yPercent: -100, delay: 0.4 },
    ];

    cards.forEach((card, index) => {
      if (!card.isCenter) {
        const pos = positions[cards.filter(c => !c.isCenter).indexOf(card)];
        expandTimelineRef.current.to(
          `.${card.id}`,
          {
            top: pos.top,
            left: pos.left,
            xPercent: pos.xPercent,
            yPercent: pos.yPercent,
            opacity: 1,
            scale: 1,
            visibility: 'visible',
            ease: 'customEase',
            duration,
            delay: pos.delay,
          },
          0
        );
      }
    });

    // Initialize category menu (desktop only)
    gsap.set('.category', {
      opacity: 0,
      x: 20,
      visibility: 'hidden',
      immediateRender: true,
    });

    // Initialize logo characters
    gsap.set(logoCharsRef.current, {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
    });

    // Initialize center card glow with fade-in
    gsap.set(centerCardRef.current, {
      boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)',
    });
    glowTimelineRef.current.to(centerCardRef.current, {
      boxShadow: '0 0 60px 12px rgba(255, 255, 255, 0.5)',
      duration: 0.64,
      ease: 'customEase',
    });

    // Run logo animation on mobile and tablet immediately
    if (!supportsHover) {
      logoTimelineRef.current.play();
    }

    // Cleanup on unmount
    return () => {
      expandTimelineRef.current.kill();
      centerImageZoomRef.current.kill();
      logoTimelineRef.current.kill();
      menuAnimationRef.current.kill();
      glowTimelineRef.current.kill();
      if (masterTimelineRef.current) masterTimelineRef.current.kill();
    };
  }, [supportsHover, cards]);

  // Handle card clicks
  const handleCardClick = (card, e) => {
    e.stopPropagation();
    console.log(`Clicked card: ${card.title}, Link: ${card.link}`);
    if (!card.link) {
      console.warn(`Missing link for card: ${card.title}`);
      return;
    }
    router.push(card.link);
  };

  // Handle interactions (desktop only)
  const expandGrid = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      if (masterTimelineRef.current) {
        masterTimelineRef.current.kill();
      }
      masterTimelineRef.current = gsap.timeline();
      masterTimelineRef.current.add(menuAnimationRef.current.play(), -0.01);
      masterTimelineRef.current.add(expandTimelineRef.current.play(), 0);
      masterTimelineRef.current.add(centerImageZoomRef.current.play(), 0);
      masterTimelineRef.current.add(logoTimelineRef.current.play(), 0);
    }
  };

  const collapseGrid = () => {
    if (isExpanded) {
      setIsExpanded(false);
      if (masterTimelineRef.current) {
        masterTimelineRef.current.reverse();
        glowTimelineRef.current.clear();
        glowTimelineRef.current.to(centerCardRef.current, {
          boxShadow: '0 0 60px 12px rgba(255, 255, 255, 0.5)',
          duration: 0.64,
          ease: 'customEase',
        });
      }
    }
  };

  // Update logo animation on resize or load
  useEffect(() => {
    const updateLogoAnimation = () => {
      animateLogo(logoTimelineRef.current);
    };

    window.addEventListener('load', updateLogoAnimation);
    window.addEventListener('resize', () => {
      if (isExpanded) {
        expandTimelineRef.current.pause();
        gridContainerRef.current.offsetWidth;
        expandTimelineRef.current.resume();
      }
      updateLogoAnimation();
    });
    return () => {
      window.removeEventListener('load', updateLogoAnimation);
      window.removeEventListener('resize', updateLogoAnimation);
    };
  }, [isExpanded]);

  return (
    <>

      <div className="relative w-full h-full flex items-center justify-center">
        {/* Mobile Layout: Logo, Center Card, Categories */}
        <div className="md:hidden flex flex-col items-center justify-center w-full h-full gap-4">
          {/* Logo */}
          <div
            ref={logoContainerRef}
            className="text-white text-3xl font-semibold uppercase flex mb-4"
            style={{ zIndex: 10 }}
          >
            <div className="flex">
              {logoCharacters.map((char, index) => (
                <span
                  key={index}
                  ref={(el) => {
                    logoCharsRef.current[index] = el;
                    if (firstLetterIndices.includes(index)) {
                      firstLetterRefs.current[firstLetterIndices.indexOf(index)] = el;
                    }
                    if (spacerIndices.includes(index)) {
                      spacerRefs.current[spacerIndices.indexOf(index)] = el;
                    }
                  }}
                  className={char === ' ' ? 'logo-spacer w-2' : 'logo-char'}
                  data-index={index}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
          </div>

          {/* Center Card */}
          <div ref={gridContainerRef} className="grid-container">
            {cards.map((card) => (
              card.isCenter && (
                <div
                  key={card.id}
                  ref={centerCardRef}
                  className={`card ${card.id} center-card`}
                  onClick={(e) => handleCardClick(card, e)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardClick(card, e);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Navigate to ${card.title} page`}
                >
                  <img
                    ref={centerImageRef}
                    src={card.image}//or use {`${process.env.NODE_ENV === 'production' ? '/uad-client' : ''}/$`}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="card-content">
                    <h2 className="text-white text-lg font-semibold uppercase mb-1">
                      {card.title}
                    </h2>
                    <p className="text-white text-sm">{card.description}</p>
                    <span className="navigate-arrow text-white">→</span>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Categories */}
          <div ref={categoriesMenuRef} className="flex flex-wrap justify-center gap-2 px-4">
            {categories.map((category, index) => (
              <div
                key={category}
                className={`category text-white rounded-full px-3 py-1 text-xs cursor-pointer bg-category-${index + 1} hover:opacity-100 transition-opacity duration-300`}
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        {/* Tablet Layout: Logo, Full Grid, Categories */}
        <div className="hidden md:flex lg:hidden flex-col items-center justify-center w-full h-full gap-4">
          {/* Logo */}
          <div
            ref={logoContainerRef}
            className="text-white text-3xl font-semibold uppercase flex mb-4"
            style={{ zIndex: 10 }}
          >
            <div className="flex">
              {logoCharacters.map((char, index) => (
                <span
                  key={index}
                  ref={(el) => {
                    logoCharsRef.current[index] = el;
                    if (firstLetterIndices.includes(index)) {
                      firstLetterRefs.current[firstLetterIndices.indexOf(index)] = el;
                    }
                    if (spacerIndices.includes(index)) {
                      spacerRefs.current[spacerIndices.indexOf(index)] = el;
                    }
                  }}
                  className={char === ' ' ? 'logo-spacer w-2' : 'logo-char'}
                  data-index={index}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
          </div>

          {/* Full Grid */}
          <div ref={gridContainerRef} className="grid-container">
            {cards.map((card) => (
              <div
                key={card.id}
                ref={card.isCenter ? centerCardRef : null}
                className={`card ${card.id} ${card.isCenter ? 'center-card' : ''}`}
                onClick={(e) => handleCardClick(card, e)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(card, e);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Navigate to ${card.title} page`}
              >
                <img
                  ref={card.isCenter ? centerImageRef : null}
                  src={card.image}//{`${process.env.NODE_ENV === 'production' ? '/uad-client' : ''}/${card.image}`}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="card-content">
                  <h2 className="text-white text-lg font-semibold uppercase mb-1">
                    {card.title}
                  </h2>
                  <p className="text-white text-xs">{card.description}</p>
                  <span className="navigate-arrow text-white">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div ref={categoriesMenuRef} className="flex flex-wrap justify-center gap-2 px-4">
            {categories.map((category, index) => (
              <div
                key={category}
                className={`category text-white rounded-full px-3 py-1 text-xs cursor-pointer bg-category-${index + 1} hover:opacity-100 transition-opacity duration-300`}
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-center w-full h-full relative">
          {/* Grid Container */}
          <div
            ref={gridContainerRef}
            className="grid-container"
            onMouseLeave={supportsHover ? collapseGrid : undefined}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                ref={card.isCenter ? centerCardRef : null}
                className={`card ${card.id} ${card.isCenter ? 'center-card' : ''}`}
                onMouseEnter={supportsHover && card.isCenter ? expandGrid : undefined}
                onClick={(e) => handleCardClick(card, e)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(card, e);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Navigate to ${card.title} page`}
              >
                <img
                  ref={card.isCenter ? centerImageRef : null}
                  src={card.image} //{`${process.env.NODE_ENV === 'production' ? '/uad-client' : ''}/${card.image}`}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="card-content">
                  <h2 className="text-white text-xl font-semibold uppercase mb-1">
                    {card.title}
                  </h2>
                  <p className="text-white text-sm">{card.description}</p>
                  <span className="navigate-arrow text-white">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* Categories Menu */}
          <div
            ref={categoriesMenuRef}
            className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50"
            onMouseEnter={supportsHover ? expandGrid : undefined}
            onMouseLeave={supportsHover ? collapseGrid : undefined}
          >
            {categories.map((category, index) => (
              <div
                key={category}
                className={`category text-white rounded-full px-4 py-2 text-sm cursor-pointer bg-category-${index + 1} hover:opacity-100 transition-opacity duration-300`}
              >
                {category}
              </div>
            ))}
          </div>

          {/* Logo */}
          <div
            ref={logoContainerRef}
            className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-4xl font-semibold uppercase flex z-50"
          >
            <div className="flex">
              {logoCharacters.map((char, index) => (
                <span
                  key={index}
                  ref={(el) => {
                    logoCharsRef.current[index] = el;
                    if (firstLetterIndices.includes(index)) {
                      firstLetterRefs.current[firstLetterIndices.indexOf(index)] = el;
                    }
                    if (spacerIndices.includes(index)) {
                      spacerRefs.current[spacerIndices.indexOf(index)] = el;
                    }
                  }}
                  className={char === ' ' ? 'logo-spacer w-4' : 'logo-char'}
                  data-index={index}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Gallery.propTypes = {
  logoText: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      isCenter: PropTypes.bool,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};