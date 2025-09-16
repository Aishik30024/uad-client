"use client";
import Footer from "@/components/Footer";
import { useState } from "react";
import GoldenSpiral from "../../../components/GoldenSpiral";
import Header from "../../../components/Header";
import projects from "../../projectsData";

function MainComponent() {
  const project = projects.find((p) => p.slug === "bee");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const bentoImages = [
    { src: "/bee/colorpallete.png", alt: "Color Palette" },
    { src: "/bee/photo1.png", alt: "Granola Bar" },
    { src: "/bee/Product.png", alt: "Product Packaging" },
    { src: "/bee/product3.png", alt: "Tote Bag" },
    { src: "/bee/Product2.png", alt: "Product Display" },
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setIsAnimating(true);
    // Reset animation state after animation completes
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevious = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setSelectedImageIndex((prev) =>
      prev === 0 ? bentoImages.length - 1 : prev - 1
    );
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNext = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setSelectedImageIndex((prev) =>
      prev === bentoImages.length - 1 ? 0 : prev + 1
    );
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="flex items-center flex-col bg-background-light dark:bg-background-dark min-h-screen">
      {/* Header */}
      <div className="w-[95%] mx-auto">
        <div className="mt-[2vh] snap-start">
          <Header />
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-[90%] mx-auto bg-background-dark dark:bg-background-dark text-text-dark dark:text-text-dark px-4 py-16 flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Left Content */}
          <div className="md:w-2/5">
            <h1 className="text-5xl font-bold mb-6 flex items-center gap-3 text-text-dark dark:text-text-dark">
              Bee Sweets
              <span className="text-4xl">🐝</span>
            </h1>
            <p className="font-inter font-bold text-[32px] text-textscd-dark dark:text-textscd-dark mb-8">
              Bee Sweet is a health-focused snack brand offering yummy,
              guilt-free candies, granola bars, and mueslis. The brand needed
              something that felt as joyful and natural as its
              products—something playful, trustworthy, and irresistibly vibrant.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-textscd-dark dark:text-textscd-dark">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Right Side - Decorative Elements */}
          <div className="md:w-3/5 flex justify-center">
            <div className="w-[95%] relative">
              <img
                src="/bee/Hero Image.png"
                alt="Tote Bag"
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

        {/* Product Cards Section */}
        <div className="w-[95%] mx-auto px-4 py-16 bg-gradient-to-b from-background-dark to-category-7 dark:from-background-dark dark:to-category-7 flex justify-center">
          <div className="bg-gradient-to-r from-tertiary-light to-tertiary-dark dark:from-tertiary-light dark:to-tertiary-dark rounded-2xl p-8">
            <img
              src="/bee/Main bee.png"
              alt="Bee Sweets Products"
              className="w-full h-auto rounded-xl mx-auto"
            />
          </div>
        </div>

      {/* Why We Did It Section */}
      <div className="w-[95%] mx-auto px-4 py-16 bg-background-dark dark:bg-background-dark flex justify-center">
        <div>
          <h2 className="font-poppins font-bold text-[128px] mb-4 text-text-dark dark:text-text-dark">
            Why We Did It?
          </h2>
          <h3 className="font-poppins font-bold text-[36px] mb-3 text-tertiary-light dark:text-tertiary-light">
            To Make Health Feel Joyful, Not Clinical.
          </h3>
          <p className="font-inter font-bold text-[32px] text-textscd-dark dark:text-textscd-dark mb-12 max-w-3xl">
            Our aim was to reject the sterile aesthetic common in "healthy"
            brands. Bee Sweet needed to look as fun as it tastes—so the visual
            system bursts with color, motion, and personality.
          </p>
          <div className="bg-background-light dark:bg-background-dark rounded-3xl p-8">
            <div className="flex justify-center items-center gap-8">
              <img
                src="/bee/Why we Did it.png"
                alt="Bee Sweet Concept"
                className="w-full h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* The Vibe Section */}
      <div className="w-[95%] mx-auto px-4 py-16 bg-background-dark dark:bg-background-dark flex justify-center relative">
        <div>
          <h2 className="font-poppins font-bold text-[128px] mb-4 text-text-dark dark:text-text-dark">
            The Vibe
          </h2>
          <p className="font-inter font-bold text-[32px] text-textscd-dark dark:text-textscd-dark mb-16 max-w-1xl">
            Beyond packaging, the entire identity system is designed to be
            sticky—memorable, colorful, and lovable at every touchpoint.
          </p>

          {/* Typography Display Card */}
          <div className="relative">
            {/* First Row: Golden Spiral (Top-Left) and Image (Right) */}
            <div className="flex items-center gap-12 mb-16 justify-center relative">
              <div className="w-1/4 absolute top-0 left-0">
                <GoldenSpiral />
              </div>
              <div className="w-3/4 ml-[25%]">
                <div
                  className="rounded-3xl p-8"
                  style={{ backgroundColor: "#F36D18" }}
                >
                  <img
                    src="/bee/Typography.png"
                    alt="Tote Bag"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>

            {/* Second Row: Image (Left) and Golden Spiral (Bottom-Right) */}
            <div className="flex items-center gap-12 justify-center relative w-full">
              <div className="w-3/4 mr-[25%]">
                <div className="bg-background-light dark:bg-background-dark rounded-3xl p-3">
                  <img
                    src="/bee/colorpalleteFood.png"
                    alt="Color Palette"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
              <div className="w-1/4 absolute bottom-0 right-0 flex justify-end">
                <GoldenSpiral />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography & Color Story Section */}
      <section
        id="Bento-Grid"
        className="w-[95%] mx-auto px-4 py-16 bg-background-dark dark:bg-background-dark flex justify-center"
      >
        <div>
          <h2 className="font-poppins font-bold text-[128px] mb-4 text-text-dark dark:text-text-dark">
            Typography & Color Story
          </h2>
          <h3 className="font-poppins font-bold text-[36px] mb-8 text-text-dark dark:text-text-dark">
            Bee Sweet's Identity Blends Boldness With Charm.
          </h3>
          <p className="font-inter font-bold text-[32px] text-textscd-dark dark:text-textscd-dark mb-16 max-w-3xl">
            Magic Retro adds a nostalgic, whimsical flair to the logo and key
            headings, while Poppins ensures clean, modern legibility across
            touchpoints. The palette blends warm yellow, zesty orange, and
            earthy brown—a vibrant mix that evokes flavor, warmth, and natural
            goodness.
          </p>
          <div className="grid grid-cols-12 grid-rows-8 gap-4">
            <div
              onClick={() => handleImageClick(0)}
              className="col-span-4 row-span-4 bg-background-light dark:bg-background-dark rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            >
              <img
                src={bentoImages[0].src}
                alt={bentoImages[0].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              onClick={() => handleImageClick(1)}
              className="col-span-3 row-span-4 col-start-5 bg-background-light dark:bg-background-dark rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            >
              <img
                src={bentoImages[1].src}
                alt={bentoImages[1].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              onClick={() => handleImageClick(2)}
              className="col-span-5 row-span-4 col-start-8 bg-tertiary-light dark:bg-tertiary-dark rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            >
              <img
                src={bentoImages[2].src}
                alt={bentoImages[2].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              onClick={() => handleImageClick(3)}
              className="col-span-6 row-span-4 col-start-7 row-start-5 bg-secondary-light dark:bg-secondary-dark rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            >
              <img
                src={bentoImages[3].src}
                alt={bentoImages[3].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              onClick={() => handleImageClick(4)}
              className="col-span-6 row-span-4 col-start-1 row-start-5 bg-tertiary-light dark:bg-tertiary-dark rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            >
              <img
                src={bentoImages[4].src}
                alt={bentoImages[4].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Carousel Modal */}
          {selectedImageIndex !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
              <div className="relative w-full max-w-[800px] max-h-[600px] bg-[#1a1a1a] rounded-xl p-4">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full text-black text-2xl flex items-center justify-center hover:bg-gray-200 transition-colors duration-300 shadow-lg z-10"
                >
                  ×
                </button>

                {/* Updated Navigation Buttons */}
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 rounded-full text-white text-2xl flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm z-20"
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 rounded-full text-white text-2xl flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm z-20"
                >
                  ›
                </button>

                {/* Image Container */}
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    src={bentoImages[selectedImageIndex].src}
                    alt={bentoImages[selectedImageIndex].alt}
                    className={`max-w-full max-h-[500px] object-contain rounded-lg shadow-2xl ${
                      isAnimating ? "slide-animation" : ""
                    }`}
                  />

                  {/* Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 text-center text-white bg-black bg-opacity-50 p-2 rounded-b-lg backdrop-blur-sm">
                    {bentoImages[selectedImageIndex].alt}
                  </div>
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 px-3 py-1 rounded-full text-white text-sm backdrop-blur-sm">
                  {selectedImageIndex + 1} / {bentoImages.length}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Inter:wght@700&display=swap");
        .font-poppins {
          font-family: "Poppins", sans-serif;
        }
        .font-inter {
          font-family: "Inter", sans-serif;
        }
        /* Slide Animation */
        .slide-animation {
          animation: slide 0.3s ease-in-out;
        }

        @keyframes slide {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* Smooth transitions */
        .fixed {
          transition: all 0.3s ease-in-out;
        }

        /* Image hover effect */
        .bento-image {
          transition: all 0.3s ease-in-out;
        }

        .bento-image:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        /* Navigation button hover animation */
        button {
          transition: all 0.2s ease-in-out;
        }

        button:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
