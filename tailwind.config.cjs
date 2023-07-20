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
      {"hero": "url('assets/images/HeaderBG.svg')",
        "darkHero": "url('assets/images/DarkHeaderBG.svg')",
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
    require("tailwindcss-3d")({ legacy: true }),
  ],
};