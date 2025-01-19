/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      // fonts
      fontFamily: {
        poppins: '"Poppins", sans-serif'
      },

      // colors
      colors: {
        primary : '#5051F9',
        font : {
          100 : "#929292",
          200 : "#4F4F4F",
          300 : "#25252B",
        },
        border  : "#CECECE",
        success : "#0FD45B",
        warning : "#FFBF00",
        danger  : "#D9333D",
        background : "#F8F8FA"
      }
    },
  },
  plugins: [
    daisyui,
  ],
}