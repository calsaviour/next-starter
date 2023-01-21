/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      spacing: {
        128: "32rem", // following the standard of 128 / 4 = 32
      },
      height: {
        128: "32rem", // following the standard of 128 / 4 = 32
      },
      width: {
        128: "32rem", // following the standard of 128 / 4 = 32
      },
    },
  },
  plugins: [],
};
