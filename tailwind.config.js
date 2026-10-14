/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: '#6B2142',
          light: '#8C3A5D',
          dark: '#4A1730',
        },
        mustard: {
          DEFAULT: '#D9A441',
          light: '#EAC978',
          dark: '#B8842C',
        },
        cream: {
          DEFAULT: '#FBF3E7',
          dark: '#F3E5CE',
        },
        berry: '#B5657D',
        ink: '#3A1F2B',
      },
      fontFamily: {
        display: ['"Baloo 2"', 'cursive'],
        body: ['"Nunito"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(74, 23, 48, 0.25)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drip: {
          '0%': { transform: 'translateY(0) scaleY(1)' },
          '50%': { transform: 'translateY(6px) scaleY(1.08)' },
          '100%': { transform: 'translateY(0) scaleY(1)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        drip: 'drip 3.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
