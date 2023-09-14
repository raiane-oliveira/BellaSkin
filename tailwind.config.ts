import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#B67659',
        secondary: '#101820',
        neutral: '#898A92',
        'gray-neutral': '#f9f9f9',
        'gray-neutral-2': '#FDFDFD',
      },
      fontFamily: {
        app: 'Lato, sans-serif',
        roboto: 'Roboto, sans-serif',
      },

      fontSize: {
        heading: '3.125rem',
        'heading-small': '2.625rem',
      },

      lineHeight: {
        'heading-small': '3.675rem',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
