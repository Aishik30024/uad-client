"use client";

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

// Register the DrawSVGPlugin (ensure it's imported correctly; you may need to add it to your project if not already)
gsap.registerPlugin(DrawSVGPlugin);

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRefs = useRef([]);

  // Sync dark mode with system preference and toggle class
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation for underlines
  useEffect(() => {
    navRefs.current.forEach((el) => {
      if (el) {
        const path = el.querySelector('path');
        gsap.set(path, { drawSVG: "0%" });

        el.addEventListener('mouseenter', () => {
          gsap.to(path, { drawSVG: "100%", duration: 0.5, ease: "power2.out" });
        });

        el.addEventListener('mouseleave', () => {
          gsap.to(path, { drawSVG: "0%", duration: 0.5, ease: "power2.in" });
        });
      }
    });
  }, []);

  const navItems = ['HOME', 'PROJECTS', 'OUR CONCEPT', 'CONTACTS'];

  return (
    <header className="w-[95%] mx-auto rounded-xl p-4 flex items-center justify-between bg-transparent border-2 border-border-light dark:border-border-dark relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <div className="w-8 h-8 bg-primary-light dark:bg-primary-dark rounded-md" />
        <span className="ml-2 text-text-light dark:text-text-dark font-header text-xl">
          UADesigns
        </span>
      </div>

      {/* Desktop Navigation Links with Animated Underline */}
      <nav className="hidden sm:flex items-center space-x-4">
        {navItems.map((item, index) => (
          <div key={item} className="flex items-center">
            <Link
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-draw text-text-light dark:text-text-dark font-body text-sm hover:text-primary-light dark:hover:text-primary-dark transition-colors relative"
              ref={(el) => (navRefs.current[index] = el)}
            >
              <p className="text-draw__p">{item}</p>
              <div className="text-draw__box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 310 41"
                  fill="none"
                  preserveAspectRatio="none"
                  className="text-draw__box-svg"
                >
                  <path
                    d="M17.0039 33.582C32.2307 33.7406 47.4552 33.7271 62.676 33.7113C67.3044 33.7064 96.546 33.9549 104.728 32.9769C113.615 31.9146 104.516 29.2022 102.022 28.1821C89.9573 23.2459 77.3751 19.9248 65.0451 15.9546C57.8987 13.6536 37.2813 9.3934 44.2314 7.00157C50.9667 4.68363 64.2873 6.71856 70.4249 6.86582C105.866 7.71618 141.306 8.48751 176.75 9.49827C217.874 10.671 258.906 11.9547 300 15.3886"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </Link>
            {index < navItems.length - 1 && (
              <span className="text-text-light dark:text-text-dark mx-2">•</span>
            )}
          </div>
        ))}
      </nav>

      {/* Desktop Dark/Light Mode Toggle */}
      <div className="hidden sm:flex items-center">
        <div className="relative">
          <input
            type="checkbox"
            id="darkModeToggle"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className="sr-only"
          />
          <label
            htmlFor="darkModeToggle"
            className="toggle flex items-center justify-between cursor-pointer text-tertiary-light dark:text-tertiary-dark bg-background-dark dark:bg-background-light"
          >
            <span className="slider bg-primary-light dark:bg-primary-dark" />
            <span className={`absolute left-1 text-sm top-0 bottom-0 my-auto h-fit ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
              ☀️
            </span>
            <span className={`absolute right-1 text-sm top-0 bottom-0 my-auto h-fit ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}>
              🌙
            </span>
          </label>
        </div>
      </div>

      {/* Hamburger Menu Icon (Visible on Mobile) */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-around">
            <span className="block w-full h-1 bg-text-light dark:bg-text-dark rounded"></span>
            <span className="block w-full h-1 bg-text-light dark:bg-text-dark rounded"></span>
            <span className="block w-full h-1 bg-text-light dark:bg-text-dark rounded"></span>
          </div>
        </button>
      </div>

      {/* Hamburger Dropdown Menu (Mobile) */}
      <div
        className={`sm:hidden absolute top-full left-0 right-0 bg-background-light dark:bg-background-dark border-2 border-border-light dark:border-border-dark rounded-b-xl transition-all duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          {navItems.map((item, index) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-draw text-text-light dark:text-text-dark font-body text-sm hover:text-primary-light dark:hover:text-primary-dark transition-colors relative"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
              ref={(el) => (navRefs.current[navItems.length + index] = el)} // Separate refs for mobile
            >
              <p className="text-draw__p">{item}</p>
              <div className="text-draw__box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 310 41"
                  fill="none"
                  preserveAspectRatio="none"
                  className="text-draw__box-svg"
                >
                  <path
                    d="M17.0039 33.582C32.2307 33.7406 47.4552 33.7271 62.676 33.7113C67.3044 33.7064 96.546 33.9549 104.728 32.9769C113.615 31.9146 104.516 29.2022 102.022 28.1821C89.9573 23.2459 77.3751 19.9248 65.0451 15.9546C57.8987 13.6536 37.2813 9.3934 44.2314 7.00157C50.9667 4.68363 64.2873 6.71856 70.4249 6.86582C105.866 7.71618 141.306 8.48751 176.75 9.49827C217.874 10.671 258.906 11.9547 300 15.3886"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </nav>

        {/* Dark/Light Mode Toggle in Dropdown */}
        <div className="flex justify-center pb-4">
          <div className="relative">
            <input
              type="checkbox"
              id="darkModeToggleMobile"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              className="sr-only"
            />
            <label
              htmlFor="darkModeToggleMobile"
              className="toggle flex items-center justify-between cursor-pointer text-tertiary-light dark:text-tertiary-dark"
            >
              <span className="slider bg-primary-light dark:bg-primary-dark" />
              <span className={`absolute left-1 text-sm top-0 bottom-0 my-auto h-fit ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
                ☀️
              </span>
              <span className={`absolute right-1 text-sm top-0 bottom-0 my-auto h-fit ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}>
                🌙
              </span>
            </label>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .toggle {
          font-size: 1rem;
          border: 0.125em solid currentColor; /* Inherit text color (tertiary.light/dark) */
          border-radius: 2em;
          height: 1.5em;
          position: relative;
          width: 3.75em;
          background-color: #fafafa; /* background.light */
        }
        .slider {
          border-radius: 2em;
          display: block;
          height: 1em; /* Reduced size */
          left: 0.25em;
          position: absolute;
          top: 0.125em; /* Center vertically: (1.25em - 1em) / 2 */
          transition: left 0.25s;
          width: 1em;
          z-index: 2;
        }
        input:checked ~ .toggle .slider {
          left: 2.25em; /* Adjusted to maintain 0.25em margin on the right */
        }
        .text-draw {
          display: inline-block;
          position: relative;
        }
        .text-draw__p {
          margin: 0;
          font-family: monospace; /* Adjust as per your theme */
        }
        .text-draw__box {
          position: absolute;
          bottom: -10px; /* Adjust positioning as needed */
          left: 0;
          width: 100%;
          height: 20px; /* Adjust height */
          overflow: hidden;
        }
        .text-draw__box-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </header>
  );
}
