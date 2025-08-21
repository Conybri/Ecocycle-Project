/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'eco-blue': '#1F82BF',
        'eco-green': '#30BF6E',
        'eco-lime': '#8CBF3F',
        'eco-orange': '#F2A341',
        'eco-red': '#F28241'
      },
    },
  },
  plugins: [],
}