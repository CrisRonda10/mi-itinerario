/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
      extend: {
        fontFamily :{
          glory: ["glory","sans-serif"],
          pop: ["pop","sans"],
      }
      }
  },
  variants: {},
  plugins: []
}

