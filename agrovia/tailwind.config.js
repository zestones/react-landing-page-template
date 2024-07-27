/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          black: '#263238',
          d_grey: '#4D4D4D',
          grey: '#717171',
          l_grey: '#89939E',
          grey_blue: '#ABBED1',
          silver: '#F5F7FA',
          white: '#FFFFFF',
        },
        primary: {
          primary: '#4CAF4F',
          secondary: '#263238',
          info: '#2194f3',
        },
        shade: {
          1: '#43A046',
          2: '#388E3B',
          3: '#237D31',
          4: '#1B5E1F',
          5: '#103E13',
        },
        tint: {
          1: '#66BB69',
          2: '#81C784',
          3: '#A5D6A7',
          4: '#C8E6C9',
          5: '#E8F5E9',
        },
        action: {
          warning: '#FBC02D',
          error: '#E53835',
          success: '#2E7D31',
        },
      },
      fontSize: {
        h1: ['64px', '76px'],
        h2: ['36px', '44px'],
        h3: ['28px', '36px'],
        h4: ['20px', '28px'],
      },
      fontWeight: {
        'semi-bold': 600,
      },
    },
  },
  plugins: [],
}

