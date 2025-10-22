/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      transitionTimingFunction: {
      'out-smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
