/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      background: "#151313",
      gold: {100: "#a68f52", 800: "#8c7945", 900: "#524628"},
    },
    extend: {},
  },
  plugins: [],
}
