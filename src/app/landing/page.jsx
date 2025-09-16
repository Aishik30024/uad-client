"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { useRouter } from 'next/navigation'; // Import useRouter

gsap.registerPlugin(CustomEase);

const LandingPage = () => {
  const router = useRouter(); // Initialize router
  const preloaderRef = useRef(null);
  const percentageRef = useRef(null);
  const imageContainerRef = useRef(null);
  const wrappersRef = useRef([]);
  const finalImageRef = useRef(null);
  const restartBtnRef = useRef(null);
  const headerRef = useRef(null);
  const logoLeftRef = useRef(null);
  const navItemsRef = useRef([]);
  const navRightRef = useRef(null);
  const textContainerRef = useRef(null);
  const textLinesRef = useRef([]);
  const textContainerFinalRef = useRef(null);
  const textLinesFinalRef = useRef(null);
  const bigTitleRef = useRef(null);
  const titleLinesRef = useRef([]);
  const additionalDotsRef = useRef([]);
  const centerDotRef = useRef(null);
  const mainTlRef = useRef(null);

  useEffect(() => {
    // Define custom easing functions
    CustomEase.create("customEase", "0.6, 0.01, 0.05, 1");
    CustomEase.create("blurEase", "0.25, 0.1, 0.25, 1");
    CustomEase.create("counterEase", "0.35, 0.0, 0.15, 1");
    CustomEase.create("gentleIn", "0.38, 0.005, 0.215, 1");

    const initAnimation = () => {
      if (mainTlRef.current) mainTlRef.current.kill();

      // Initial GSAP setup
      gsap.set(restartBtnRef.current, { opacity: 0, pointerEvents: 'none' });
      gsap.set(headerRef.current, { opacity: 1 });
      gsap.set(logoLeftRef.current, { opacity: 0, y: 10 });
      gsap.set(navItemsRef.current, { opacity: 0, y: 10 });
      gsap.set(navRightRef.current, { opacity: 0, y: 10 });
      gsap.set(textContainerFinalRef.current, { opacity: 0 });
      gsap.set(textLinesFinalRef.current, { opacity: 0 });
      gsap.set(bigTitleRef.current, { opacity: 0 });
      gsap.set(titleLinesRef.current, { y: '100%', opacity: 0 });
      gsap.set(wrappersRef.current, { visibility: 'hidden', clipPath: 'inset(100% 0 0 0)' });
      gsap.set(wrappersRef.current[0], { visibility: 'visible' });
      gsap.set(imageContainerRef.current, { width: '400px', height: '500px' });
      gsap.set('.image-wrapper img', { scale: 1.2, transformOrigin: 'center center' });
      gsap.set(preloaderRef.current, { display: 'flex', opacity: 1, y: 0 });
      preloaderRef.current.style.backgroundColor = '#000';

      mainTlRef.current = gsap.timeline({
        onComplete: () => {
          // Redirect to /home when the animation completes
          router.push('/home');
        },
      });

      // Animate text lines in
      mainTlRef.current.to(
        textLinesRef.current,
        {
          opacity: 1,
          duration: 0.15,
          stagger: 0.075,
          ease: 'gentleIn',
        },
        0.5
      );

      // Change color of text lines
      mainTlRef.current.to(
        textLinesRef.current,
        {
          color: '#fff',
          duration: 0.15,
          stagger: 0.075,
          ease: 'blurEase',
        },
        '+=0.5'
      );

      // Image and percentage animations
      const percentages = [0, 20, 60, 80, 99];
      percentages.forEach((percentage, index) => {
        const windowWidth = window.innerWidth;
        const fontSizeRem = 14;
        const fontSizePx = fontSizeRem * parseFloat(getComputedStyle(document.documentElement).fontSize);
        const textWidth = String(percentage).length * (fontSizePx * 0.6);
        const padding = 32;
        let leftPosition;
        if (percentage === 0) {
          leftPosition = `${padding}px`;
        } else if (percentage === 99) {
          leftPosition = `${windowWidth - textWidth - padding}px`;
        } else {
          const availableWidth = windowWidth - 2 * padding - textWidth;
          leftPosition = `${padding + (availableWidth * percentage) / 100}px`;
        }

        mainTlRef.current.add(`step${percentage}`, index * 1.5);
        mainTlRef.current.set(wrappersRef.current[index], { visibility: 'visible' }, `step${percentage}`);
        mainTlRef.current.to(
          wrappersRef.current[index],
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 0.65,
            ease: 'customEase',
          },
          `step${percentage}`
        );
        mainTlRef.current.to(
          percentageRef.current,
          {
            innerText: `${percentage}`,
            left: leftPosition,
            duration: 0.65,
            ease: 'counterEase',
            snap: { innerText: 1 },
            onStart: () => {
              gsap.fromTo(
                percentageRef.current,
                { filter: 'blur(8px)' },
                { filter: 'blur(0px)', duration: 0.5, ease: 'power2.inOut' }
              );
            },
          },
          `step${percentage}`
        );

        if (index > 0) {
          mainTlRef.current.to(
            wrappersRef.current[index - 1],
            {
              clipPath: 'inset(100% 0 0 0)',
              duration: 0.5,
              ease: 'customEase',
              onComplete: () => {
                gsap.set(wrappersRef.current[index - 1], { visibility: 'hidden' });
              },
            },
            `step${percentage}+=0.15`
          );
        }
      });

      // Animate text lines out
      mainTlRef.current.to(
        textLinesRef.current,
        {
          opacity: 0,
          duration: 0.15,
          stagger: 0.075,
          ease: 'counterEase',
        },
        'step99+=1'
      );

      // Final phase
      mainTlRef.current.add('expandFinal', '>');
      mainTlRef.current.to({}, { duration: 0.5 }, 'expandFinal');
      mainTlRef.current.to(
        imageContainerRef.current,
        {
          width: '100vw',
          height: '100vh',
          duration: 1.2,
          ease: 'gentleIn',
        },
        'expandFinal+=0.5'
      );
      mainTlRef.current.to(
        finalImageRef.current,
        {
          scale: 1.0,
          duration: 1.2,
          ease: 'gentleIn',
        },
        'expandFinal+=0.5'
      );
      mainTlRef.current.to(
        percentageRef.current,
        {
          opacity: 0,
          filter: 'blur(10px)',
          duration: 0.5,
          ease: 'power2.out',
        },
        'expandFinal+=0.5'
      );
      mainTlRef.current.to(
        logoLeftRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'customEase',
        },
        'expandFinal+=1.2'
      );
      mainTlRef.current.to(
        navItemsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'customEase',
        },
        'expandFinal+=1.3'
      );
      mainTlRef.current.to(
        navRightRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'customEase',
        },
        'expandFinal+=1.7'
      );
      mainTlRef.current.to(
        textContainerFinalRef.current,
        {
          opacity: 1,
          duration: 0.1,
        },
        'expandFinal+=1.5'
      );
      mainTlRef.current.to(
        textLinesFinalRef.current,
        {
          opacity: 1,
          color: '#fff',
          duration: 0.15,
          stagger: 0.075,
          ease: 'gentleIn',
        },
        'expandFinal+=1.6'
      );
      mainTlRef.current.to(
        restartBtnRef.current,
        {
          opacity: 1,
          pointerEvents: 'auto',
          duration: 0.3,
          ease: 'hop',
        },
        'expandFinal+=1.2'
      );
      mainTlRef.current.to(
        preloaderRef.current,
        {
          backgroundColor: 'rgba(0,0,0,0.5)',
          duration: 0.5,
          ease: 'customEase',
        },
        'expandFinal+=0.7'
      );
      mainTlRef.current.to(bigTitleRef.current, { opacity: 1, duration: 0.1 }, 'expandFinal+=1.8');
      mainTlRef.current.to(
        titleLinesRef.current,
        {
          y: '0%',
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power4.out',
        },
        'expandFinal+=1.8'
      );
    };

    // Initialize animation
    setTimeout(initAnimation, 100);

    // Restart button hover animations
    const restartBtn = restartBtnRef.current;
    const handleMouseEnter = () => {
      gsap.to(additionalDotsRef.current, {
        opacity: 1,
        duration: 0.3,
        stagger: 0.05,
        ease: 'customEase',
      });
      gsap.to(centerDotRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'gentleIn',
      });
    };
    const handleMouseLeave = () => {
      gsap.to(additionalDotsRef.current, {
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: 'customEase',
      });
      gsap.to(centerDotRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.4,
        ease: 'gentleIn',
      });
    };
    const handleClick = () => {
      gsap.killTweensOf('*');
      gsap.set(preloaderRef.current, { display: 'flex', opacity: 1, y: 0 });
      preloaderRef.current.style.backgroundColor = '#000';
      gsap.set(imageContainerRef.current, { width: '400px', height: '500px' });
      gsap.set(percentageRef.current, { filter: 'blur(0px)', opacity: 1, innerText: '0', left: '2rem' });
      gsap.set(wrappersRef.current, { clipPath: 'inset(100% 0 0 0)', visibility: 'hidden', position: 'absolute', top: 0, left: 0 });
      gsap.set(wrappersRef.current[0], { visibility: 'visible' });
      gsap.set('.image-wrapper img', { scale: 1.2, transformOrigin: 'center center' });
      gsap.set(restartBtnRef.current, { opacity: 0, pointerEvents: 'none' });
      gsap.set(headerRef.current, { opacity: 1 });
      gsap.set(logoLeftRef.current, { opacity: 0, y: 10 });
      gsap.set(navItemsRef.current, { opacity: 0, y: 10 });
      gsap.set(navRightRef.current, { opacity: 0, y: 10 });
      gsap.set(bigTitleRef.current, { opacity: 0 });
      gsap.set(titleLinesRef.current, { y: '100%', opacity: 0 });
      gsap.set(textLinesRef.current, { opacity: 0, color: '#4f4f4f' });
      gsap.set(textLinesFinalRef.current, { opacity: 0 });
      gsap.set(textContainerFinalRef.current, { opacity: 0 });
      preloaderRef.current.style.display = 'flex';
      setTimeout(initAnimation, 100);
    };

    restartBtn.addEventListener('mouseenter', handleMouseEnter);
    restartBtn.addEventListener('mouseleave', handleMouseLeave);
    restartBtn.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      restartBtn.removeEventListener('mouseenter', handleMouseEnter);
      restartBtn.removeEventListener('mouseleave', handleMouseLeave);
      restartBtn.removeEventListener('click', handleClick);
      if (mainTlRef.current) mainTlRef.current.kill();
    };
  }, [router]); // Add router to dependency array

  // The rest of your component (CSS and JSX) remains unchanged
  const cssContent = `
    @font-face {
      src: url("https://fonts.cdnfonts.com/css/pp-neue-montreal") format("woff2");
      font-family: "PP Neue Montreal", sans-serif;
      font-weight: 400;
    }

    *,
    *:before,
    *:after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: calc(100vw / 1512 * 10);
    }

    body {
      font-family: "PP Neue Montreal", sans-serif;
      font-weight: 700;
      font-size: 1.8rem;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow: hidden;
      background-color: #000;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      letter-spacing: -0.02em;
      color: white;
      position: relative;
    }

    body::before {
      content: "";
      position: fixed;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: transparent url("http://assets.iceable.com/img/noise-transparent.png") repeat 0 0;
      background-size: 300px 300px;
      animation: noise-animation 0.3s steps(5) infinite;
      opacity: 0.8;
      will-change: transform;
      z-index: 100;
      pointer-events: none;
    }

    @keyframes noise-animation {
      0% { transform: translate(0, 0); }
      10% { transform: translate(-2%, -3%); }
      20% { transform: translate(-4%, 2%); }
      30% { transform: translate(2%, -4%); }
      40% { transform: translate(-2%, 5%); }
      50% { transform: translate(-4%, 2%); }
      60% { transform: translate(3%, 0); }
      70% { transform: translate(0, 3%); }
      80% { transform: translate(-3%, 0); }
      90% { transform: translate(2%, 2%); }
      100% { transform: translate(1%, 0); }
    }

    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      z-index: 10003;
      opacity: 0;
    }

    .logo-left {
      color: #fff;
      font-size: 1.8rem;
      position: relative;
      display: inline-block;
    }

    .nav-center {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 1.8rem;
      line-height: 1.1;
    }

    .nav-center ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
      align-items: flex-start;
      gap: 0.2rem;
    }

    .nav-center li {
      font-size: 2rem;
      position: relative;
      cursor: pointer;
      color: white;
      padding: 0;
      display: inline-block;
      z-index: 1;
      opacity: 0;
      transform: translateY(10px);
    }

    .nav-center li:first-child {
      margin-top: 0;
    }

    .nav-center li::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: white;
      z-index: -1;
      transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .nav-center li:hover::after {
      width: 100%;
    }

    .nav-center li:hover {
      color: black;
      mix-blend-mode: difference;
    }

    .nav-right {
      font-size: 1.8rem;
      opacity: 0;
      position: relative;
      cursor: pointer;
      display: inline-block;
      z-index: 1;
    }

    .nav-right::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: white;
      z-index: -1;
      transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .nav-right:hover::after {
      width: 100%;
    }

    .nav-right:hover {
      color: black;
      mix-blend-mode: difference;
    }

    .preloader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }

    .preloader-content {
      position: relative;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-container {
      position: relative;
      width: 400px;
      height: 500px;
      overflow: hidden;
    }

    .image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      visibility: hidden;
    }

    #image-100 {
      z-index: 10;
    }

    .image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .preloader-percentage {
      position: absolute;
      bottom: 5%;
      left: 2rem;
      font-size: 14rem;
      color: white;
    }

    .text-container {
      position: absolute;
      top: 50%;
      right: 30px;
      transform: translateY(-50%);
      text-align: right;
      z-index: 10001;
      max-width: 450px;
    }

    .text-line {
      padding: 0.3em 0;
      opacity: 0;
      color: #4f4f4f;
      font-family: "PP Neue Montreal", sans-serif;
      font-size: 1.6rem;
      text-transform: uppercase;
      letter-spacing: -0.02em;
      line-height: 1.2;
    }

    .text-container-final {
      position: absolute;
      top: 50%;
      right: 30px;
      transform: translateY(-50%);
      text-align: right;
      z-index: 10001;
      max-width: 450px;
    }

    .text-line-final {
      padding: 0.3em 0;
      opacity: 0;
      color: #4f4f4f;
      font-family: "PP Neue Montreal", sans-serif;
      font-size: 1.6rem;
      text-transform: uppercase;
      letter-spacing: -0.02em;
      line-height: 1.2;
    }

    .big-title {
      position: absolute;
      bottom: 30px;
      left: 30px;
      z-index: 10001;
      opacity: 0;
      text-align: left;
      color: red;
      font-size: 14rem;
      line-height: 0.9;
    }

    .big-title .title-line {
      overflow: hidden;
      margin: 0;
      padding: 0;
    }

    .big-title .title-line span {
      display: block;
      transform: translateY(100%);
      opacity: 0;
    }

    .restart-btn {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      border: none;
      background: transparent;
      cursor: pointer;
      z-index: 10002;
      padding: 0;
      opacity: 0;
    }

    .dot-container {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .dot {
      position: absolute;
      border-radius: 50%;
      background-color: white;
      width: 6px;
      height: 6px;
    }

    .dot:nth-child(1) {
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
    }

    .dot:nth-child(2) {
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    }

    .dot:nth-child(3) {
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    }

    .dot:nth-child(4) {
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    }

    .dot:nth-child(5) {
      top: 15px;
      right: 15px;
      opacity: 0;
    }

    .dot:nth-child(6) {
      bottom: 15px;
      right: 15px;
      opacity: 0;
    }

    .dot:nth-child(7) {
      bottom: 15px;
      left: 15px;
      opacity: 0;
    }

    .dot:nth-child(8) {
      top: 15px;
      left: 15px;
      opacity: 0;
    }

    .center-dot {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: white;
      opacity: 0;
    }
  `;

  return (
    <>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: cssContent }} />
      <header className="header" ref={headerRef}>
        <div className="logo-left" ref={logoLeftRef}>REDUCE</div>
        <nav className="nav-center">
          <ul>
            {['FOCUS', 'CLARITY', 'SIMPLIFY', 'TRUTH'].map((item, index) => (
              <li key={index} ref={(el) => (navItemsRef.current[index] = el)}>
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-right" ref={navRightRef}>+GET IN TOUCH</div>
      </header>
      <div className="preloader" ref={preloaderRef}>
        <div className="preloader-content">
          <div className="image-container" ref={imageContainerRef}>
            {[
              {
                id: 'image-0',
                src: 'https://cdn.cosmos.so/4900e2ad-dfdb-4f6a-8ca8-6700144e6c89?format=jpeg',
                alt: 'Preloader Image 1',
              },
              {
                id: 'image-20',
                src: 'https://cdn.cosmos.so/acdef0b0-0321-4f80-9ab0-7932ccb88554?format=jpeg',
                alt: 'Preloader Image 2',
              },
              {
                id: 'image-60',
                src: 'https://cdn.cosmos.so/09eb737d-c269-4fa6-a77c-4ada27419be0?format=jpeg',
                alt: 'Preloader Image 3',
              },
              {
                id: 'image-80',
                src: 'https://cdn.cosmos.so/e9b9e7dc-73f5-4f7c-bbb3-ad2e3589bda0?format=jpeg',
                alt: 'Preloader Image 4',
              },
              {
                id: 'image-100',
                src: 'https://cdn.cosmos.so/5b5c5242-4598-4d51-9891-0e90eeef6727?format=jpeg',
                alt: 'Preloader Image 5',
              },
            ].map((image, index) => (
              <div
                key={image.id}
                className="image-wrapper"
                id={image.id}
                ref={(el) => (wrappersRef.current[index] = el)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  ref={image.id === 'image-100' ? finalImageRef : null}
                />
              </div>
            ))}
          </div>
          <div className="preloader-percentage" ref={percentageRef}>
            0
          </div>
        </div>
      </div>
      <div className="text-container" ref={textContainerRef}>
        {[
          'Winning is a habit.',
          'Champions are made daily.',
          'Obstacles fuel growth.',
          'The mind conquers first.',
          'Success demands sacrifice.',
          'Greatness never rests.',
          'Victory is earned.',
          'Persistence prevails.',
        ].map((text, index) => (
          <div
            key={index}
            className="text-line"
            ref={(el) => (textLinesRef.current[index] = el)}
          >
            {text}
          </div>
        ))}
      </div>
      <div className="text-container-final" ref={textContainerFinalRef}>
        {[
          'Embrace the challenge.',
          'Find your purpose.',
          'Commit to excellence.',
          'Trust the process.',
          'Silence the doubters.',
          'Rise above fear.',
          'Own your destiny.',
          'Leave a legacy.',
        ].map((text, index) => (
          <div
            key={index}
            className="text-line-final"
            ref={(el) => {
              if (index === 0) textLinesFinalRef.current = [];
              textLinesFinalRef.current[index] = el;
            }}
          >
            {text}
          </div>
        ))}
      </div>
      <div className="big-title" ref={bigTitleRef}>
        {['WINNING', 'MINDSET', 'ALWAYS'].map((text, index) => (
          <div key={index} className="title-line">
            <span ref={(el) => (titleLinesRef.current[index] = el)}>{text}</span>
          </div>
        ))}
      </div>
      <button className="restart-btn" ref={restartBtnRef}>
        <div className="dot-container">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="dot" />
          ))}
          {[...Array(4)].map((_, index) => (
            <div
              key={index + 4}
              className="dot"
              ref={(el) => (additionalDotsRef.current[index] = el)}
            />
          ))}
          <div className="center-dot" ref={centerDotRef} />
        </div>
      </button>
    </>
  );
};

export default LandingPage;