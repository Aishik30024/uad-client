"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <header className="w-[95%] mx-auto rounded-xl p-4 flex items-center justify-between bg-transparent border-2 border-border-light dark:border-border-dark relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <div className="w-8 h-8 bg-primary-light dark:bg-primary-dark rounded-md" />
        <span className="ml-2 text-text-light dark:text-text-dark font-header text-xl">
          UADesigns
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden sm:flex items-center space-x-4">
        {['HOME', 'PROJECTS', 'OUR CONCEPT', 'CONTACTS'].map((item, index, arr) => (
          <div key={item} className="flex items-center">
            <Link
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-text-light dark:text-text-dark font-body text-sm hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            >
              {item}
            </Link>
            {index < arr.length - 1 && (
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
          {['HOME', 'PROJECTS', 'OUR CONCEPT', 'CONTACTS'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-text-light dark:text-text-dark font-body text-sm hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {item}
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
      `}</style>
    </header>
  );
}