/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        color1: "#0f0e17",
        color2: "#452e44",
        color3: "#8d4c5f",
        color4: "#cf7564",
        color5: "#f7b060",
        color6: "#f9f871",
      },
    },
  },
  plugins: [],
};
