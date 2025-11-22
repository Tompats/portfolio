import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', ...defaultTheme.fontFamily.sans],
        display: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        cosmic: '#0B0F19',
        surface: '#111827',
        etherium: '#4FC3F7',
        nebula: '#7C3AED',
        summit: '#1E1B4B',
        brass: '#D4AF37',
        starlight: '#F1F5F9',
        moonlit: '#94A3B8',
      },
      boxShadow: {
        glow: '0 10px 30px rgba(79, 195, 247, 0.35)',
        'glow-strong': '0 25px 60px rgba(15, 23, 42, 0.85)',
        'brass-ring': '0 0 0 1px rgba(212, 175, 55, 0.4)',
      },
      backgroundImage: {
        'cosmic-radial':
          'radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.25), transparent 55%), radial-gradient(circle at 80% 0%, rgba(79, 195, 247, 0.2), transparent 50%), linear-gradient(140deg, #050814, #0B0F19 45%, #111827 80%)',
      },
      keyframes: {
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        parallax: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(60px)' },
        },
        'slow-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        gradient: 'gradient-shift 12s ease infinite',
        float: 'float 6s ease-in-out infinite',
        parallax: 'parallax 40s linear infinite alternate',
        'slow-spin': 'slow-spin 90s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
