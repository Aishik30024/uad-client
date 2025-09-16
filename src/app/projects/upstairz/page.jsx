/* src/app/works/upstairz/page.jsx - Updated Upstairz case study page */
"use client";
import { useState, useEffect } from "react";
import projects from "../../projectsData";

function MainComponent() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const project = projects.find(p => p.slug === "Upstairz");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with centered text and fade in */}
      <div
        className={`min-h-screen bg-black text-white flex items-center justify-center transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-6">
            Ciao, we are Sublimio.
          </h1>
          <p className="text-2xl md:text-4xl text-gray-400 font-light">
            We create solid strategies
            <br />
            for ambitious brands.
          </p>
        </div>
      </div>

      {/* Project description section */}
      <div className="relative py-24 bg-gray-50">
        {/* Project Overview */}
        <div className="max-w-4xl mx-auto px-4 mb-32">
          <h1 className="text-4xl font-light mb-4">{project.title}</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* What We Did Section */}
        <div className="max-w-4xl mx-auto px-4 mb-32">
          <h2 className="text-2xl font-semibold mb-4">What We Did</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8">
            {project.tags.map(tag => (
              <div key={tag} className="text-sm tracking-wider text-gray-600">
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Brand Colors Section */}
        <div className="max-w-5xl mx-auto px-4 mb-32">
          <h2 className="text-3xl font-light mb-12">Brand Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="h-48 bg-[#40E0D0] mb-4"></div>
              <p className="text-sm text-gray-600">#40E0D0</p>
              <p className="text-sm text-gray-400">Primary Turquoise</p>
            </div>
            <div>
              <div className="h-48 bg-[#FF69B4] mb-4"></div>
              <p className="text-sm text-gray-600">#FF69B4</p>
              <p className="text-sm text-gray-400">Accent Pink</p>
            </div>
            <div>
              <div className="h-48 bg-[#121212] mb-4"></div>
              <p className="text-sm text-gray-600">#121212</p>
              <p className="text-sm text-gray-400">Rich Black</p>
            </div>
            <div>
              <div className="h-48 bg-[#F5F5F5] mb-4"></div>
              <p className="text-sm text-gray-600">#F5F5F5</p>
              <p className="text-sm text-gray-400">Light Gray</p>
            </div>
          </div>
        </div>

        {/* Typography Section */}
        <div className="max-w-5xl mx-auto px-4 mb-32">
          <h2 className="text-3xl font-light mb-12">Typography</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-6xl font-light mb-4 font-helvetica">
                Helvetica Neue
              </h3>
              <p className="text-gray-500">Primary Typeface</p>
            </div>
            <div>
              <h3 className="text-6xl font-light mb-4 font-futura">Futura</h3>
              <p className="text-gray-500">Secondary Typeface</p>
            </div>
          </div>
        </div>

        {/* Diagonal turquoise section with pattern */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#40E0D0] transform -skew-y-6">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  rgba(255,255,255,0.15),
                  rgba(255,255,255,0.15) 2px,
                  transparent 2px,
                  transparent 20px
                )`,
                backgroundSize: "100px 100px",
              }}
            ></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 py-48">
            <div className="flex justify-end">
              <div className="w-72 h-72 bg-white p-8 shadow-lg">
                <img
                  src="/upstairz-logo.jpg"
                  alt="Upstairz logo showcase"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Content */}
        <div className="max-w-4xl mx-auto px-4 py-32">
          <div className="space-y-24">
            <div>
              <h2 className="text-3xl font-light mb-8">The Challenge</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Upstairz needed a brand identity that would position them as a
                premium real estate agency while maintaining an approachable and
                modern feel. The challenge was to create a visual language that
                would appeal to both luxury property buyers and contemporary
                urban professionals.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-8">The Solution</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We developed a bold and sophisticated identity system that plays
                with elevation and perspective. The turquoise color palette
                brings freshness and distinction to the real estate sector,
                while the diagonal patterns and modern typography create a sense
                of upward movement and progress.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-8">The Results</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                The new brand identity has helped Upstairz stand out in a
                crowded market. The distinctive visual system has been
                successfully applied across digital and print materials,
                creating a cohesive and memorable brand experience that
                resonates with their target audience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-light mb-8">
            Ready to elevate your brand?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Let's create something extraordinary together.
          </p>
          <button className="border-2 border-white px-8 py-3 text-lg hover:bg-white hover:text-black transition-colors duration-300">
            Get in Touch
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;