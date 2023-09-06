export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-opacity':'rgba(255, 255, 255, 0.1)',
        'black-opacity':'rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}