/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fancy1: ["Climate Crisis"],
        fancy2: ["Noto Sans JP"],
        fancy3: ["Rampart One"],
      },
      backgroundImage: theme => ({
        'hero-img': "url('/bg-pattern.jpg')",
       }),
    },
  },
  plugins: [],
}
