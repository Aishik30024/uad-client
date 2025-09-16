'use client';

import Head from 'next/head';
import Footer from '../../components/Footer';

export default function InstagramPortfolio() {
  // LightWidget embed code
  const lightWidgetCode = `
    <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
    <iframe src="//lightwidget.com/widgets/7fcf0b0fe5ff56cbbc7a7698f66c23ca.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>
  `;

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>My Instagram Art Portfolio</title>
        <meta name="description" content="Explore my artwork from Instagram" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-4">
            My Art Portfolio
          </h1>
          <p className="text-lg md:text-xl font-poppins mb-6">
            Discover my creative journey through Instagram
          </p>
          <a
            href="https://www.instagram.com/yourinstagramhandle/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-100 transition"
          >
            Follow on Instagram
          </a>
        </div>
      </section>

      {/* Instagram Posts Section */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center font-poppins mb-12">
          My Artwork
        </h2>
        <div className="max-w-7xl mx-auto">
          {/* Card-like container for LightWidget */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div
              dangerouslySetInnerHTML={{ __html: lightWidgetCode }}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <p className="font-poppins">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </footer>
      {/* Footer */}
      <Footer />
    </div>
  );
}