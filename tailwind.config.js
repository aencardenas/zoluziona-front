/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'md': '768px',
      'lg': '1024px'
    },
    extend: {
      colors: {
        'green-34': '#33A835',
        'green-28': '#5FB563',
        'blue-16': '#83CEE5',
        'blue-70': '#2A4F9D',
        'blue-62': '#3D5FA9',
        'blue-85': '#24377D',
        'black-100': '#1D1E1C',
        'black-101': '#353435',
        'gray-30': '#B6B6B5',
        'gray-20': '#CCCBCC',
      },

      fontFamily:{
        'montserrat': ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [
    
  ],
}

