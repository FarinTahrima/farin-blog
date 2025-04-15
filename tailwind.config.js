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

    // TEXT COLOURS
    "text-my_dark_purple",
    "text-my_blue",
    "text-gray-700",

    // FONT
    "font-family-[Cambay]",

    //BORDER
    "border-gray-700"
    
  ],
  plugins: [],
}

