"use client";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from 'react';
import Header from "../../../components/Header";

function MainComponent() {
    const [hovered, setHovered] = useState(false);
  return (
    <div className="flex items-center flex-col w-full bg-background-light dark:bg-background-dark min-h-screen">
      {/* Header */}
      <div className="w-[95%] sm:w-[90%] mx-auto">
        <div className="mt-[2vh] snap-start">
          <Header />
        </div>
      </div>

      {/* Image Sections */}
      <main className="w-full">
        <section className="py-16 w-full bg-background-dark dark:bg-background-dark">
          <div className="max-w-[90%] mx-auto flex items-center justify-center">
            <img
              src="/bee/Artboard 1.png"
              alt="Artboard 1"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </section>
         {/* Section: Bee Sweet Overview */}
        <section className="py-16 px-6 bg-background-dark dark:bg-background-dark">
  <div className="max-w-[90%] mx-auto">
    <h3 className="text-5xl font-header text-text-dark dark:text-text-dark text-center mb-6">
      About the Bee Sweet
    </h3>
    <h2 className="text-4xl font-bold font-header text-text-dark dark:text-text-dark text-center mb-8">
      Bee Sweet healthy yummy candies granola bars mueslis project minds tastebuds strategic vibrant identity stand unforgettable naming brand strategy development packaging designs fun touch equally unforgettable
    </h2>
    <h3 className="text-2xl font-body text-text-dark dark:text-textscd text-center mb-12">
      What we did for Bee Sweet
    </h3>

    {/* Updated layout using flex instead of grid */}
    <div className="flex flex-wrap justify-center gap-4 max-w-[45%] mx-auto">
      <div className="bg-category-2 dark:bg-category-3 text-text-dark dark:text-text-dark font-button text-lg rounded-full py-2 px-3 text-center">
        Naming
      </div>
      <div className="bg-category-2 dark:bg-category-3 text-text-dark dark:text-text-dark font-button text-lg rounded-full py-2 px-3 text-center">
        Brand Strategy
      </div>
      <div className="bg-category-2 dark:bg-category-3 text-text-dark dark:text-text-dark font-button text-lg rounded-full py-2 px-3 text-center">
        Brand Identity
      </div>
      <div className="bg-category-2 dark:bg-category-3 text-text-dark dark:text-text-dark font-button text-lg rounded-full py-2 px-3 text-center">
        Brand Development
      </div>
      <div className="bg-category-2 dark:bg-category-3 text-text-dark dark:text-text-dark font-button text-lg rounded-full py-2 px-3 text-center">
        Packaging Designs
      </div>
    </div>
  </div>
</section>

        <section className="py-16 w-full bg-background-dark dark:bg-background-dark">
          <div className="max-w-[90%] mx-auto flex items-center justify-center">
            <img
              src="/bee/Artboard 3.png"
              alt="Artboard 1"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </section>
        <section className="py-16 w-full bg-background-dark dark:bg-background-dark">
          <div className="max-w-[90%] mx-auto flex items-center justify-center">
            <img
              src="/bee/Artboard 4.png"
              alt="Artboard 1"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <section className="py-16 w-full bg-background-dark dark:bg-background-dark">
          <div className="max-w-[90%] mx-auto flex items-center justify-center">
            <img
              src="/bee/Bee sweet animation.gif"
              alt="Artboard 1"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </section>
        </section><section className="py-16 w-full bg-background-dark dark:bg-background-dark">
          <div className="max-w-[90%] mx-auto flex items-center justify-center">
            <img
              src="/bee/Artboard 6.png"
              alt="Artboard 1"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </section>
        <section
  className="py-16 w-[90%] bg-cover bg-center bg-no-repeat relative mx-auto rounded-lg"
  style={{
    backgroundImage: "url('/bee/Artboard 7 background.png')",
  }}
  onMouseEnter={() => setHovered(true)}
>
      {/* Inline animation styles */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .fade-in {
            animation: fadeIn 2s ease-in-out forwards;
          }
        `}
      </style>

      <div className="max-w-[90%] mx-auto flex items-center justify-center relative z-0 ">
        <img
          src="/bee/Artboard 7 overlay.png"
          alt="Overlay"
          className={`max-w-full h-auto rounded-lg ${
            hovered ? 'fade-in' : 'opacity-0'
          }`}
        />
      </div>
    </section>
    <section className="py-16 w-full bg-background-dark dark:bg-background-dark">
          <div className="max-w-[90%] mx-auto flex items-center justify-center">
            <img
              src="/bee/Artboard 8.png"
              alt="Artboard 1"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </section>
        {/* Section 9: Font Guide */}
        <section className="py-16 px-6 bg-background-dark dark:bg-background-dark">
          <div className="max-w-[90%] mx-auto">
            <div className="grid grid-cols-8 grid-rows-6 gap-1">
              {/* Div 1: Brand Heading Font */}
              <div className="col-span-4 row-span-3 bg-white dark:bg-category-2 p-6 rounded-lg shadow-md flex items-center justify-center overflow-hidden max-h-full min-h-[300px]">
                <div className="text-center">
                  <h3 className="text-3xl font-magicretro text-gray-800 dark:text-text-dark">
                    Brand Heading Font
                  </h3>
                </div>
              </div>

              {/* Div 2: Brand Body Font */}
              <div className="col-span-4 row-span-3 col-start-5 bg-white dark:bg-category-2 p-6 rounded-lg shadow-md flex items-center justify-center overflow-hidden max-h-full min-h-[300px]">
                <div className="text-center">
                  <h3 className="text-3xl font-button font-semibold text-gray-800 dark:text-text-dark">
                    Brand Body Font
                  </h3>
                </div>
              </div>

              {/* Div 3: Magic Retro Details */}
              <div className="col-span-2 row-span-3 row-start-4 bg-white dark:bg-category-2 px-3 py-6 rounded-lg shadow-md overflow-hidden max-h-full min-h-[300px]">
                <div className="flex flex-col justify-between h-full mx-6 whitespace-normal leading-loose break-words">
                  <h4 className="text-2xl font-magicretro text-gray-800 dark:text-text-dark mb-2">Magic Retro</h4>
                  <div className="text-left">
                    <p className="text-xl font-magicretro text-gray-800 dark:text-text-dark">ABCDEFGHIJKLMN</p>
                    <p className="text-xl font-magicretro text-gray-800 dark:text-text-dark">OPQRSTUVWXYZ</p>
                    <p className="text-xl font-magicretro text-gray-800 dark:text-text-dark">abcdefghijklmn</p>
                    <p className="text-xl font-magicretro text-gray-800 dark:text-text-dark">opqrstuvwxyz</p>
                    <p className="text-xl font-magicretro text-gray-800 dark:text-text-dark">1234567890</p>
                    <p className="text-xl font-magicretro text-gray-800 dark:text-text-dark">Regular</p>
                  </div>
                </div>
              </div>

              {/* Div 4: Aa in Magic Retro */}
              <div className="col-span-2 row-span-3 col-start-3 row-start-4 bg-white dark:bg-category-3 px-6 py-0 rounded-lg shadow-md flex items-end justify-center overflow-hidden max-h-full min-h-[300px]">
                <span className="text-9xl font-magicretro text-gray-800 dark:text-text-dark">Aa</span>
              </div>

              {/* Div 5: Aa in Poppins (swapped from Div 6) */}
              <div className="col-span-2 row-span-3 col-start-5 row-start-4 bg-white dark:bg-category-3 px-6 py-0 rounded-lg shadow-md flex items-end justify-center overflow-hidden max-h-full min-h-[300px]">
                <span className="text-9xl font-button font-semibold text-gray-800 dark:text-text-dark">Aa</span>
              </div>

              {/* Div 6: Poppins Details (swapped from Div 5) */}
              <div className="col-span-2 row-span-3 col-start-7 row-start-4 bg-white dark:bg-category-2 px-3 py-6 rounded-lg shadow-md overflow-hidden max-h-full min-h-[300px]">
                <div className="flex flex-col justify-between h-full mx-6 whitespace-normal leading-loose break-words">
                  <h4 className="text-2xl font-button font-semibold text-gray-800 dark:text-text-dark mb-2">Poppins</h4>
                  <div className="text-left">
                    <p className="text-xl font-button text-gray-800 dark:text-text-dark">ABCDEFGHIJKLMN</p>
                    <p className="text-xl font-button text-gray-800 dark:text-text-dark">OPQRSTUVWXYZ</p>
                    <p className="text-xl font-button text-gray-800 dark:text-text-dark">abcdefghijklmn</p>
                    <p className="text-xl font-button text-gray-800 dark:text-text-dark">opqrstuvwxyz</p>
                    <p className="text-xl font-button text-gray-800 dark:text-text-dark">1234567890</p>
                    <p className="text-xl font-button text-gray-800 dark:text-text-dark">Regular</p>
                  </div>
                </div>
              </div>
            </div>
            <section className="py-16 w-full bg-background-dark dark:bg-background-dark">
          <div className="max-w-[90%] mx-auto flex items-center justify-center">
            <img
              src="/bee/Artboard 10.png"
              alt="Artboard 1"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </section>
        <section className="py-16 w-full bg-background-dark dark:bg-background-dark">
          <div className="max-w-[90%] mx-auto flex items-center justify-center">
            <img
              src="/bee/Artboard 11.png"
              alt="Artboard 1"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </section>
        <section className="py-16 w-full bg-background-dark dark:bg-background-dark">
          <div className="max-w-[90%] mx-auto flex items-center justify-center">
            <img
              src="/bee/Artboard 12.png"
              alt="Artboard 1"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </section>
        <section className="py-16 w-full bg-background-dark dark:bg-background-dark">
          <div className="max-w-[90%] mx-auto flex items-center justify-center">
            <img
              src="/bee/Artboard 13.png"
              alt="Artboard 1"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </section>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <Link
                href="/styleguide"
                className="inline-block px-8 py-3 bg-primary-dark dark:bg-primary-dark text-text-dark dark:text-text-dark font-button font-semibold rounded-lg hover:bg-primary-light dark:hover:bg-primary-light transition-colors"
              >
                See it live
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default MainComponent;