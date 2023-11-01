/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'pink': '#FF60C9',
        'soft-pink': '#FCD8F3',
        'light-pink': '#FFF7FD',
        'very-light-pink': '#FFE2F9',
        'black': '#000000',
        'white': '#ffffff',
      }
    },
    fontFamily: {
      'cinzel': ['Cinzel', 'serif'],
      'lora': ['Lora', 'serif'],
      'quattrocento': ['Quattrocento', 'serif'],
    }
  },
  plugins: [],
}