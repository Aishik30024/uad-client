/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'category-1': 'rgb(61,61,61)',
        'category-2': 'rgb(54,54,54)',
        'category-3': 'rgb(46,46,46)',
        'category-4': 'rgb(38,38,38)',
        'category-5': 'rgb(31,31,31)',
        'category-6': 'rgb(23,23,23)',
        'category-7': 'rgb(15,15,15)',
        'category-8': 'rgb(8,8,8)',
      },
      colors: {
        primary: {
          light: '#c983c0',
          dark: '#1266f1',
        },
        secondary: {
          light: '#A1C2C8',
          dark: '#a83283',
        },
        tertiary: {
          light: '#882f2f',
          dark: '#3b6d43',
        },
        background: {
          light: '#ffffff',
          dark: '#1c1c1c',
        },
        backgroundSCD: {
          light: '#fafafa',
          dark: '#1f2930',
        },
        text: {
          light: '#1f2937',
          dark: '#f9fafb',
        },
        textscd: {
          light: '#252525',
          dark: '#e5e5e5',
        },
        border: {
          light: '#e5e7eb',
          dark: '#374151',
        },
        warning: {
          light: '#c91246',
          dark: '#c91246',
        },
      },
      fontFamily: {
        magicretro: ['Magic Retro', 'sans-serif'],
        primary: ['PP Neue Montreal', 'sans-serif'],
        header: ['IBM Plex Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        button: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};