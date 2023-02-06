/** @type {import('tailwindcss').Config} */
// TODO typography
// TODO palette
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto']
    },
    fontWeight: {
      thin: '200',
      light: '400',
      regular: '600',
      bold: '800'
    },
    fontSize: {
      base: ['18px', '26px']
    },
    extend: {},
  },
  plugins: [],
}
