/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#9C846E", // sua cor personalizada
        secondaryColor: "#e7d9c7", 
        tertiaryColor: "#f3ece0",
        complementarColor: "#fffff9",
      },
    },
  },
  variants: {},
  plugins: [],
};
