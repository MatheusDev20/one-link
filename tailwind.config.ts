/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

// Using LightGray as text-400
// DarkGray - text-700
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      darkGray: {
        600: '#343536',
        700: '#272729',
        900: '#1A1A1B',
        disabled: '#B0B0B0',
      },
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      customTheme: {
        blue: {
          light: '#91B3FA',
          dark: '#4042E2',
        },
      },
    },
  },
}

export default config
