/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#e6fbfc',
          100: '#b3f2f5',
          200: '#80e9ed',
          300: '#4de0e5',
          400: '#26d2dc',
          500: '#1AC8D4',
          600: '#14a0aa',
          700: '#0f7880',
          800: '#0a5058',
          900: '#053436',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
