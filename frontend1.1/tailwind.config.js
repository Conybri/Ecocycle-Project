/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'; // Import the plugin utility

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#16a34a',
        'green-secondary': '#dcfce7',
        'blue-primary': '#3b82f6',
        'gray-text': '#4b5563',
        'gray-light': '#f3f4f6',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.icon-xs': { // <CHANGE> Added icon-xs utility
          '@apply h-3 w-3': {},
        },
        '.icon-sm': {
          '@apply h-4 w-4': {},
        },
        '.icon-md': {
          '@apply h-6 w-6': {},
        },
      });
    }),
  ],
}