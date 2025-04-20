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
        my_dark_blue: "#3A4454"
      }
    },
  },
  safelist: [
    // BACKGROUD COLOURS
    "bg-my_pink",
    "bg-[#F5F5F5]",
    "bg-my_light_purple",
    "bg-white",
    "bg-my_blue",
    "bg-gray-100",
    "bg-black",
    "bg-[#C7FE02]",
    "bg-red-100",

    // TEXT COLOURS
    "text-my_dark_purple",
    "text-my_blue",
    "text-my_dark_blue",
    "text-gray-700",
    "text-my_pink",
    "text-my_light_purple",
    "text-red-700",

    // FONT
    "font-family-[Cambay]",

    //BORDER
    "border-2 border-gray-700",
    "border-4 border-my_pink",
    "border border-my_dark_purple",
    "border border-my_dark_blue",
    "border border-red-700",

    //PLACEHOLDER
    "placeholder:text-my_light_purple"
  ],
  plugins: [],
}

