/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat'],
        'ClashDisplay': ['ClashDisplay', "sans-serif"]
      },
      colors: {
        primary: '#BDFA00',
        titles: '#E6FFB1'
      },
      animation: {
        'spin-slow': 'spin 15s linear reverse infinite',
      }
    },
  },
  plugins: [],
}