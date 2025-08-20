/** @type {import('tailwindcss').Config} */
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
  plugins: [],
}