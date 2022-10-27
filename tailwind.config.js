const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        "GrisMatte":"#47484D",
        "BleuTempête":"#3F4953",
        "VertTriste":"#C0CCC8",
        "RosePale":"#EFD5D4",
        "BleuJade":"#38A3A5",
        "JauneSoleil":"#FDCA8B",
        'BlancCreme':"#E3DEDA",
        "Blanc":"#F9F8F6"
      },

      fontFamily: {
        fontFamily: {
          'montserrat': ['Montserrat', 'sans-serif'],
          'archivo': ['Archivo', 'sans-serif'],
        },

      },
      height: {
        "540" : "533px"
      },
      margin: {
        "540" : "740px",
        "50%" : "50%"
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
  ],
};

