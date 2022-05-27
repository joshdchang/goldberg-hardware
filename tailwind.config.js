module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: 'rgb(33, 58, 94)',
        secondary: '#4fd8f7',
      }
    },
  },
  plugins: [],
}
