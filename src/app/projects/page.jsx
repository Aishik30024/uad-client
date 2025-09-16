"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import projects from "../projectsData";

function MainComponent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  const filteredProjects = selectedTag
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body">
      <div className="w-[95%] mx-auto">
              <div className="mt-[2vh] snap-start">
                <Header />
              </div>
      </div>
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <div
          className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 font-header font-light tracking-wide">
            This is what we do at UAD.
          </h1>
          <p className="text-xl sm:text-2xl text-tertiary-light dark:text-tertiary-dark font-light tracking-wide">
            We create solid strategies
            <br />
            for ambitious brands.
          </p>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="bg-background-light dark:bg-background-dark py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Tag Filters */}
          <div className="mb-10 sm:mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-button transition-colors ${
                !selectedTag
                  ? "bg-primary-light dark:bg-primary-dark text-textscd-light dark:text-text-light"
                  : "bg-background-dark dark:bg-background-light text-text-dark dark:text-textscd-light hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-textscd-light dark:hover:text-text-light"
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-button transition-colors ${
                  selectedTag === tag
                    ? "bg-primary-light dark:bg-primary-dark text-textscd-light dark:text-text-light"
                    : "bg-background-dark dark:bg-background-light text-text-dark dark:text-textscd-light hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-textscd-light dark:hover:text-text-light"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-16 sm:gap-20 md:gap-24">
            {filteredProjects.map(project => (
              <Link key={project.slug} href={`/projects/${project.slug}`} passHref>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-8 sm:mt-10 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-text-light dark:text-text-dark mb-4 font-header font-light">
                      {project.title}
                    </h2>
                    <p className="text-tertiary-light dark:text-tertiary-dark text-base sm:text-lg md:text-xl mb-6 font-light max-w-2xl mx-auto">
                      {project.description}
                    </p>
                    <button className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-tertiary-light dark:border-tertiary-dark text-text-light dark:text-text-dark hover:bg-tertiary-light dark:hover:bg-tertiary-dark hover:text-textscd-light dark:hover:text-text-light transition-colors tracking-widest text-xs sm:text-sm font-button">
                      VIEW CASE
                    </button>
                  </div>
                </div>
              </Link>
            ))}

            {/* Manifesto Section */}
            <div className="bg-background-light dark:bg-category-6 text-text-light dark:text-text-dark p-8 sm:p-12 md:p-16 rounded-lg">
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-12 font-header font-light">Our manifesto</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
                <div>
                  <h3 className="text-xl sm:text-2xl mb-4 font-header font-light">
                    We believe in strategy first
                  </h3>
                  <p className="text-tertiary-light dark:text-tertiary-dark text-base sm:text-lg font-light leading-relaxed">
                    Good design without strategy is just decoration. That's why
                    we start every project by diving deep into your business
                    goals and challenges.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl mb-4 font-header font-light">
                    We keep it simple
                  </h3>
                  <p className="text-tertiary-light dark:text-tertiary-dark text-base sm:text-lg font-light leading-relaxed">
                    In a world of noise, simplicity stands out. We strip away
                    the unnecessary to focus on what truly matters for your
                    brand.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl mb-4 font-header font-light">
                    We think long-term
                  </h3>
                  <p className="text-tertiary-light dark:text-tertiary-dark text-base sm:text-lg font-light leading-relaxed">
                    Quick fixes don't build lasting brands. We create strategies
                    and identities that grow with your business.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl mb-4 font-header font-light">
                    We value authenticity
                  </h3>
                  <p className="text-tertiary-light dark:text-tertiary-dark text-base sm:text-lg font-light leading-relaxed">
                    Your brand should reflect who you truly are. We help you
                    find your authentic voice and express it consistently.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center py-12 sm:py-16 md:py-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-text-light dark:text-text-dark mb-6 font-header font-light">
                Ready to start?
              </h2>
              <p className="text-tertiary-light dark:text-tertiary-dark text-lg sm:text-xl md:text-2xl mb-8 font-light">
                Let's create something meaningful together.
              </p>
              <button className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-primary-light dark:bg-primary-dark text-textscd-light dark:text-text-light hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-textscd-light dark:hover:text-text-light transition-colors tracking-widest text-sm sm:text-base font-button">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

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
