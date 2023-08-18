/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      
      colors: {
      },
      fontFamily: {

      },
      backgroundImage:
      {
      "darkBg": "url('assets/images/background_dark.png')",
      "lightBg": "url('assets/images/background_light.png')",
      "astronaut": "url('assets/images/Astronaut2.png')",
      "moon": "url('assets/images/moon.png')",
      "stars": "url('assets/images/stars.png')",
      },
      keyframes:{
        moveRight: {
          '0%': {
            transform: 'translate3d(0, 0, 0);'
          },
          '100%' :{
            transform: 'translate3d(-95px, 0, 0)'
          }
        },
        rotate:{
          '100%': {
            transform:'rotate(360deg);'
          }
        }
      },
      animation: {
        'rotate-orbit': 'rotate 20s infinite linear'
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
  ],
};