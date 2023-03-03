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
        darkblue: 'hsl(208, 49%, 24%)'
      },
      lineHeight:{
        '12': '3rem'
      }
    },
  },
  plugins: [],
}
