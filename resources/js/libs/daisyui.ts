export default {
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
}
