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
        "bg-1": "#0f0e17",
        "bg-2": "#fffffe",
        "text-light": "#fffffe",
        "text-dark": "#0f0e17",
        "text-secondary": "#a7a9be",
        btn: "#ff8906",
        "btn-text": "#fffffe",
        "accent-1": "#f25f4c",
        "accent-2": "#e53170",
        "sub-headline": "#2e2f3e",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
