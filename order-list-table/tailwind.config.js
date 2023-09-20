/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      }
    },
  },
  daisyui: {
    // themes: ["light"],
    themes: [ 
      {
        mytheme: {
          "primary": "#586ED1",
          "secondary": "#262626",
          "accent": "#FFFAF1",
          "neutral": "#F4FFFD",
          "info": "#F8F8FA",
          "warning": "#FFC71E",
          "error": "#F83600",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

