/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          logo: "#E50914",
        },
        blackR: "rgba(0,0,0,.4)",
        black2: "rgba(0,0,0,.8)",
        gray: "#333",
        gray2: "#8C8C8C",
        gray3: "#808080",
      },
    },
  },
  plugins: [],
};
