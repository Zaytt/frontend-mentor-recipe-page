import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      nutmeg: 'hsl(14, 45%, 36%)',
      darkraspberry: 'hsl(332, 51%, 32%)',
      white: 'hsl(0, 0%, 100%)',
      rosewhite: 'hsl(330, 100%, 98%)',
      eggshell: 'hsl(30, 54%, 90%)',
      lightgrey: 'hsl(30, 18%, 87%)',
      wengebrown: 'hsl(30, 10%, 34%)',
      darkcharcoal: 'hsl(24, 5%, 18%)',
    },
    fontFamily: {
      serif: ['YoungSerif', 'serif'],
      sans: ['Outfit', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        custom: '0px 8px 12px 0px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config;
