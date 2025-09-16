"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: "1970",
    label: "SINCE",
    shortLabel: "'70",
    title: "Founding Excellence",
    description:
      "GERAX is founded in Gstaad, establishing itself as a prominent player in the local real estate market.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    ],
    backgroundColor: "rgb(20, 13, 7)",
    textColor: "white",
  },
  {
    year: "1985",
    label: "EXPANDING",
    shortLabel: "'85",
    title: "Expanding Horizons",
    description:
      "Expansion of GERAX's portfolio to include luxury properties and estates, solidifying its reputation for excellence.",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    ],
    backgroundColor: "transparent",
    textColor: "white",
  },
  {
    year: "1994",
    label: "INNOVATING",
    shortLabel: "'94",
    title: "Innovative Breakthroughs",
    description:
      "GERAX introduces innovative sales and rental strategies, setting new standards in the industry.",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    ],
    backgroundColor: "transparent",
    textColor: "white",
  },
  {
    year: "2012",
    label: "DIVERSIFYING",
    shortLabel: "'12",
    title: "Diversifying Services",
    description:
      "Launch of a dedicated construction and project management division, offering comprehensive services to clients.",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    ],
    backgroundColor: "rgb(246, 241, 235)",
    textColor: "black",
  },
];

function MainComponent() {
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
        scrub: 1.5, // Slightly increased for smoother feel
        start: "top top",
        end: () => `+=${trackRef.current.scrollWidth - window.innerWidth + 100}`, // Buffer for end
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
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <header className="fixed w-full top-0 z-50 px-6 py-4 flex justify-between items-center bg-[#1a1a1a]">
        <div className="flex items-center gap-4">
          <button className="text-white text-sm hover:text-gray-300 transition">
            MENU
          </button>
          <button className="border border-white/30 rounded-full w-8 h-8 flex items-center justify-center hover:border-white">
            <i className="fas fa-plus text-sm"></i>
          </button>
        </div>
        <Image
          src="https://www.gerax.ch/logo.svg"
          alt="Logo"
          width={100}
          height={32}
          className="h-8"
        />
        <div className="flex items-center gap-6">
          <span className="text-sm">EN</span>
          <button className="bg-white text-black px-4 py-2 text-sm hover:bg-gray-200 transition">
            GET IN TOUCH
          </button>
        </div>
      </header>

      <main>
        <section className="min-h-screen relative pt-24">
          <div className="absolute top-32 left-6 md:left-12">
            <div className="text-sm mb-4">ABOUT US</div>
            <h1 className="font-crimson-text text-7xl md:text-9xl leading-tight">
              Leading Gstaad
              <br />
              Real Estate
            </h1>
          </div>
          <div className="absolute bottom-32 left-6 md:left-12 max-w-xl">
            <p className="mb-6 text-lg">
              Since our inception in 1970, we've been setting the standard
              for professionalism, integrity, and expertise. With a firm
              commitment to our clients, discretion and a passion for perfection.
            </p>
            <p className="text-lg">
              Our team of over 30 dedicated professionals brings together a
              wealth of experience and a passion for exceeding expectations.
            </p>
          </div>
          <div className="absolute right-6 md:right-12 bottom-32">
            <div className="relative">
              <div className="text-[200px] md:text-[400px] font-crimson-text leading-none">
                54
              </div>
              <div className="absolute bottom-0 right-0 text-xl">
                Years of
                <br />
                experience
              </div>
            </div>
          </div>
        </section>

        <section
          ref={timelineRef}
          className="relative min-h-screen overflow-hidden"
        >
          <div className="camera h-screen">
            <div ref={trackRef} className="track flex h-full will-change-transform">
              {timelineData.map((chapter, index) => (
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
                    {index < timelineData.length - 1 && (
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
                                : "#fff",
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
                        style={{ color: chapter.textColor === "white" ? "#ff0000" : chapter.textColor }}
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
                          className="w-full h-[50vh] md:h-[70vh] object-cover"
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
        </section>

        <section className="min-h-screen relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
            alt="Mountain landscape"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
        </section>

        <section className="min-h-screen relative flex">
          <div className="w-1/2 p-12 relative">
            <Image
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5"
              alt="Luxury interior"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 text-sm">OUR VALUES</div>
          </div>
          <div className="w-1/2 flex items-center p-12">
            <div>
              <h2 className="font-crimson-text text-4xl md:text-5xl mb-8 leading-tight">
                At GeraX, we are more than a real estate agency - we are a
                family of committed professionals dedicated to your every need.
              </h2>
              <button className="bg-white text-black px-6 py-3 hover:bg-gray-200 transition">
                CONTACT US
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-3 gap-px">
          {[
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
          ].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Property ${index + 1}`}
              width={400}
              height={400}
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
          ))}
        </section>

        <footer className="py-12 px-6 md:px-12">
          <div className="flex items-center gap-4">
            <span className="text-sm">SINCE</span>
            <span className="text-2xl">1970</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default MainComponent;