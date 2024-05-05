const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: '480px',
      tablet: '768px',
      destop: '976px',
    },
    extend: {},
  },
  plugins: [],
};