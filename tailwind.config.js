/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '2px 2px 5px 4px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
}

