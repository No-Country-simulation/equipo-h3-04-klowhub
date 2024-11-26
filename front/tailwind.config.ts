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
          100: '#e8c9f1', // Morado muy claro
          200: '#d194e2',
          300: '#b95ed4',
          400: '#9d32bc',
          500: '#702486',
          600: '#5a1d6b',
          700: '#431650',
          800: '#2d0e36',
          900: '#16071b', // Morado oscuro
        },
        secundario: {
          100: '#c0d6fb', // Azul claro
          200: '#a1c2fa',
          300: '#81aef8',
          400: '#6299f6',
          500: '#4285F4',
          600: '#0e51ea',
          700: '#0a49b0',
          800: '#073075',
          900: '#03183B', // Azul oscuro
        },
        complemento: {
          // Nuevo nombre para el segundo conjunto de morados
          100: '#dfd1f3', // Similar al primary pero podría tener variaciones
          200: '#bfa3e7',
          300: '#9f74dc',
          400: '#632daf',
          500: '#492181',
          600: '#532692',
          700: '#421e75',
          800: '#321758',
          900: '#210f3a',
        },
        acento: {
          900: '#201C2D',
          800: '#201D43',
          700: '#262136',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
} satisfies Config;
