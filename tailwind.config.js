const colors = require("./node_modules/tailwindcss/colors");

module.exports = {
  //purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        sky: colors.sky,
        cyan: colors.cyan,
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      animation: {
        "ping-slow": "ping 1.5s linear infinite",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@alexcarpenter/tailwindcss-aria"),
    require('@tailwindcss/aspect-ratio'),
  ],
};
