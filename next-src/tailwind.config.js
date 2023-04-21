const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
          300: '#05d06b',
          400: '#04be61',
          500: '#00AB55',
          600: '#019a4d',
          700: '#028344',
          800: '#014625',
          900: '#003419'
        }
      }
    },
    fontSize: {
      '3xs': ['0.45rem', '0.75rem'],
      '2xs': ['0.65rem', '0.9rem'],
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4rem'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-filters'),
    require('@tailwindcss/line-clamp')
  ],
  // xwind options
  xwind: {
    mode: 'objectstyles'
  }
}
