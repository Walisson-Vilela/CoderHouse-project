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
        tertiaryColor: "#b3997f",
        complementarColor: "#fffff9",
      },
    },
  },
  variants: {},
  plugins: [],
};
