module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm' : '375px',
      'md': '768px',
      'laptop-large': '1440px',
      // => @media (min-width: 14404px) { ... }
    },
    boxShadow: { 
      'inputshadow' : '10px 10px 25px -10px rgba(54, 83, 107, 0.25)',
    },
      extend: {
      fontFamily:{
        "dm-serif-display": ['DM Serif Display', 'serif'],
        "public-sans": ['Public Sans', 'sans-serif']
      },
      letterSpacing:{
        '-0.03': '-0.007rem',
        '-0.063': '-0.016rem',
        '-0.07': '-0.018rem',
        '-0.092': '-0.023rem',
        '-0.138': '-0.034rem',
        '-0.045': '-0.011rem',
        '-0.107': '-0.027rem',
      },
      lineHeight:{
        '4.407': '1.102rem',
        '6.25': '1.563rem',
        '14': '3.5rem',
        "18" : "4.5rem",
      },
      spacing:{
        '0.25': '0.063rem',
        '2.5': '0.625rem',
        '3.5': '0.875rem',
        '4.25': '1.063rem',
        '6.125': '1.531rem',
        '6.625': '1.656rem',
        '9.75': '2.438rem',
        '11.322': '2.831rem',
        '19.75': '4.938rem',
        '136.5': '34.125rem',
      },
      fontSize:{
        '3.75': '0.938rem',
        '8': '2rem',
        '14' : '3.5rem',
        '8': '2rem',
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
        zIndex: {
          '-10': '-10',
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
