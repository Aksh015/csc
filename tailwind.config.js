/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          green: '#00ff41',
          blue: '#00d9ff',
          dark: '#0a0e27',
          darker: '#060a1f',
        }
      }
    },
  },
  plugins: [],
}