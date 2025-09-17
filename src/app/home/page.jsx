"use client";

import ScrollSection from "@/components/scrollsection/ScrollSection";
import Head from "next/head";
import Footer from "../../components/Footer";
import Gallery from "../../components/gallery/gallery";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
export default function Home() {
 const logoText1 = "U . A . Designs";
  const cards1 = [
    {
      id: "card-1",
      image:
        "https://aishik30024.github.io/uad-client/bee/product3.png",
      title: "BEE",
      description: "BeeSweet",
      isCenter: false,
      link: "/projects/bee",
    },
    {
      id: "card-2",
      image:
        "https://cdn.cosmos.so/c3aa56e7-ac0c-47aa-ab1d-26d4b5ee8948?format=jpeg",
      title: "CAPTURED STILLNESS",
      description: "Motion suspended in time",
      isCenter: false,
      link: "https://example.com/card2",
    },
    {
      id: "card-3",
      image:
        "https://cdn.cosmos.so/0b0960ef-5e0a-4df5-8a08-44aa57b4cabc?format=jpeg",
      title: "NEGATIVE PRESENCE",
      description: "Finding meaning in absence",
      isCenter: false,
      link: "https://example.com/card3",
    },
    {
      id: "card-4",
      image:
        "https://cdn.cosmos.so/60509a1f-769c-4d50-bf6d-04e7de80c369?format=jpeg",
      title: "TEXTURE OF LIGHT",
      description: "When shadows become tangible",
      isCenter: false,
      link: "https://example.com/card4",
    },
    {
      id: "card-5",
      image:
        "https://cdn.cosmos.so/a4131540-1ed8-41a8-84de-580b1327cbfd?format=jpeg",
      title: "MONOCHROME MEDITATION",
      description: "Beyond what eyes perceive",
      isCenter: true,
      link: "https://example.com/card5",
    },
    {
      id: "card-6",
      image:
        "https://cdn.cosmos.so/49037a37-144f-4d11-8466-22e9e1c71797?format=jpeg",
      title: "FORMLESS FORM",
      description: "The geometry of feeling",
      isCenter: false,
      link: "https://example.com/card6",
    },
    {
      id: "card-7",
      image:
        "https://cdn.cosmos.so/fddfc757-d9c3-44f1-af6e-a607c3746738?format=jpeg",
      title: "SPATIAL SILENCE",
      description: "Presence within emptiness",
      isCenter: false,
      link: "https://example.com/card7",
    },
    {
      id: "card-8",
      image:
        "https://cdn.cosmos.so/b0c8552f-2acf-4206-9086-a14e7ebcc0d2?format=jpeg",
      title: "LIMINAL THRESHOLD",
      description: "Between known and unknown",
      isCenter: false,
      link: "https://example.com/card8",
    },
    {
      id: "card-9",
      image:
        "https://cdn.cosmos.so/d15e33c9-6306-4e93-9fc3-a11bca3be70a?format=jpeg",
      title: "ESSENTIAL HARMONY",
      description: "The beauty of reduction",
      isCenter: false,
      link: "https://example.com/card9",
    },
  ];
  const categories1 = [
    "Movement",
    "Stillness",
    "Minimalism",
    "Negative Space",
    "Monochrome",
    "Essence",
    "Contrast",
    "Silence",
  ];

  
  return (
    <div className="flex flex-col bg-background-light dark:bg-background-dark font-body">
      <Head>
        <title>Visual Silence</title>
        <meta name="description" content="Visual art and motion experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen">
        <div className="mt-[2vh] mx-[2vh]">
          <Header />
        </div>
      </div>

      <section className="">
        <Hero />
      </section>

      <section className="py-16 px-[2vh] bg-background-light dark:bg-background-dark h-[10vh]"> </section>

      <ScrollSection />

      <section
        id="project-1"
        className="py-16 px-[2vh] bg-background-light dark:bg-background-dark min-h-screen overflow-hidden flex items-center justify-center box-border "
      >
        <Gallery logoText={logoText1} cards={cards1} categories={categories1} />
      </section>

      <section id="all-projects" className="w-full px-8 py-20 ">
        <div className="w-[95%] mx-auto px-4 py-16 flex justify-center">
          <a
            href="/projects"
            className="bg-background-dark dark:bg-background-light text-text-dark dark:text-text-light font-inter font-semibold text-lg px-8 py-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            View All Projects
          </a>
        </div>
      </section> *

      <div
  className="w-full h-full flex items-center justify-center font-bebas text-[#F9F5E9]"
  style={{
    fontSize: 'clamp(4rem, 16vw, 19rem)',
    top: '2vh',
    width: '97vw',
  }}
>
  <div className="flex flex-col items-center">
    <h1 className="font-bebas text-[#F9F5E9] text-center">Not Impressed</h1>
    <div className="flex items-center gap-32">
      <span className="font-bebas text-[#F9F5E9]">Yet ?</span>
      <a
        href="/contacts"
        className="bg-background-dark dark:bg-background-light text-text-dark dark:text-text-light font-inter font-semibold px-8 py-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 whitespace-nowrap"
        style={{ fontSize: 'clamp(2.8rem, 8vw, 13.3rem)' }}
      >
        Let's Talk
      </a>
    </div>
  </div>
</div>
      <section className="py-16 px-[2vh] bg-background-light dark:bg-background-dark h-[20vh] "></section>

      <section className="">
        <Footer />
      </section>

      <style jsx global>{`
        html {
          scroll-snap-type: y mandatory;
          scroll-behavior: smooth;
        }

        .box-border {
          box-sizing: border-box;
        }

        .font-body {
          font-family: "PP Neue Montreal", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
            "Helvetica Neue", sans-serif;
        }

        .bg-category-1 {
          background-color: #ff5733;
        }
        .bg-category-2 {
          background-color: #33ff57;
        }
        .bg-category-3 {
          background-color: #3357ff;
        }
        .bg-category-4 {
          background-color: #ff33a1;
        }
        .bg-category-5 {
          background-color: #33fff5;
        }
        .bg-category-6 {
          background-color: #f5ff33;
        }
        .bg-category-7 {
          background-color: #a133ff;
        }
        .bg-category-8 {
          background-color: #ff8333;
        }
      `}</style>
    </div>
  );
}

