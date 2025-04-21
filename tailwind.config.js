/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        my_dark_purple:"#6B4E71",
        my_pink: "#F5DDDD",
        my_light_purple: "#C2B2B4",
        my_blue: "#53687E",
        my_dark_blue: "#3A4454",
        my_gray: "#F5F5F5"
      }
    },
  },
  safelist: [
    // BACKGROUD AND TEXT COLOURS
    {
      pattern: /(bg|text)-my_(pink|light_purple|gray|blue|black|[#C7FE02])/,
      variants: ['focus', 'placeholder']
    },
    {
      pattern: /(bg|text)-(gray|red|blue)-(700|500|300|100)/,
      variants: ['focus', 'placeholder']
    },

    // FONT
    "font-family-[Cambay]",

    //BORDER
    "border-2 border-gray-700",
    "border-4 border-my_pink",
    "border border-my_dark_purple",
    "border border-my_dark_blue",
    "border border-red-700",
    "focus:border-blue-300"
  ],
  plugins: [],
}