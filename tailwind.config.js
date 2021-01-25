module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        slidr: 'SlideRight 3s ease-in',
      },
      keyframes: {
        SlideRight: {
          '0%': { transform: 'translate-x-120' },
          '100%': { transform: 'translate-x-0' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
