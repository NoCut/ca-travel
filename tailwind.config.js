export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Проверь пути!
  ],
  theme: {
    extend: {
      screens: {
        'lp': '1440px',
        'tb': '1025px',
        'mb': '768px',
      }
    }
  },
  plugins: [],
}
