"use client";
import { useState } from "react";

function ProcessCard({ processes = [] }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      {processes.map((process, index) => {
        const expanded = expandedIndex === index;
        return (
          <div
            key={index}
            className={`
              group bg-background-light dark:bg-background-dark cursor-pointer overflow-hidden transition-all duration-500 ease-in-out rounded-2xl shadow-lg
              ${expanded ? "h-[350px] sm:h-[400px] md:h-[400px]" : "h-[80px] sm:h-[100px] md:h-[100px]"}
              group-hover:h-[350px] sm:group-hover:h-[400px] md:group-hover:h-[400px]
              hover:bg-backgroundSCD-light hover:dark:bg-backgroundSCD-dark
            `}
            onClick={() => handleExpand(index)}
          >
            <div className="flex w-full h-full p-4 sm:p-6 md:p-8 gap-4 sm:gap-6 md:gap-8">
              {/* Column 1 - Title */}
              <div className="w-1/3 flex items-center">
                <h3 className={`
                  font-crimson-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text-light dark:text-text-dark leading-tight
                  transform transition-transform duration-500
                  ${expanded ? "translate-x-2" : ""}
                  group-hover:translate-x-2
                `}>
                  {process.title || "Service Title"}
                </h3>
              </div>

              {/* Column 2 - Image */}
              <div className="w-1/3 flex items-center justify-center">
                <div className={`
                  w-full h-[60%] sm:h-[80%] md:h-[75%] rounded-xl overflow-hidden
                  transition-all duration-700
                  ${expanded ? "opacity-100" : "opacity-0"}
                  group-hover:opacity-100
                `}>
                  <img
                    src={process.imageUrl || "/service-image.jpg"}
                    alt={process.imageAlt || "Service illustration"}
                    className={`
                      w-full h-full object-cover transform
                      transition-transform duration-700
                      ${expanded ? "scale-100" : "scale-110"}
                      group-hover:scale-100
                    `}
                  />
                </div>
              </div>

              {/* Column 3 - Description */}
              <div className="w-1/3 flex items-center">
                <p className={`
                  text-text-light dark:text-text-dark text-base sm:text-lg md:text-xl font-light
                  transition-all duration-700 delay-100
                  ${expanded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 sm:translate-x-6"}
                  group-hover:opacity-100 group-hover:translate-x-0
                  ${!expanded ? "line-clamp-2" : ""}
                `}>
                  {process.description || "Service description goes here with more details about the offering."}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProcessCard;