/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Editorial palette — white & black dominant, pink as sophisticated accent
        'white-pure': '#FFFFFF',
        'blush-bg': '#FBE9E7',
        'ink': '#0A0A0A',
        'ink-soft': '#1A1A1A',
        'graphite': '#2A2A2A',
        'stone': '#6B6B6B',
        'line': '#E8E8E8',
        'pink': {
          DEFAULT: '#E8C5C5',
          light: '#F4DDDD',
          dark: '#C99B9F',
          deep: '#A87580',
        },
        'wine': {
          DEFAULT: '#5C1A30',
          dark: '#3F1020',
          light: '#7A2640',
        },
      },
      fontFamily: {
        'display': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-pink': 'linear-gradient(135deg, #F4DDDD 0%, #E8C5C5 100%)',
      },
      boxShadow: {
        'soft': '0 8px 32px -8px rgba(10, 10, 10, 0.08)',
        'glow': '0 0 40px -8px rgba(201, 155, 159, 0.4)',
        'editorial': '0 24px 50px -20px rgba(10, 10, 10, 0.18)',
      },
      letterSpacing: {
        'editorial': '0.35em',
      },
    },
  },
  plugins: [],
};
