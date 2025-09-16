'use client';

import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

const AnimatedSideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const overlayRef = useRef(null);
  const menuRef = useRef(null);
  const bgPanelsRef = useRef([]);
  const menuLinksRef = useRef([]);
  const fadeTargetsRef = useRef([]);
  const menuButtonTextsRef = useRef([]);
  const menuButtonIconRef = useRef(null);
  const timelineRef = useRef(null);

  const menuItems = [
    { heading: 'About us', number: '01', href: '#' },
    { heading: 'Our work', number: '02', href: '#' },
    { heading: 'Services', number: '03', href: '#' },
    { heading: 'Blog', number: '04', href: '#' },
    { heading: 'Contact us', number: '05', href: '#' }
  ];

  const socialLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'X/Twitter', href: '#' },
    { name: 'Awwwards', href: '#' }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { CustomEase } = require('gsap/CustomEase');
      gsap.registerPlugin(CustomEase);
      CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
      gsap.defaults({
        ease: "main",
        duration: 0.7
      });

      timelineRef.current = gsap.timeline();

      // Set initial state
      gsap.set(navRef.current, { display: "none" });
    }

    // Cleanup function
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  const openNav = () => {
    if (!timelineRef.current) return;
    
    setIsOpen(true);
    
    timelineRef.current.clear()
      .set(navRef.current, { display: "block" })
      .set(menuRef.current, { xPercent: 0 }, "<")
      .fromTo(menuButtonTextsRef.current, { yPercent: 0 }, { yPercent: -100, stagger: 0.2 })
      .fromTo(menuButtonIconRef.current, { rotate: 0 }, { rotate: 315 }, "<")
      .fromTo(overlayRef.current, { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
      .fromTo(bgPanelsRef.current, { xPercent: 101 }, { xPercent: 0, stagger: 0.12, duration: 0.575 }, "<")
      .fromTo(menuLinksRef.current, { yPercent: 140, rotate: 10 }, { yPercent: 0, rotate: 0, stagger: 0.05 }, "<+=0.35")
      .fromTo(fadeTargetsRef.current, { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, stagger: 0.04 }, "<+=0.2");
  };

  const closeNav = () => {
    if (!timelineRef.current) return;
    
    setIsOpen(false);
    
    timelineRef.current.clear()
      .to(overlayRef.current, { autoAlpha: 0 })
      .to(menuRef.current, { xPercent: 120 }, "<")
      .to(menuButtonTextsRef.current, { yPercent: 0 }, "<")
      .to(menuButtonIconRef.current, { rotate: 0 }, "<")
      .set(navRef.current, { display: "none" });
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isOpen) {
      closeNav();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <style jsx>{`
        @font-face {
          font-family: 'PP Neue Corp Tight';
          src: url('https://cdn.prod.website-files.com/673af51dea86ab95d124c3ee/673b0f5784f7060c0ac05534_PPNeueCorp-TightUltrabold.otf') format('opentype');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        
        body {
          cursor: url("https://cdn.prod.website-files.com/6708f85ff3d3cba6aff436fb/671251b239d7aeb290a31ac5_cursor-default%402x.svg") 2 0, auto;
        }
        
        a, button {
          cursor: url("https://cdn.prod.website-files.com/6708f85ff3d3cba6aff436fb/671251b212e6b71494aa67ff_cursor-pointer%402x.svg") 12 0, pointer;
        }
        
        .osmo-ui {
          z-index: 0;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: stretch;
        }
        
        .header {
          z-index: 110;
          padding-top: 1rem;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
        }
        
        .container {
          z-index: 1;
          max-width: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          position: relative;
        }
        
        .nav-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        
        .nav-row__right {
          display: flex;
          gap: 0.625rem;
          pointer-events: auto;
          justify-content: flex-end;
          align-items: center;
        }
        
        .menu-button {
          display: flex;
          gap: 0.625rem;
          background-color: transparent;
          justify-content: flex-end;
          align-items: center;
          margin: -1em;
          padding: 1em;
          border: none;
        }
        
        .menu-button-text {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-end;
          height: 1.7em; /* Increased height */
          overflow: hidden;
        }
        
        .menu-button-icon {
          width: 1em;
          height: 1em;
        }
        
        .icon-wrap {
          transition: transform 0.4s cubic-bezier(0.65, 0.05, 0, 1);
        }
        
        .menu-button:hover .icon-wrap {
          transform: rotate(90deg);
        }
        
        .p-large {
          font-size: 1.125em;
          font-family: Arial, Helvetica;
          margin: 0;
        }
        
        .nav {
          z-index: 100;
          width: 100%;
          height: 100vh;
          margin-left: auto;
          margin-right: auto;
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .overlay {
          z-index: 0;
          cursor: pointer;
          background-color: rgba(19, 19, 19, 0.4);
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .menu {
          padding-bottom: 2em;
          gap: 5em;
          padding-top: 6em;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          width: 35em;
          height: 100%;
          margin-left: auto;
          position: relative;
          overflow: auto;
        }
        
        .menu-bg {
          z-index: 0;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .menu-inner {
          z-index: 1;
          gap: 5em;
          padding: 2em;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          height: 100%;
          position: relative;
          overflow: auto;
        }
        
        .bg-panel {
          z-index: 0;
          background-color: #f5f5f5;
          border-top-left-radius: 1.25em;
          border-bottom-left-radius: 1.25em;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .bg-panel.first {
          background-color: #6366f1;
        }
        
        .bg-panel.second {
          background-color: #e5e7eb;
        }
        
        .menu-list {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-bottom: 0;
          padding-left: 0;
          list-style: none;
        }
        
        .menu-list-item {
          position: relative;
          overflow: hidden;
        }
        
        .menu-link {
          padding-top: 0.75em;
          padding-bottom: 0.75em;
          padding-left: 2em;
          gap: 0.75em;
          width: 100%;
          text-decoration: none;
          display: flex;
        }
        
        .menu-link-heading {
          z-index: 1;
          text-transform: uppercase;
          font-family: 'PP Neue Corp Tight', Arial, sans-serif;
          font-size: 5.625em;
          font-weight: 700;
          line-height: 0.75;
          transition: transform 0.55s cubic-bezier(0.65, 0.05, 0, 1);
          position: relative;
          text-shadow: 0px 1em 0px #d1d5db;
          color: #111827;
          margin: 0;
        }
        
        .eyebrow {
          z-index: 1;
          color: #6366f1;
          text-transform: uppercase;
          font-family: 'RM Mono', Arial, sans-serif;
          font-weight: 400;
          position: relative;
          margin: 0;
        }
        
        .menu-link-bg {
          z-index: 0;
          background-color: #1f2937;
          transform-origin: 50% 100%;
          transform-style: preserve-3d;
          transition: transform 0.55s cubic-bezier(0.65, 0.05, 0, 1);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transform: scale3d(1, 0, 1);
        }
        
        .menu-link:hover .menu-link-heading {
          transform: translate(0px, -1em);
          transition-delay: 0.1s;
        }
        
        .menu-link:hover .menu-link-bg {
          transform: scale(1, 1);
        }
        
        .menu-details {
          padding-left: 2em;
          gap: 1.25em;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }
        
        .p-small {
          font-size: 0.875em;
          font-family: Arial, Helvetica;
          margin: 0;
        }
        
        .socials-row {
          gap: 1.5em;
          display: flex;
          flex-direction: row;
        }
        
        .text-link {
          text-decoration: none;
          position: relative;
          color: #111827;
        }
        
        .text-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background: #6366f1;
          transform-origin: right center;
          transform: scale(0, 1);
          transition: transform 0.4s cubic-bezier(0.65, 0.05, 0, 1);
        }
        
        .text-link:hover::after {
          transform-origin: left center;
          transform: scale(1, 1);
        }
        
        @media screen and (max-width: 767px) {
          .menu {
            padding-top: 12em;
            width: 100%;
          }
          
          .bg-panel {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
          
          .menu-list-item {
            height: 4.5em;
          }
          
          .menu-link-heading {
            font-size: 4em;
          }
          
          .socials-row {
            gap: 1em;
          }
          
          .p-large.text-link {
            font-size: 1em;
          }
        }
        
        @media screen and (max-width: 479px) {
          .menu {
            padding-top: 14em;
            padding-bottom: 4em;
          }
        }
      `}</style>

      <div className="osmo-ui">
        <header className="header">
          <div className="container">
            <nav className="nav-row">
              <div>
                {/* Left side can be used for logo or other items if needed */}
              </div>
              <div className="nav-row__right">
                <button role="button" className="menu-button" onClick={toggleMenu}>
                  <div className="menu-button-text">
                    <p 
                      className="p-large" 
                      ref={el => menuButtonTextsRef.current[0] = el}
                    >
                      Menu
                    </p>
                    <p 
                      className="p-large" 
                      ref={el => menuButtonTextsRef.current[1] = el}
                    >
                      Close
                    </p>
                  </div>
                  <div className="icon-wrap">
                    <svg 
                      ref={menuButtonIconRef}
                      xmlns="http://www.w3.org/2000/svg" 
                      width="100%" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      className="menu-button-icon"
                    >
                      <path d="M7.33333 16L7.33333 -3.2055e-07L8.66667 -3.78832e-07L8.66667 16L7.33333 16Z" fill="currentColor"></path>
                      <path d="M16 8.66667L-2.62269e-07 8.66667L-3.78832e-07 7.33333L16 7.33333L16 8.66667Z" fill="currentColor"></path>
                      <path d="M6 7.33333L7.33333 7.33333L7.33333 6C7.33333 6.73637 6.73638 7.33333 6 7.33333Z" fill="currentColor"></path>
                      <path d="M10 7.33333L8.66667 7.33333L8.66667 6C8.66667 6.73638 9.26362 7.33333 10 7.33333Z" fill="currentColor"></path>
                      <path d="M6 8.66667L7.33333 8.66667L7.33333 10C7.33333 9.26362 6.73638 8.66667 6 8.66667Z" fill="currentColor"></path>
                      <path d="M10 8.66667L8.66667 8.66667L8.66667 10C8.66667 9.26362 9.26362 8.66667 10 8.66667Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </nav>
          </div>
        </header>
      </div>

      <div ref={navRef} className="nav">
        <div ref={overlayRef} className="overlay" onClick={closeNav}></div>
        <nav className="menu" ref={menuRef}>
          <div className="menu-bg">
            <div 
              className="bg-panel first" 
              ref={el => bgPanelsRef.current[0] = el}
            ></div>
            <div 
              className="bg-panel second" 
              ref={el => bgPanelsRef.current[1] = el}
            ></div>
            <div 
              className="bg-panel" 
              ref={el => bgPanelsRef.current[2] = el}
            ></div>
          </div>
          <div className="menu-inner">
            <ul className="menu-list">
              {menuItems.map((item, index) => (
                <li key={index} className="menu-list-item">
                  <a 
                    href={item.href} 
                    className="menu-link"
                    ref={el => menuLinksRef.current[index] = el}
                  >
                    <p className="menu-link-heading">{item.heading}</p>
                    <p className="eyebrow">{item.number}</p>
                    <div className="menu-link-bg"></div>
                  </a>
                </li>
              ))}
            </ul>
            <div className="menu-details">
              <p 
                className="p-small" 
                ref={el => fadeTargetsRef.current[0] = el}
              >
                Socials
              </p>
              <div className="socials-row">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    className="p-large text-link"
                    ref={el => fadeTargetsRef.current[index + 1] = el}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default AnimatedSideNav;
