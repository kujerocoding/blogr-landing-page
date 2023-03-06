/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        verylightred: 'hsl(13, 100%, 72%)',
        lightred: 'hsl(353, 100%, 62%)',
        darkblue: 'hsl(208, 49%, 24%)',
        grayishblue: 'hsl(207, 13%, 34%)',
        desaturatedblue: 'hsl(237, 23%, 32%)'
      },
      lineHeight:{
        '12': '3rem'
      },
      backgroundImage:{
        'hero-pattern': "url('/src/assets/images/bg-pattern-intro-mobile.svg')",
        'circles-pattern': "url('/src/assets/images/bg-pattern-circles.svg')"
      }
    },
  },
  plugins: [],
}
