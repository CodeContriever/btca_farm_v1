/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "true-purple": "#A020F0",
        "pastel-purple": "#BD68F2",
        "deep-purple": "#4B0F70"

      }
    },
    fontFamily: {
      Assistant: ["Assistant-Bold, Assistant-SemiBold, Assistant-ExtraBold, Assistant-Regular, Assistant-Light, Assistant-ExtraLight, sans-serif"],
      Rubik: ["Rubik-Black, Rubik-Bold, Rubik-Medium, Rubik-Regular, Rubik-Light sans-serif"],
      Inter: ["Inter-Bold, Inter-Medium, Inter-Regular, Inter-SemiBold, sans-serif"],
      Lato: ["Lato-Bold, Lato-Regular, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1280px",
        "2xl": "1280px"
      }
    }
  },
  plugins: [ require('flowbite/plugin')],
}