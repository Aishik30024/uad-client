"use client";
import { useState, useEffect } from 'react';

export default function NewFooter() {
  const [showCard, setShowCard] = useState(true);

  const scrollToFooter = () => {
    const footerElement = document.getElementById('new-footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
      setShowCard(false);
    }
  };

  return (
    <>
      {/* Scroll Card - Fixed Position 
      {showCard && (
        <div className="fixed z-50 top-8 left-8 right-8 mx-auto max-w-md">
          <div className="h-32 w-full bg-gradient-to-br from-[#ff8064] to-[#725bdc] text-black rounded-2xl flex flex-col justify-center items-center gap-4 p-6 sm:h-40 md:h-48">
            <h2 className="font-header font-medium text-center text-2xl sm:text-3xl md:text-4xl leading-tight m-0">
              Scroll Now<br />Thank Yourself Later
            </h2>
            <button 
              onClick={scrollToFooter}
              className="bg-black text-white font-body font-normal px-6 py-3 rounded-lg text-sm sm:text-base border-none cursor-pointer hover:bg-gray-800 transition-colors"
            >
              Scroll
            </button>
          </div>
        </div>
      )}
        */}

      {/* Main Footer */}
      <footer 
        id="new-footer" 
        className="relative w-full min-h-screen mt-[80vh] z-[500] flex flex-col md:flex-row justify-evenly items-end p-20 md:px-8"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-[-7] bg-gradient-to-b from-transparent via-black/30 via-black/60 via-black/80 to-black"></div>
        
        {/* Backdrop Blur */}
        <div 
          className="absolute inset-0 z-[-5] backdrop-blur-[40px]"
          style={{
            maskImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 1) 30%, rgb(0, 0, 0))',
            WebkitMaskImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 1) 30%, rgb(0, 0, 0))'
          }}
        ></div>

        {/* Column 1 - Brand */}
        <div className="flex flex-col items-start justify-start p-4 w-full md:w-[28%] mb-8 md:mb-0">
          <h3 className="font-header font-medium text-2xl md:text-3xl mb-4 text-text-dark">
            CoolSite
          </h3>
          <p className="font-body text-textscd-dark mb-4">
            Made with <span className="text-[#BA6573]">❤</span> by Jux
          </p>
          
          {/* Social Links */}
          <div className="flex flex-row justify-start gap-4 mb-4">
            <a 
              href="https://codepen.io/Juxtopposed" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 rounded-sm flex justify-center items-center hover:bg-white/20 transition-colors"
            >
              <img 
                src="https://assets.codepen.io/9051928/codepen_1.png" 
                alt="CodePen" 
                className="h-4 object-cover"
              />
            </a>
            <a 
              href="https://twitter.com/juxtopposed" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 rounded-sm flex justify-center items-center hover:bg-white/20 transition-colors"
            >
              <img 
                src="https://assets.codepen.io/9051928/x.png" 
                alt="Twitter/X" 
                className="h-4 object-cover"
              />
            </a>
            <a 
              href="https://youtube.com/@juxtopposed" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 rounded-sm flex justify-center items-center hover:bg-white/20 transition-colors"
            >
              <img 
                src="https://assets.codepen.io/9051928/youtube_1.png" 
                alt="YouTube" 
                className="h-4 object-cover"
              />
            </a>
          </div>
          
          <p className="text-[#818181] text-sm font-body">
            2024 © All Rights Reserved
          </p>
        </div>

        {/* Column 2 - About */}
        <div className="flex flex-col items-start justify-start p-4 w-full md:w-[28%] mb-8 md:mb-0 bg-[#121212] rounded-2xl">
          <nav className="flex flex-col space-y-3">
            <a href="/about" className="text-textscd-dark hover:text-primary-light transition-colors font-body">
              About
            </a>
            <a href="/mission" className="text-textscd-dark hover:text-primary-light transition-colors font-body">
              Our mission
            </a>
            <a href="/privacy" className="text-textscd-dark hover:text-primary-light transition-colors font-body">
              Privacy Policy
            </a>
            <a href="/terms" className="text-textscd-dark hover:text-primary-light transition-colors font-body">
              Terms of service
            </a>
          </nav>
        </div>

        {/* Column 3 - Services */}
        <div className="flex flex-col items-start justify-start p-4 w-full md:w-[28%] bg-[#121212] rounded-2xl">
          <nav className="flex flex-col space-y-3">
            <a href="/services" className="text-textscd-dark hover:text-primary-light transition-colors font-body">
              Services
            </a>
            <a href="/products" className="text-textscd-dark hover:text-primary-light transition-colors font-body">
              Products
            </a>
            <a href="/careers" className="text-textscd-dark hover:text-primary-light transition-colors font-body">
              Join our team
            </a>
            <a href="/partners" className="text-textscd-dark hover:text-primary-light transition-colors font-body">
              Partner with us
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
