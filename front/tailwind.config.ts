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
          '100': '#e8c9f1',
          '200': '#d194e2',
          '300': '#b95ed4',
          '400': '#9d32bc',
          '500': '#702486',
          '600': '#5a1d6b',
          '700': '#431650',
          '800': '#2d0e36',
          '900': '#16071b',
        },
        secundario: {
          '100': '#c0d6fb',
          '200': '#a1c2fa',
          '300': '#81aef8',
          '400': '#6299f6',
          '500': '#4285F4',
          '600': '#0e51ea',
          '700': '#0a49b0',
          '800': '#073075',
          '900': '#03183B',
        },
        complemento: {
          '100': '#dfd1f3',
          '200': '#bfa3e7',
          '300': '#9f74dc',
          '400': '#632daf',
          '500': '#492181',
          '600': '#532692',
          '700': '#421e75',
          '800': '#321758',
          '900': '#210f3a',
        },
        acento: {
          '100': '#D194E2',
          '400': '#B95ED4',
          '700': '#262136',
          '800': '#201D43',
          '900': '#201C2D',
        },
        card: '#1F2937',
        chart1: 'hsl(var(--chart1))',
        gradient: {
          start: '#492181',
          second: '#514B8F',
          third: '#556096',
          end: '#58759D',
        },
        'link-blue': '#7CB4FF',
      },
      gridTemplateColumns: {
        consults: 'repeat(auto-fit, minmax(150px, 1fr))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #58759D, #556096, #514B8F, #492181)',
      },
    },
  },
  darkMode: ['class'],
  plugins: [nextui(), require('tailwindcss-animate')],
} satisfies Config;
