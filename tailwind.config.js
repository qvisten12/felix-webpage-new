/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sfRegular: ['sf-regular', 'sans-serif'],
      sfBold: ['sf-bold', 'sans-serif'],
    },
  },
  plugins: [],
}
