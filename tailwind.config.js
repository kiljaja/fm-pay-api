module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        "dm-serif-display": ['DM Serif Display', 'serif'],
        "public-sans": ['Public Sans', 'sans-serif']
      },
      letterSpacing:{
        '-0.03': '-0.007rem',
      },
      lineHeight:{
        "18" : "4.5rem",
        '14': '3.5rem',
        '6.25': '1.563rem',
        '4.407': '1.102rem',  
      },
      spacing:{
        '6.125': '1.531rem',
        '3.5': '0.875rem',
        '6.625': '1.656rem',
        '11.322': '2.831rem',
      },
      
      fontSize:{
        '3.75': '0.938rem',
        '8': '2rem',
        '14' : '3.5rem',
      },
      boxShadow:{
        "btn-shadow": "10px 10px 25px -10px rgba(54, 83, 107, 0.25)",
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
          "light-san-juan-blue": "#6c8294",
          "Isabelline" : "#EDF3F8",
        },
         zIndex:{
          '-0.25': '-0.063rem',
         },
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
