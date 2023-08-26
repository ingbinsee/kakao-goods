/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        gaegu: ['Gaegu'],
      },
      backgroundImage: {
        'hero': 'url("/hero.webp")'
      },
    },
  },
  plugins: [],
};
