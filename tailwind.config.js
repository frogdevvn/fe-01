/** @type {import('tailwindcss').Config} */

const tailwindcssRadix = require('tailwindcss-radix');
const { typographyPlugin } = require('./src/tailwind');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      mobile: '568px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1200px'
    },
    extend: {}
  },
  plugins: [tailwindcssRadix(), typographyPlugin]
};
