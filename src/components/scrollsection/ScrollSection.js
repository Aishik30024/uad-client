// components/ScrollSection.jsx
"use client";
import Image from 'next/image';
const images = [
  "/Slide_1.jpg",
  "/Slide_2.jpg",
  "/Slide_3.jpg",
  "/Slide_4.jpg",
];

const hoverTitles = [
  "Red Slide",
  "Blue Slide",
  "Green Slide",
  "Purple Slide"
];

const hoverBodies = [
  "This is the expanded view for the Red Slide. You can add more details here.",
  "This is the expanded view for the Blue Slide. You can add more details here.",
  "This is the expanded view for the Green Slide. You can add more details here.",
  "This is the expanded view for the Purple Slide. You can add more details here."
];

const gradients = [
  "from-primary-light via-background-dark to-transparent",
  "from-secondary-light via-background-dark to-transparent",
  "from-tertiary-light via-background-dark to-transparent",
  "from-primary-dark via-background-dark to-transparent"
];

export default function ScrollSection() {
  return (
    <section className="h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="flex h-full w-full">
        {images.map((img, i) => (
          <div
            key={i}
            className={`
              group flex-1 h-full flex items-center justify-center 
              transition-all duration-500 hover:flex-[3] cursor-pointer relative overflow-hidden
              rounded-3xl
            `}
          >
            {/* Background image */}
            <Image src={img}
              alt={`Slide ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"
            />
            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 z-0 bg-gradient-to-t ${gradients[i]} opacity-80`}
            />
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <span
                className="
                  text-5xl font-extrabold text-white drop-shadow-lg mb-0
                  transition-all duration-300
                  group-hover:-translate-y-16 group-hover:mb-2
                "
              >
                {hoverTitles[i]}
              </span>
              <span
                className="
                  text-lg font-medium text-white drop-shadow-md max-w-md text-center mt-4
                  opacity-0 transition-opacity duration-300
                  group-hover:opacity-100
                "
              >
                {hoverBodies[i]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
