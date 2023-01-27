/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": '#F8F4FEB',
        "gray-50": '#EFE6E6',
        "gray-100": '#DFCCCC',
        "gray-500": '#5E0000',
        "primary-100": '#1F2732',
        "primary-200": '#FFC132',
        "primary-500": '#FF6B66',
        "secondary-400": '#FFCD58',
        "secondary-500": '#FFC132',
      },
      backgroundImage: {
        "gradient-yellowred": 'linear-gradient(90deg, #FF61A 0%, #FFC837 100%)',
        "mobile-home": "url('./assets/HomePageGraphic.png')"
      },
      fontFamily: {
        dmsans: ['DM Sans', "sans-serif"],
        montserrat: ['Montserrat', "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      }
    },
    screens:{
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}
