"use client";
import Head from 'next/head';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&auto=format&fit=crop&q=60"
          as="image"
          type="image/jpeg"
          priority="high"
        />
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?w=400&auto=format&fit=crop&q=60"
          as="image"
          type="image/jpeg"
        />
      </Head>
      <main className="relative min-h-screen flex flex-col items-center text-center px-[2vh] snap-start">
        <div className="relative w-full max-w-[1920px] mx-auto">
          <h1
            className="font-bebas text-[#F9F5E9] leading-[100%] tracking-[-0.02em] capitalize absolute left-1/2 transform -translate-x-1/2"
            style={{
              fontSize: 'clamp(4rem, 15vw, 19rem)',
              top: '2vh',
              width: '97vw',
            }}
          >
            Goes beyond design
          </h1>
          <p
            className="font-inter text-[#F9F5E9] leading-[130%] text-left lowercase absolute"
            style={{
              fontSize: 'clamp(1rem, 2vw, 2rem)',
              maxWidth: '34%',
              marginLeft: '6vw',
              top: '42vh',
            }}
          >
            From strategy to identity to digital presence, we craft brands that stand out, scale up, and stay unforgettable. End-to-end solutions built to help you outgrow the company you used to be
          </p>
          <Link
            href="/contact"
            className="absolute"
            style={{
              width: '14vw',
              height: '6vh',
              left: '6vw',
              top: '70vh',
            }}
          >
            <button
              className="font-inter text-[#111110] bg-[#F9F5E9] rounded-[6px] w-full h-full flex items-center justify-center whitespace-nowrap"
              style={{
                fontSize: 'clamp(1rem, 1vw, 1rem)',
                padding: '1rem 4rem',
              }}
            >
              Contact us
            </button>
          </Link>
          <div
            className="absolute overflow-hidden rounded-[235px]"
            style={{
              width: '15vw',
              height: '56vh',
              left: '79vw',
              top: '28vh',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&auto=format&fit=crop&q=60"
              alt="Abstract Pill 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30" />
          </div>
          <div
            className="absolute overflow-hidden rounded-[235px]"
            style={{
              width: '17vw',
              height: '56vh',
              left: '43vw',
              top: '49vh',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?w=400&auto=format&fit=crop&q=60"
              alt="Abstract Pill 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30" />
          </div>
          <div
            className="absolute animate-spin-slow"
            style={{
              width: '10vw',
              height: '20vh',
              left: '87vw',
              top: '75vh',
            }}
          >
            <img src="/Spiral.svg" alt="Spiral 1" className="w-full h-full object-contain" />
          </div>
          <div
            className="absolute animate-spin-slow"
            style={{
              width: '10vw',
              height: '20vh',
              left: '-4vw',
              top: '25vh',
            }}
          >
            <img src={`${process.env.NODE_ENV === 'production' ? '/uad-client' : ''}/Spiral.svg`} alt="Spiral 2" className="w-full h-full object-contain" />
          </div>
        </div>
        <style jsx>{`
          .animate-spin-slow {
            animation: spin 8s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @media (max-width: 640px) {
            h1 {
              font-size: clamp(4rem, 24vw, 8rem) !important;
              width: 90vw !important;
              top: 2vh !important;
            }

            p {
              top: 30vh !important;
              max-width: 90% !important;
              left: 5vw !important;
              font-size: clamp(0.875rem, 4vw, 1.25rem) !important;
              line-height: 1.4 !important;
            }

            .absolute[style*="width: 14vw"] {
              width: 80vw !important;
              height: 50px !important;
              left: 5vw !important;
              top: 50vh !important;
            }

            .absolute[style*="width: 15vw"] {
              width: 30vw !important;
              height: auto !important;
              aspect-ratio: 3/4 !important;
              left: 65vw !important;
              top: 20vh !important;
            }

            .absolute[style*="width: 17vw"] {
              width: 30vw !important;
              height: auto !important;
              aspect-ratio: 3/4 !important;
              left: 5vw !important;
              top: 60vh !important;
            }

            .absolute[style*="left: 87vw"] {
              width: 20vw !important;
              height: 10vh !important;
              left: 75vw !important;
              top: 80vh !important;
            }

            .absolute[style*="left: -4vw"] {
              width: 20vw !important;
              height: 10vh !important;
              left: 5vw !important;
              top: 10vh !important;
            }
          }
        `}</style>
      </main>
    </>
  );
}