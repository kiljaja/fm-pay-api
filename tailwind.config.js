module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        "dm-serif-display": ['DM Serif Display', 'serif'],
        "public-sans": ['Public Sans', 'sans-serif']
      },
      colors:{
        primary:{
          pink: "#ba4270",
          white: "#fbfcfe"
        },
        secondary:{
          "san-juan-blue": "#36536b",
          "mirage-blue": "#1b262f",
          "charm-pink": "#da6d97",
          "light-san-juan-blue": "#6c8294"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
   ],
}
