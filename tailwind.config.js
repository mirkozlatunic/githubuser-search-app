/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //light mode colors
        "light-blue": "#0079FF",
        "light-gray": "#697C9A",
        "light-grayblue": "#4B6A9B",
        "light-darkblue": "#2B3442",
        "light-lightblue": "#F6F8FF",
        "light-white": "#FEFEFE",

        //dark mode colors
        "dark-blue": "#0079FF",
        "dark-white": "#FFFFFF",
        "dark-dark": "#141D2F",
        "dark-darkblue": "#1E2A47",
      },
    },
  },
  plugins: [],
};
