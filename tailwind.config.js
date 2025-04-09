/** @type {import('tailwindcss').Config} */
console.log('Tailwind Config Loaded!');
module.exports = {
  // content: ["*"],
  content: ['./razor/**/*.html'],
  theme: {
    extend: {fontFamily:
      {
        mullish: ["Mullish", "sans-serif"],
      },
      colors:{
        deepBlue: "#02042a",

        LightBlue: "#2b84ea",

        LightBlue300:"#4b94ed",

        LightBlue500: "#0b72e7",

        greenLight: "#61cea6",

        grayText: "#818597",

        lightGray: "#e2e2e2",

        grayBlue: "#344a6c",

        deepBlueHead: "#162f56",

        gray2: "#525a76",

      },
    },
  },
  plugins: [],
}

