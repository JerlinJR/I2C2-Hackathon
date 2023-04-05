/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-pattern.png')",
      },
      colors :{
        'nblue' : "#7FC8F8",
        "gray": "#414141",
      }
    },
  },
  plugins: [],
}