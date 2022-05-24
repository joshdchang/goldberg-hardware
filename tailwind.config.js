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
        primary: '#70e0a5',
        secondary: '#4fd8f7',
      }
    },
  },
  plugins: [],
}
