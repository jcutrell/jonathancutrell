const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: '11px',
      colors: {
        brandBlue: {
          '600': '#194B9B',
          '800': '#002F8E',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function({ addBase, config }) {
      addBase({
        a: {
          color: config('theme.colors.brandBlue.800'),
          '&:hover': {
            color: config('theme.colors.brandBlue.600'),
          },
        },
      })
    }),
  ],
}
