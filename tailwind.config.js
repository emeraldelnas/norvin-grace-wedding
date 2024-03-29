/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
