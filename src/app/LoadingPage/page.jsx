"use client";
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LoadingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Set dynamic viewport height
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);

    setIsReady(true);

    const duration = 10000; // 10 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    let currentStep = 0;

    const progressTimer = setInterval(() => {
      currentStep += 1;
      setProgress((currentStep / steps) * 100);
      if (currentStep >= steps) {
        clearInterval(progressTimer);
        setFadeOut(true);
        setTimeout(() => {
          router.push('/home');
        }, 1000);
      }
    }, interval);

    return () => {
      clearInterval(progressTimer);
      window.removeEventListener('resize', setVh);
    };
  }, [router]);

  return (
    <div className={`container ${fadeOut ? 'fade-out' : ''}`}>
      <Head>
        <title>Hand Animation</title>
        <meta name="description" content="Hand animation with loading screen" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        {isLoading ? (
          <div className={`loader ${isReady ? 'fade-in' : ''}`}>
            <h1 className="loader-header">
              Just be a bit patient, Good things take time
            </h1>
            <div className="loader-content">
              <svg className="hand" viewBox="0 0 32 20" width="96px" height="60px">
                <clipPath id="finger-pinky">
                  <rect rx="2.5" ry="2.5" width="6" height="15" />
                </clipPath>
                <clipPath id="finger-ring">
                  <rect rx="2.5" ry="2.5" width="6" height="18" />
                </clipPath>
                <clipPath id="finger-middle">
                  <rect rx="2.5" ry="2.5" width="6" height="20" />
                </clipPath>
                <clipPath id="finger-index">
                  <rect rx="2.5" ry="2.5" width="6" height="17" />
                </clipPath>
                <clipPath id="finger-thumb">
                  <rect width="6" height="15.2" />
                </clipPath>
                <g className="hand-finger-pinky" transform="translate(0,3.5)" clipPath="url(#finger-pinky)">
                  <g className="hand-finger-inner">
                    <rect className="hand-skin" rx="2.5" ry="2.5" width="6" height="15" />
                    <rect rx="0.25" ry="0.25" width="3" height="0.5" x="1.5" y="1.5" />
                    <rect rx="0.25" ry="0.25" width="3" height="0.5" x="1.5" y="2.5" />
                    <path className="hand-nail" d="M 2 10 H 4 A 1 1 0 0 1 5 11 V 12 A 2 2 0 0 1 3 14 H 3 A 2 2 0 0 1 1 12 V 11 A 1 1 0 0 1 2 10 Z" />
                  </g>
                </g>
                <g className="hand-finger-ring" transform="translate(6.5,1.8)" clipPath="url(#finger-ring)">
                  <g className="hand-finger-inner">
                    <rect className="hand-skin" rx="2.5" ry="2.5" width="6" height="18" />
                    <rect rx="0.25" ry="0.25" width="3" height="0.5" x="1.5" y="1.5" />
                    <rect rx="0.25" ry="0.25" width="3" height="0.5" x="1.5" y="2.5" />
                    <path className="hand-nail" d="M 2 13 H 4 A 1 1 0 0 1 5 14 V 15 A 2 2 0 0 1 3 17 H 3 A 2 2 0 0 1 1 15 V 14 A 1 1 0 0 1 2 13 Z" />
                  </g>
                </g>
                <g className="hand-finger-middle" transform="translate(13,0)" clipPath="url(#finger-middle)">
                  <g className="hand-finger-inner">
                    <rect className="hand-skin" rx="2.5" ry="2.5" width="6" height="20" />
                    <rect rx="0.25" ry="0.25" width="3" height="0.5" x="1.5" y="1.5" />
                    <rect rx="0.25" ry="0.25" width="3" height="0.5" x="1.5" y="2.5" />
                    <path className="hand-nail" d="M 2 15 H 4 A 1 1 0 0 1 5 16 V 17 A 2 2 0 0 1 3 19 H 3 A 2 2 0 0 1 1 17 V 16 A 1 1 0 0 1 2 15 Z" />
                  </g>
                </g>
                <g className="hand-finger-index" transform="translate(19.5,2.5)" clipPath="url(#finger-index)">
                  <g className="hand-finger-inner">
                    <rect className="hand-skin" rx="2.5" ry="2.5" width="6" height="17" />
                    <rect rx="0.25" ry="0.25" width="3" height="0.5" x="1.5" y="1.5" />
                    <rect rx="0.25" ry="0.25" width="3" height="0.5" x="1.5" y="2.5" />
                    <path className="hand-nail" d="M 2 12 H 4 A 1 1 0 0 1 5 13 V 14 A 2 2 0 0 1 3 16 H 3 A 2 2 0 0 1 1 14 V 13 A 1 1 0 0 1 2 12 Z" />
                  </g>
                </g>
                <g className="hand-finger-thumb" transform="translate(26,0)" clipPath="url(#finger-thumb)">
                  <g className="hand-finger-inner">
                    <path className="hand-skin" d="M 0 0 C 0 0 0.652 0.986 1.494 1.455 C 2.775 2.169 6 0.763 6 3.018 C 6 5.197 4.62 7 2.61 7 C 1.495 7 0 7 0 7 L 0 0 Z" transform="translate(0,8.2)" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="loading-bar-container">
              <div className="loading-bar" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        ) : null}
      </main>

      <style jsx>{`
        :root {
          --vh: 1vh;
        }

        .container {
          height: calc(var(--vh, 1vh) * 100);
          width: 100vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: hsl(0, 0%, 0%);
          color: hsl(0, 0%, 100%);
          font-family: sans-serif;
          font-size: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);
          overflow-x: hidden;
          margin: 0;
          padding: 0;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          box-sizing: border-box;
          z-index: 1000;
        }

        .fade-out {
          animation: fadeOut 1s ease-in-out forwards;
        }

        .fade-in {
          animation: fadeIn 0.5s ease-in forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
          width: 100%;
          height: 100%;
          overflow: hidden;
          min-height: calc(var(--vh, 1vh) * 100);
        }

        .loader {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          height: calc(var(--vh, 1vh) * 100);
          width: 100%;
          position: relative;
          overflow: hidden;
          opacity: 0;
        }

        .loader-header {
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          font-weight: bold;
          text-align: center;
          color: hsl(0, 0%, 100%);
          position: absolute;
          top: 20px;
          width: 100%;
          padding: 0 1rem;
          box-sizing: border-box;
          margin: 0;
        }

        .loader-content {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
          width: 100%;
          height: 100%;
        }

        .hand {
          --anim-dur: 1s;
          --anim-timing: cubic-bezier(0.65, 0, 0.35, 1);
          display: block;
          margin: auto;
          width: clamp(80px, 20vw, 120px);
          height: auto;
          opacity: 0;
          animation: fadeInSvg 0.2s ease-in forwards;
        }

        @keyframes fadeInSvg {
          to {
            opacity: 1;
          }
        }

        .loading-bar-container {
          position: absolute;
          bottom: 20px;
          width: 99%;
          height: 8px;
          background-color: hsl(0, 0%, 20%);
          left: 0;
          right: 0;
          margin: 0 auto;
          box-sizing: border-box;
          border-radius: 4px;
        }

        .loading-bar {
          height: 100%;
          background: hsl(0, 0%, 100%);
          transition: width 0.05s linear;
          box-shadow: 0 0 10px hsl(0, 0%, 100%), 0 0 20px hsl(0, 0%, 100%);
          border-radius: 4px;
        }

        .hand-finger-pinky,
        .hand-finger-ring,
        .hand-finger-middle,
        .hand-finger-index,
        .hand-finger-thumb {
          animation-duration: var(--anim-dur);
          animation-timing-function: var(--anim-timing);
          animation-iteration-count: infinite;
        }

        .hand-finger-inner {
          animation-duration: var(--anim-dur);
          animation-timing-function: var(--anim-timing);
          animation-iteration-count: infinite;
          animation-name: finger-inner;
          fill: hsl(0, 0%, 60%);
        }

        .hand-finger-pinky {
          animation-name: pinky;
        }

        .hand-finger-pinky,
        .hand-finger-pinky .hand-finger-inner {
          animation-delay: calc(var(--anim-dur) * 0.16);
        }

        .hand-finger-ring {
          animation-name: ring;
        }

        .hand-finger-ring,
        .hand-finger-ring .hand-finger-inner {
          animation-delay: calc(var(--anim-dur) * 0.12);
        }

        .hand-finger-middle .hand-finger-inner {
          animation-delay: calc(var(--anim-dur) * 0.08);
        }

        .hand-finger-index {
          animation-name: index;
        }

        .hand-finger-index,
        .hand-finger-index .hand-finger-inner {
          animation-delay: calc(var(--anim-dur) * 0.04);
        }

        .hand-finger-thumb .hand-finger-inner {
          animation-name: thumb-inner;
        }

        .hand-finger-inner,
        .hand-nail,
        .hand-skin {
          transition: fill 0.3s;
        }

        .hand-nail {
          fill: hsl(0, 0%, 100%);
        }

        .hand-skin {
          fill: hsl(0, 0%, 80%);
        }

        @keyframes finger-inner {
          from,
          80%,
          to {
            transform: translate(0, 0);
          }
          40% {
            animation-timing-function: cubic-bezier(0.32, 0, 0.67, 0);
            transform: translate(0, -3px);
          }
        }

        @keyframes thumb-inner {
          from,
          80%,
          to {
            transform: translate(0, 0) skewY(0);
          }
          40% {
            animation-timing-function: cubic-bezier(0.32, 0, 0.67, 0);
            transform: translate(-0.5px, -3px) skewY(-15deg);
          }
        }

        @keyframes pinky {
          from,
          80%,
          to {
            transform: translate(0, 3.5px);
          }
          40% {
            animation-timing-function: cubic-bezier(0.32, 0, 0.67, 0);
            transform: translate(0, 1.2px);
          }
        }

        @keyframes ring {
          from,
          80%,
          to {
            transform: translate(6.5px, 1.8px);
          }
          40% {
            animation-timing-function: cubic-bezier(0.32, 0, 0.67, 0);
            transform: translate(6.5px, 0.5px);
          }
        }

        @keyframes index {
          from,
          80%,
          to {
            transform: translate(19.5px, 2.5px);
          }
          40% {
            animation-timing-function: cubic-bezier(0.32, 0, 0.67, 0);
            transform: translate(19.5px, 1.2px);
          }
        }

        @media (max-width: 768px) {
          .loader-header {
            font-size: clamp(1.2rem, 4vw, 1.8rem);
            top: 10px;
          }

          .loading-bar-container {
            bottom: 10px;
            height: 6px;
            border-radius: 3px;
          }

          .loading-bar {
            border-radius: 3px;
          }
        }

        @media (max-width: 480px) {
          .loader-header {
            font-size: clamp(1rem, 3.5vw, 1.5rem);
            top: 8px;
          }

          .hand {
            width: clamp(60px, 18vw, 80px);
          }

          .loading-bar-container {
            bottom: 8px;
            height: 5px;
            border-radius: 2.5px;
          }

          .loading-bar {
            border-radius: 2.5px;
          }
        }
      `}</style>
    </div>
  );
}