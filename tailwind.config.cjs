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
      white: "#fff",
      black: "#212529",
      black_2: "#132a35",
      gray_font: "#596971",
      semiGray_font: "#e9ebec",
      mainBackground: "#132a35",
      background:"#16303d",
      background_2: "#324148",
      background_hover: "#42555d",
      Forground_light: "#f5f6f6",
      Forground: "#22353e",
      Orange: "#fa7d22",
      Orange_2: "#f8700f",
      semiOrang: "#ffefe4",
      Yellow: "#e7ad0d",

      Gray: "#44475A",
      Comment: "#6272A4",
      Cyan: "#8BE9FD",
      Green: "#50FA7B",
      Pink: "#FF79C6",
      Purple: "#BD93F9",
      Red: "#FF5555",
    },
    fontFamily: {
      Roboto: ["roboto"],
      Montserrat: ["Montserrat"],
      Raleway: ["Raleway"],
      RalewayBold: ["RalewayBold"],
      MontserratBold: ["Montserrat-Bold"],
      OpenSansLight: ["OpenSans-Light"],
      OpenSansMedium: ["OpenSans-Medium"],
      OpenSansSemiBold: ["OpenSans-SemiBold"],
      OpenSansSemiCondensedMedium: ["OpenSans_SemiCondensed-Medium"],
      OpenSansRegular: ["OpenSans-Regular"],
      OswaldLight: ["Oswald-Light"],
      OswaldMedium: ["Oswald-Medium"],
      OswaldBold: ["Oswald-Bold"],
      OswaldRegular: ["Oswald-Regular"],
      OswaldExtraLight: ["Oswald-ExtraLight"],
      PlayfairDisplayRegular: ["PlayfairDisplay-Regular"],
      PlayfairDisplaySemiBold: ["PlayfairDisplay-SemiBold"],
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
