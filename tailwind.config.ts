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

      keyframes: {
        slideIn: {
          from: {
            transform: 'translateX(100%)',
          },

          to: {
            transform: 'translateX(0)',
          },
        },

        slideOut: {
          to: {
            transform: 'translateX(0)',
          },
          from: {
            transform: 'translateX(100%)',
          },
        },
      },

      animation: {
        slideIn: 'slideIn 300ms ease',
        slideOut: 'slideOut 300ms ease',
      },
    },
  },
  plugins: [],
}
export default config
