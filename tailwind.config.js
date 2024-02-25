/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
};