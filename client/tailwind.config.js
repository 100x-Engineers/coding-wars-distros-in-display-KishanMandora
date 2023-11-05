/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mono: ["Monoton", "sans-serif"],
      instrument: ["Instrument Sans", "sans-serif"],
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      pink: {
        50: "#ffe5ec",
        100: "#ffb3c6",
      },
    },
    extend: {},
  },
  plugins: [],
};
