import daisyui from './resources/js/libs/daisyui'
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/**/*.{vue,ts}', './resources/views/app.blade.php'],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cabin', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'camaleao': 'oklch(57% 0.189 37.75)',
        'camaleao-darker': 'oklch(56% 0.189 37.75)',
        'camaleao-content': 'oklch(99% 0.100 37.75)',
      },
    },
  },
  daisyui,
}
