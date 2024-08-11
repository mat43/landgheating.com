/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./**/*.{html,js}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        backgroundImage: {
          'header': "url('/assets/bg.jpg')",
          'secondary': "url('/assets/secondary.jpg')",
          'first': "url('/assets/install.jpg')",
          'second': "url('/assets/second.jpg')",
          'third': "url('/assets/bg-third.png')",
          'city': "url('/assets/city-bg.jpeg')",
        },
        colors: {
          primary: {
            50: 'rgb(214, 19, 19)',
            100: 'rgb(141, 16, 16)',
            200: '#bf3030'
          },
          secondary: {
            50: 'rgb(107, 185, 255)',
          }
        },
      },
      fontFamily: {
        headings: [
          'Libre Franklin',
        ],
        body: [
          'Verdana',
        ],
        subheadings: [
          'Varela',
          'sans-serif'
        ],
      },
    },
  }
  