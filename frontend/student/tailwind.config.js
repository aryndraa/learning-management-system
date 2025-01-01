/** @type {import('tailwindcss').Config} */
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
        primary : '#5A2BBF',
        font : {
          100 : "#929292",
          200 : "#4F4F4F",
          300 : "#11003D",
        },
        success : "#0FD45B",
        warning : "#FFD220",
        fatal   : "#D9333D",
        background : "#F9F9F9"
      }
    },
  },
  plugins: [],
}