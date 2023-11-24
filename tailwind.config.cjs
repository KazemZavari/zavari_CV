/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg2: { max: "1623px" },
      lg: { max: "1023px" },
      tl: { max: "723px" },
    },
    colors: {
      white: "#ffffff",
      Gray1: "#282A36",
      Gray2: "#44475A",
      Forground: "#282A36",
      Comment: "#6272A4",
      Cyan: "#8BE9FD",
      Green: "#50FA7B",
      Orange: "#FFB86C",
      Pink: "#FF79C6",
      Purple: "#BD93F9",
      Red: "#FF5555",
      Yellow: "#F1FA8C",
      tahiti: {
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {
        back: "url('./src/assets/images/bg.jpg')",
        skills: "url('./src/assets/images/banner-bg.png')",
      },
    },
  },
  plugins: [],
};
