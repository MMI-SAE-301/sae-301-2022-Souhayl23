const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        "#47484D":"Gris Matte",
        "#3F4953":"Bleu Tempête",
        "#C0CCC8":"Vert Triste",
        "#EFD5D4":"Rose Pale",
        "#38A3A5":"Bleu Jade",
        "#FDCA8B":"Jaune Soleil",
        'BlancCreme':"#E3DEDA",
      },

      fontFamily: {
        fontFamily: {
          'montserrat': ['Montserrat', 'sans-serif'],
          'archivo': ['Archivo', 'sans-serif'],
        },

      },
      height: {
        "540" : "533px"
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

