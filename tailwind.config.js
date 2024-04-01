/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        500: "500px",
      },
      height: {
        "450px": "450px",
        "500px": "500px",
      },
      screens: {
        middleScreen: "900px",
        mini_screen: "500px",
        1700: "1700px",
      },
    },
  },
  plugins: [],
};
