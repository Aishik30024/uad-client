"use client";
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

export default function ServicesSlideshow({ slides }) {
  const sectionRef = useRef(null);
  const slideshowRef = useRef(null);
  const canvasRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Simplified Text Scramble Effect
  const scrambleText = (element, newText, duration) => {
    if (!element) return;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const originalText = element.textContent || '';
    const maxLength = Math.max(originalText.length, newText.length);
    const frames = 20;
    let frame = 0;

    const update = () => {
      if (frame >= frames) {
        element.textContent = newText;
        return;
      }
      const progress = frame / frames;
      let output = '';
      for (let i = 0; i < maxLength; i++) {
        if (i >= newText.length) {
          output += '';
        } else if (progress > i / maxLength) {
          output += newText[i];
        } else {
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      element.textContent = output;
      frame++;
      setTimeout(update, duration * 1000 / frames);
    };
    update();
  };

  useEffect(() => {
    const section = sectionRef.current;
    const slideshow = slideshowRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    let images = [];
    let scrollTimeout;

    // Preload images with error handling
    slides.forEach((slide, index) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => {
        images[index] = img;
        if (index === 0 && ctx) {
          drawPixelatedImage(0, 1);
        }
      };
      img.onerror = () => console.error(`Failed to load image: ${slide.image}`);
    });

    // Pixelation function
    const drawPixelatedImage = (slideIndex, pixelSize) => {
      const img = images[slideIndex];
      if (!img || !ctx || !slideshow) return;

      canvas.width = slideshow.offsetWidth;
      canvas.height = slideshow.offsetHeight;

      const scaledWidth = canvas.width / pixelSize;
      const scaledHeight = canvas.height / pixelSize;
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight);
      ctx.drawImage(canvas, 0, 0, scaledWidth, scaledHeight, 0, 0, canvas.width, canvas.height);
    };

    // Handle horizontal scroll with debouncing
    const handleScroll = () => {
      if (!slideshow) return;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollLeft = slideshow.scrollLeft;
        const slideWidth = slideshow.offsetWidth;
        const newSlideIndex = Math.round(scrollLeft / slideWidth);

        if (newSlideIndex !== currentSlide && newSlideIndex >= 0 && newSlideIndex < slides.length) {
          setCurrentSlide(newSlideIndex);

          // Pixelation animation
          gsap.to({ pixelSize: 1 }, {
            pixelSize: 50,
            duration: 0.4,
            onUpdate: function () {
              drawPixelatedImage(currentSlide, this.targets()[0].pixelSize);
            },
            onComplete: () => {
              drawPixelatedImage(newSlideIndex, 50);
              gsap.to({ pixelSize: 50 }, {
                pixelSize: 1,
                duration: 0.4,
                onUpdate: function () {
                  drawPixelatedImage(newSlideIndex, this.targets()[0].pixelSize);
                },
              });
            },
          });

          // Scramble text
          const titleEl = slideshow.querySelector(`.title[data-slide="${newSlideIndex}"]`);
          const subtitleEl = slideshow.querySelector(`.subtitle[data-slide="${newSlideIndex}"]`);
          if (titleEl && subtitleEl) {
            scrambleText(titleEl, slides[newSlideIndex].title, 0.8);
            scrambleText(subtitleEl, slides[newSlideIndex].subtitle, 0.8);
          }
        }
      }, 100); // Debounce for 100ms
    };

    if (slideshow) {
      slideshow.addEventListener('scroll', handleScroll);
    }

    // Handle resize
    const handleResize = () => {
      if (images[currentSlide] && ctx) {
        drawPixelatedImage(currentSlide, 1);
      }
    };
    window.addEventListener('resize', handleResize);

    // Ensure section snaps into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (slideshow) {
        slideshow.removeEventListener('scroll', handleScroll);
      }
      if (section) {
        observer.unobserve(section);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [currentSlide, slides.length]);

  return (
    <section
      id="Services"
      ref={sectionRef}
      className="h-screen m-4 flex items-center justify-center bg-background-light dark:bg-background-dark snap-start"
    >
      <div
        ref={slideshowRef}
        className="relative w-full h-full rounded-[12px] overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex"
        style={{ scrollBehavior: 'smooth' }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full relative snap-start"
            style={{ scrollSnapAlign: 'start' }}
          >
            <canvas
              ref={index === currentSlide ? canvasRef : null}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-between p-12">
              <div className="bg-backgroundSCD-light/80 dark:bg-backgroundSCD-dark/80 rounded-[12px] p-6 max-w-[35%]">
                <h2 className="title font-bebas text-text-light dark:text-text-dark text-4xl" data-slide={index}>
                  {slide.title}
                </h2>
              </div>
              <div className="bg-backgroundSCD-light/80 dark:bg-backgroundSCD-dark/80 rounded-[12px] p-6 max-w-[35%]">
                <p className="subtitle font-inter text-text-light dark:text-text-dark text-lg" data-slide={index}>
                  {slide.subtitle}
                </p>
              </div>
            </div>
            {index === 0 && (
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-[300px] bg-background-dark rounded-full">
                <div
                  className="w-full bg-background-light rounded-full transition-all duration-500"
                  style={{ height: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        @media (max-width: 1024px) {
          .absolute.inset-0 {
            flex-direction: column !important;
            justify-content: space-between !important;
            padding: 1rem !important;
          }

          .title {
            font-size: 2rem !important;
          }

          .subtitle {
            font-size: 1.25rem !important;
          }
        }

        @media (max-width: 640px) {
          .absolute.inset-0 {
            flex-direction: column !important;
            padding: 0.5rem !important;
          }

          .title {
            font-size: 1.5rem !important;
          }

          .subtitle {
            font-size: 1rem !important;
          }
        }

        /* Custom scrollbar */
        .relative::-webkit-scrollbar {
          height: 8px;
        }

        .relative::-webkit-scrollbar-track {
          background: #2d2d2d;
          border-radius: 4px;
        }

        .relative::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }

        .relative::-webkit-scrollbar-thumb:hover {
          background: #aaa;
        }
      `}</style>
    </section>
  );
}