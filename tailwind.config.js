/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        theme_red: "#D60E23",
        primary: "#091CA3",
      },
    },
  },
  plugins: [],
};
