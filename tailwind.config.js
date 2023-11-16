/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0f3375',
        'blue': '#196bde',
        'light-blue': '#d2dfff',
        'light-1': '#f4f4fc',
        'dark': '#000000',
      }
    },
  },
  plugins: [],
}
