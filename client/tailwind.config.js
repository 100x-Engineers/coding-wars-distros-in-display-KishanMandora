/* eslint-disable no-undef */
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
        200: "#fb6f92",
      },
      neutral: {
        100: "#111111",
        200: "#222222",
        300: "#333333",
      },
      slate: {
        50: "#ebebeb",
      },
    },
    extend: {},
  },
};
