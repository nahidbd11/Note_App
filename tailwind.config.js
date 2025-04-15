/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets:[require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary:"#051313",
        secondary:"#4EA1A2",
        accent:"#866390",
        light:{
          100:"#7af5f7",
          200:"#f1f0f5",
          300:"#e3e2e4"
        },
        dark:{
          100:"#182625",
          200:"#121012"
        },
      },
    },
  },
  plugins: [],
}

