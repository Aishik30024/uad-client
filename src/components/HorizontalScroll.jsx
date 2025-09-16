'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const panelData = [
  {
    year: "2020",
    label: "START",
    shortLabel: "'20",
    title: "Panel 1",
    description: "This is the first panel with an image and text.",
    images: ['/horizontalScroll/img1.avif'],
    backgroundColor: "rgb(20, 13, 7)",
    textColor: "white",
  },
  {
    year: "2021",
    label: "GROWTH",
    shortLabel: "'21",
    title: "This is the second panel.",
    description: "This is the second panel with an image and text.",
    images: ['/horizontalScroll/img2.jpg'],
    backgroundColor: "transparent",
    textColor: "white",
  },
  {
    year: "2022",
    label: "INNOVATION",
    shortLabel: "'22",
    title: "Panel 3",
    description: "This is the third panel with an image and text.",
    images: ['/horizontalScroll/img3.jpeg'],
    backgroundColor: "transparent",
    textColor: "white",
  },
  {
    year: "2023",
    label: "EXPANSION",
    shortLabel: "'23",
    title: "Panel 4",
    description: "This is the fourth panel with an image and text.",
    images: ['/horizontalScroll/img4.jpg'],
    backgroundColor: "rgb(246, 241, 235)",
    textColor: "black",
  },
  {
    year: "2024",
    label: "MILESTONE",
    shortLabel: "'24",
    title: "Panel 5",
    description: "This is the fifth panel with an image and text.",
    images: ['/horizontalScroll/img5.jpg'],
    backgroundColor: "transparent",
    textColor: "white",
  },
];

export default function HorizontalScroll() {
  const timelineRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!timelineRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const horizontalTween = gsap.to(trackRef.current, {
        x: () => -(trackRef.current.scrollWidth - window.innerWidth),
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: timelineRef.current,
        pin: true,
        scrub: 1.5,
        start: "top top",
        end: () => `+=${trackRef.current.scrollWidth - window.innerWidth + 100}`,
        animation: horizontalTween,
        invalidateOnRefresh: true,
      });

      const chapters = trackRef.current.querySelectorAll(".timeline-chapter");
      chapters.forEach((chapter) => {
        gsap.from(chapter.querySelectorAll(".year-wrap, .timeline-info"), {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          scrollTrigger: {
            trigger: chapter,
            containerAnimation: horizontalTween,
            start: "left center",
            end: "right center",
            scrub: 1.5,
          },
        });

        const images = chapter.querySelectorAll(".parallax-image");
        images.forEach((img) => {
          gsap.to(img, {
            x: "-10%",
            ease: "none",
            scrollTrigger: {
              trigger: chapter,
              containerAnimation: horizontalTween,
              start: "left center",
              end: "right center",
              scrub: 1.5,
            },
          });
        });
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={timelineRef}
      className="relative min-h-screen overflow-hidden bg-black text-white snap-start"
    >
      <div className="camera h-screen">
        <div ref={trackRef} className="track flex h-full will-change-transform">
          {panelData.map((chapter, index) => (
            <div
              key={index}
              className="timeline-chapter min-w-[100vw] h-full flex items-center justify-between p-12 relative"
              style={{ backgroundColor: chapter.backgroundColor }}
              aria-label={`Timeline milestone for ${chapter.year}`}
            >
              <div className="chapter-line absolute top-0 left-1/2 w-[2px] h-full">
                <div
                  className="chapter-line-inner h-full"
                  style={{ backgroundColor: chapter.textColor }}
                ></div>
                {index < panelData.length - 1 && (
                  <div className="connector absolute bottom-10 left-1/2 -translate-x-1/2">
                    <div
                      className="connector-dot w-3 h-3 rounded-full"
                      style={{ backgroundColor: chapter.textColor }}
                    ></div>
                    <div
                      className="connector-border w-[2px] h-12"
                      style={{
                        backgroundColor:
                          chapter.textColor === "white"
                            ? "rgba(255, 255, 255, 0.5)"
                            : "#000",
                      }}
                    ></div>
                  </div>
                )}
              </div>

              <div className="year-wrap w-1/2">
                <div className="text-sm mb-4" style={{ color: chapter.textColor }}>
                  {chapter.label}
                </div>
                <div
                  className="font-crimson-text text-[100px] md:text-[200px] leading-none"
                  style={{ color: chapter.textColor }}
                >
                  {chapter.year}
                </div>
                <div className="timeline-info mt-8 max-w-xl">
                  <div className="text-sm mb-2" style={{ color: chapter.textColor }}>
                    {chapter.shortLabel}
                  </div>
                  <h2
                    className="font-crimson-text text-3xl md:text-4xl mb-4"
                    style={{ color: chapter.textColor }}
                  >
                    {chapter.title}
                  </h2>
                  <p className="text-lg" style={{ color: chapter.textColor, opacity: 0.8 }}>
                    {chapter.description}
                  </p>
                </div>
              </div>

              <div className="horizontal-photos w-1/2 flex gap-4">
                {chapter.images.map((src, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`relative ${imgIndex === 0 ? "parallax-image will-change-transform" : ""}`}
                  >
                    <Image
                      src={src}
                      alt={`${chapter.title} image ${imgIndex + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-[50vh] md:h-[70vh] object-cover rounded-2xl"
                      loading={imgIndex === 0 ? "eager" : "lazy"}
                      sizes="50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300 z-10"
      >
        Explore More
      </button>
    </section>
  );
}