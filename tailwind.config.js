/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        milk: "#f7f7f7",
        crema: "#fffaf0",
        brandBlack: "#1f0f00",
        coffeeGrounds: "hsl(32, 82%, 20%)",
      },
    },
  },
  plugins: [],
};
