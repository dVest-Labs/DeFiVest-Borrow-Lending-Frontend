const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      // gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      // primary: '#01D2D4',
      primary: "red",
      // secondary:'#01D2D4',
      secondary: "#05D494",
      gray: "#2F3437",
      label: "#90A095",
      underlinecl: "#ECF0F1",
      hovercl: "#162229",
      orange: "orange",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
