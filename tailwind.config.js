/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'blue-primary': "#090B1B",
        'blue-secondary': "#647BFF",
        'blue-violet': "#2A2A6A",
        gray : "#C0C0C4",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
