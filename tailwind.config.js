/**  @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Noto Sans TC'],
    },
    extend: {
      colors: {
        primary: '#123160',
        secondary: '#F1F8FF',
        descript: '#6F6F6F',
        fn: '#F3AF37',
      },
      borderRadius: {
        main: '8px',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 0.9 },
        },
      },
      animation: {
        fadeing: 'fadein 0.5s',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: '32px' },
        h2: { fontSize: '24px' },
        h3: { fontSize: '16px', lineHeight: '24px' },
      });
    }),
  ],
};
