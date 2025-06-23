// tailwind.config.js

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./app.vue`,
    `./error.vue`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}