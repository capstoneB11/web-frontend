/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
  theme: {
    colors: {
      "orange-1": "#FFEED2",
      "orange-2": "#FEDF9E",
      "orange-3": "#FFB347",
      "orange-4": "#FF971A",
      "gray-1": "#808080",
      "orange-5": "#FFD15D",
      "gradient-1": "#FFB246",
      "gradient-2": "#FFD15D",
    },
  },
};
