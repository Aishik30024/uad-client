"use client";
import Footer from "@/components/Footer";
import Header from "../../../components/Header";

function MainComponent() {
  // Array of image names
  const images = Array.from({ length: 6 }, (_, i) => `/craftedcacao/Desktop - ${i + 1}.png`);

  return (
    <div className="flex items-center flex-col bg-background-light dark:bg-background-dark min-h-screen">
      {/* Header */}
      <div className="w-[95%] mx-auto">
        <div className="mt-[2vh] snap-start">
          <Header />
        </div>
      </div>

      {/* Image Sections */}
      <main className="w-full">
        {images.map((src, index) => (
          <section key={index} className="w-full">
            <img
              src={`${process.env.NODE_ENV === 'production' ? '/uad-client' : ''}/${src}`}
              alt={`Desktop - ${index + 1}.png`}
              className="w-full h-auto object-cover"
            />
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default MainComponent;