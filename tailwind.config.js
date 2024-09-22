/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        theme_red: "#D60E23", // 예시: primary 색상
        primary: "#091CA3",
      },
    },
  },
  plugins: [],
};
