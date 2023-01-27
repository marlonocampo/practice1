/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daysiui: {
    themes: ["light", "dark",
      {
        ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
      }]
  }
}
