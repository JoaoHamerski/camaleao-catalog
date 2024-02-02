const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/**/*.{vue,ts}', './resources/views/app.blade.php'],
  plugins: [require('daisyui'), require('tailwind-scrollbar')],
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
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          ...{
            'primary': 'oklch(55% 0.189 256.57)',
            'secondary': 'oklch(55% 0 256.57)',
            'success': 'oklch(50% 0.189 153.23)',
            'info': 'oklch(55% 0.189 231.16)',
            'warning': 'oklch(70% 0.189 57.22)',
            'error': 'oklch(70% 0.189 24.91)',
            'accent': '#fff9fc',
            'neutral': '#2b3440',
            'neutral-content': '#d7dde4',
            'base-100': '#ffffff',
            'base-200': '#f2f2f2',
            'base-300': '#e5e6e6',
            'base-content': '#1f2937',
          },
        },
      },
    ],
  },
}
