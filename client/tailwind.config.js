/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary : "#EED160", // Light yellow
        primary: "#1A6838", // Dark green
      },
    },
  },
  plugins: [],
};
