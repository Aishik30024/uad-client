"use client";
import Footer from '@/components/Footer';
import Header from '../../../components/Header';
import projects from "../../projectsData";

function MainComponent() {
  const project = projects.find(p => p.slug === "craftedcacao");

  return (
    <div className="flex flex-col bg-background-light dark:bg-background-dark min-h-screen">
      {/* Header */}
      <div className="w-[95%] mx-auto">
        <div className="mt-[2vh] snap-start">
          <Header />
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-[95%] mx-auto bg-background-dark dark:bg-background-dark text-text-dark dark:text-text-dark px-4 py-16 flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6 flex items-center gap-3 text-text-dark dark:text-text-dark">
              Crafted Cacao
              <span className="text-4xl">🍫</span>
            </h1>
            <p className="font-inter font-bold text-[32px] text-textscd-dark dark:text-textscd-dark mb-8">
              Delectable Hot Chocolate Adventure. Designing Irresistible Packaging for a
              Hot Chocolate Experience
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-textscd-dark dark:text-textscd-dark">
              {project.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Right Side - Decorative Elements */}
          <div className="md:w-1/2 flex justify-center">
            <div className="grid grid-cols-4 gap-4 place-items-center">
              <img
                src="/craftedcacao/img2.png"
                alt="Tote Bag"
                className="w-full h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="w-[95%] mx-auto px-4 py-16 bg-gradient-to-b from-background-dark to-category-7 dark:from-background-dark dark:to-category-7 flex justify-center">
        <div className="bg-gradient-to-r from-tertiary-light to-tertiary-dark dark:from-tertiary-light dark:to-tertiary-dark rounded-2xl p-8">
          <img
            src="/craftedcacao/img3.png"
            alt="Crafted Cacao Products"
            className="w-full h-auto rounded-xl mx-auto"
          />
        </div>
      </div>

      {/* Why We Did It Section */}
      <div className="w-[95%] mx-auto px-4 py-16 bg-background-dark dark:bg-background-dark flex justify-center">
        <div>
          <h2 className="font-poppins font-bold text-[128px] mb-4 text-text-dark dark:text-text-dark">Why We Did It?</h2>
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
                src="/craftedcacao/img4.png"
                alt="Crafted Cacao Concept"
                className="w-full h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* The Vibe Section */}
      <div className="w-[95%] mx-auto px-4 py-16 bg-background-dark dark:bg-background-dark flex justify-center">
        <div>
          <h2 className="font-poppins font-bold text-[128px] mb-4 text-text-dark dark:text-text-dark">The Vibe</h2>
          <p className="font-inter font-bold text-[32px] text-textscd-dark dark:text-textscd-dark mb-16 max-w-1xl">
            Beyond packaging, the entire identity system is designed to be sticky—memorable, colorful, and lovable at every touchpoint.
            
          </p>

          {/* Typography Display Card */}
          <div className="flex items-center gap-12 mb-16 justify-center">
            <div className="w-1/4 flex justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-32 h-32 text-text-dark dark:text-text-dark animate-spin-slow"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M50,10 A40,40 0 0,1 90,50 A40,40 0 0,1 50,90 A40,40 0 0,1 10,50 A40,40 0 0,1 50,10 Z"
                  strokeDasharray="4,6"
                />
              </svg>
            </div>
            <div className="w-3/4">
              <div className="bg-primary-light dark:bg-primary-dark rounded-3xl p-8">
                <img
                  src="/craftedcacao/img5.png"
                  alt="Tote Bag"
                  className="w-full h-auto mx-auto block"
                />
              </div>
            </div>
          </div>

          {/* Color Palette Card */}
          <div className="flex items-center gap-12 justify-center">
            <div className="w-3/4">
              <div className="bg-background-light dark:bg-background-dark rounded-3xl p-3">
                <img
                  src="/craftedcacao/img6.png"
                  alt="Color Palette"
                  className="w-full h-auto mx-auto block"
                />
              </div>
            </div>
            <div className="w-1/4 flex justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-32 h-32 text-text-dark dark:text-text-dark animate-spin-slow"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M50,10 A40,40 0 0,1 90,50 A40,40 0 0,1 50,90 A40,40 0 0,1 10,50 A40,40 0,0,1 50,10 Z"
                  strokeDasharray="4,6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Typography & Color Story Section */}
      <section id="Bento-Gird" className="w-[95%] mx-auto px-4 py-16 bg-background-dark dark:bg-background-dark flex justify-center">
        <div>
          <h2 className="font-poppins font-bold text-[128px] mb-4 text-text-dark dark:text-text-dark">Typography & Color Story</h2>
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
            <div className="col-span-4 row-span-4 bg-background-light dark:bg-background-dark rounded-2xl overflow-hidden">
              <img
                src="/craftedcacao/img7.png"
                alt="Color Palette"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-3 row-span-4 col-start-5 bg-background-light dark:bg-background-dark rounded-2xl overflow-hidden">
              <img
                src="/craftedcacao/img8.png"
                alt="Granola Bar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-5 row-span-4 col-start-8 bg-tertiary-light dark:bg-tertiary-dark rounded-2xl overflow-hidden">
              <img
                src="/craftedcacao/img9.png"
                alt="Product Packaging"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-6 row-span-4 col-start-7 row-start-5 bg-secondary-light dark:bg-secondary-dark rounded-2xl overflow-hidden">
              <img
                src="/bee/product3.png"
                alt="Tote Bag"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-6 row-span-4 col-start-1 row-start-5 bg-tertiary-light dark:bg-tertiary-dark rounded-2xl overflow-hidden">
              <img
                src="/bee/Product2.png"
                alt="Product Display"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Inter:wght@700&display=swap');
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;