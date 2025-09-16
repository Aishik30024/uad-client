"use client";
import MetallicText from "./MetalicText"; // Adjust path if needed

export default function Footer() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-textscd-light dark:text-textscd-dark py-8 sm:py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.5fr,1fr,1fr] gap-6 sm:gap-8 md:gap-16 mb-12 sm:mb-16 md:mb-32">
          <div>
            <h3 className="text-textscd-light dark:text-textscd-dark text-lg sm:text-xl md:text-xl font-light mb-4 sm:mb-6">
              DIVE INTO THE NEW WORLD OF IN-HOUSE MUSIC
            </h3>
            <p className="text-textscd-light dark:text-textscd-dark text-sm sm:text-base md:text-base font-light leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. At porttitor ut felis nisl
              ultricies sed sit. Cras nibh quis et diam justo in. Sollicitudin
              enim tincidunt eros mauris senectus neque.
            </p>
          </div>
          
          <div className="md:block hidden">
            <h3 className="text-textscd-light dark:text-textscd-dark text-xl font-light mb-6">VISIT</h3>
            <nav className="flex flex-col space-y-4">
              {["Home", "Our Work", "Who we are", "Get in touch"].map((label, idx) => (
                <a
                  key={idx}
                  href={`/${label.toLowerCase().replace(/ /g, "-")}`}
                  className="text-textscd-light dark:text-textscd-dark hover:text-primary-dark dark:hover:text-primary-light transition-colors text-3xl font-extralight"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:block hidden">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col space-y-4">
                {["Newsletter", "Podcast", "Press"].map((label, idx) => (
                  <a
                    key={idx}
                    href={`/${label.toLowerCase()}`}
                    className="text-textscd-light dark:text-textscd-dark hover:text-primary-dark dark:hover:text-primary-light transition-colors text-3xl font-extralight"
                  >
                    {label}
                  </a>
                ))}
              </div>
              <div className="flex space-x-6 mt-16">
                {["twitter", "instagram", "linkedin-in"].map((icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-textscd-light dark:text-textscd-dark hover:text-primary-dark dark:hover:text-primary-light transition-colors"
                  >
                    <i className={`fab fa-${icon} text-2xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden grid grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-textscd-light dark:text-textscd-dark text-xl font-light mb-6">VISIT</h3>
              <nav className="flex flex-col space-y-4">
                {["Home", "Our Work", "Who we are", "Get in touch"].map((label, idx) => (
                  <a
                    key={idx}
                    href={`/${label.toLowerCase().replace(/ /g, "-")}`}
                    className="text-textscd-light dark:text-textscd-dark hover:text-primary-dark dark:hover:text-primary-light transition-colors text-3xl font-extralight"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col space-y-4">
                  {["Newsletter", "Podcast", "Press"].map((label, idx) => (
                    <a
                      key={idx}
                      href={`/${label.toLowerCase()}`}
                      className="text-textscd-light dark:text-textscd-dark hover:text-primary-dark dark:hover:text-primary-light transition-colors text-3xl font-extralight"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end pt-4 sm:pt-6 md:pt-8 border-t border-border-light dark:border-border-dark">
          <MetallicText 
            text="UADesigns" 
            className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[180px] leading-none font-extralight mb-4 sm:mb-0 text-center sm:text-left" 
          />

          <div className="flex flex-col items-center sm:items-end space-y-4 sm:space-y-6 md:space-y-8">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8">
              <a
                href="/data-policy"
                className="text-textscd-light dark:text-textscd-dark hover:text-primary-dark dark:hover:text-primary-light transition-colors text-xs sm:text-sm md:text-sm font-light"
              >
                DATA POLICY
              </a>
              <a
                href="/imprints"
                className="text-textscd-light dark:text-textscd-dark hover:text-primary-dark dark:hover:text-primary-light transition-colors text-xs sm:text-sm md:text-sm font-light"
              >
                IMPRINTS
              </a>
            </div>
            <a
              href="/contacts"
              className="border border-border-light dark:border-border-dark rounded-full px-4 sm:px-5 md:px-6 py-2 sm:py-2 md:py-3 hover:border-primary-dark dark:hover:border-primary-light hover:text-primary-dark dark:hover:text-primary-light transition-colors flex items-center space-x-2 text-textscd-light dark:text-textscd-dark"
            >
              <span className="text-xs sm:text-sm md:text-sm font-light">Contact Us</span>
              <span className="transform rotate-45 text-base sm:text-lg md:text-lg">↑</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}