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
        primary: {"50":"#eef2ff","100":"#e0e7ff","200":"#c7d2fe","300":"#a5b4fc","400":"#818cf8","500":"#6366f1","600":"#4f46e5","700":"#4338ca","800":"#3730a3","900":"#312e81","950":"#1e1b4b"}
      },
      fontFamily: {

      },
      backgroundImage:
      {
      "darkBg": "url('assets/images/background_dark.jpg')",
      "lightBg": "url('assets/images/background_light.jpg')",
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