/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1:{
              color: "#000"
            }
          },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daysiui: {
    themes: ["light", "dark",
      {
        ...require("daisyui/src/colors/themes")["[data-theme=dark]"],

      }]
  }
}
