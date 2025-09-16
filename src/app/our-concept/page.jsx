'use client';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProcessCard from '../../components/processcard';

export default function Concept() {
  const processes = [
    {
      title: "Strategic Deep Dive",
      description: "Our journey begins with a strategic consultation...",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5NUTSgh2ceHuoJiqwL0T7Vox6BvzKi06x-A&s",
      imageAlt: "Abstract strategic planning illustration",
    },
    {
      title: "Creative Collaboration",
      description: "We convene for a collaborative ideation session...",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5NUTSgh2ceHuoJiqwL0T7Vox6BvzKi06x-A&s",
      imageAlt: "Abstract creative brainstorming illustration",
    },
    {
      title: "Design Sprint",
      description: "We take the best ideas and turn them into tangible designs...",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5NUTSgh2ceHuoJiqwL0T7Vox6BvzKi06x-A&s",
      imageAlt: "Abstract design process illustration",
    },
    {
      title: "User Testing Loop",
      description: "We let real users interact and refine the design based on feedback...",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5NUTSgh2ceHuoJiqwL0T7Vox6BvzKi06x-A&s",
      imageAlt: "Abstract user feedback illustration",
    },
    {
      title: "Final Delivery",
      description: "We perfect and deliver your brand’s visual identity to the world...",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5NUTSgh2ceHuoJiqwL0T7Vox6BvzKi06x-A&s",
      imageAlt: "Abstract final product illustration",
    },
    {
      title: "Ongoing Support",
      description: "We stay involved post-launch to maintain and improve performance...",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5NUTSgh2ceHuoJiqwL0T7Vox6BvzKi06x-A&s",
      imageAlt: "Abstract ongoing support illustration",
    },
  ];

  return (
    <div className="flex flex-col bg-background-light dark:bg-background-dark font-body snap-y snap-mandatory">
      <div className="w-screen">
        <div className="mt-[2vh] mx-[2vh] snap-start">
          <Header />
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-20 flex flex-col sm:flex-row items-center justify-between snap-start">
        <div className="w-[90%] mx-auto bg-background-dark dark:bg-background-dark text-text-dark dark:text-text-dark px-4 sm:px-6 py-8 sm:py-12 flex justify-center items-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
            {/* Left Content */}
            <div className="w-full sm:w-2/5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 text-text-dark dark:text-text-dark">
                Our Concept
              </h1>
              <p className="font-inter font-bold text-lg sm:text-xl md:text-[32px] text-textscd-dark dark:text-textscd-dark mb-4 sm:mb-8">
                Whether you're a startup looking to establish your brand identity or an established business aiming to refresh your image, we've got the creative firepower to make it happen.
              </p>
              <button className="bg-white text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-gray-200 transition">
                LET’S TALK
              </button>
            </div>

            {/* Right Side - Decorative Elements */}
            <div className="w-full sm:w-3/5 flex justify-center mt-6 sm:mt-0">
              <div className="w-[95%] sm:w-full relative">
                <img
                  src="/our-concept/herotop.png"
                  alt="Tote Bag"
                  className="w-full h-auto sm:h-[400px] md:h-auto object-contain transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-full px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-20 snap-start">
        <div className="w-[95%] mx-auto px-4 sm:px-6 py-8 sm:py-12 bg-gradient-to-b from-background-dark to-category-7 dark:from-background-dark dark:to-category-7 flex justify-center">
          <div className="rounded-2xl p-4 sm:p-6">
            <img
              src="/our-concept/hero.gif"
              alt="Bee Sweets Products"
              className="w-full sm:w-[160vh] md:w-[150vh] rounded-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="w-full px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-20 snap-start">
        <div className="w-[95%] mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-12 text-text-dark dark:text-text-dark text-center">
            Our Process
          </h2>
          <ProcessCard processes={processes} />
        </div>
      </section>

      <Footer />
    </div>
  );
}