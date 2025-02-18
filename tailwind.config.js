/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleCustom: "#6700AC",
        orangeCustom: "#F26C08",
      },
    },
  },
  plugins: [],
}