module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'serif'],
        'playfair': ['Playfair Display','serif']
      },
      colors: {
        'gray': {
          800: "#2B2B2B"
        },
        'green': {
          200: '#E0FFB8'
        },
        'red': {
          200: '#FFBDBD'
        }
      }
    },
  },
  plugins: [],
}
