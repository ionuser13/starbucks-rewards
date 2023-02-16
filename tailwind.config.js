/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green':'#1e3932',
        'green': {
            DEFAULT: '#008248'
        },
        'light-green': '#d4e9e2',
        'white': '#f1f8f6',
        'cream': '#f3f1e7',
        'black': '#000000',
      }
    },
  },
  plugins: [],
}
