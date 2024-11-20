import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primario: {
          100: '#dfd1f3', // Morado muy claro
          200: '#E5CCFF',
          300: '#D6B3FF',
          400: '#C799FF',
          500: '#B880FF',
          600: '#A966FF',
          700: '#9A4DFF',
          800: '#8B33FF',
          900: '#7C1AFF', // Morado oscuro
        },
        secundario: {
          100: '#c0d6fb', // Azul claro
          200: '#a1c2fa',
          300: '#81aef8',
          400: '#6299f6',
          500: '#4285F4',
          600: '#4285F4',
          700: '#0a49b0',
          800: '#4285F4',
          900: '#1A75FF', // Azul oscuro
        },
        complemento: {
          // Nuevo nombre para el segundo conjunto de morados
          100: '#dfd1f3', // Similar al primary pero podría tener variaciones
          200: '#bfa3e7',
          300: '#9f74dc',
          400: '#9f74dc',
          500: '#632daf',
          600: '#532692',
          700: '#421e75',
          800: '#321758',
          900: '#210f3a',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
} satisfies Config;
