/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Editorial palette — white & black dominant, pink as sophisticated accent
        'white-pure': '#FFFFFF',
        'offwhite': '#FBE9E7',
        'paper': '#FDF1EF',
        'blush-bg': '#FBE9E7',
        'ink': '#0A0A0A',
        'ink-soft': '#1A1A1A',
        'graphite': '#2A2A2A',
        'stone': '#6B6B6B',
        'stone-light': '#9B9B9B',
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

        // Backwards-compat (existing class names keep working with new values)
        'charcoal': {
          DEFAULT: '#0A0A0A',
          soft: '#2A2A2A',
        },
        'mist': '#6B6B6B',
        'mist-light': '#9B9B9B',
        'blush': {
          DEFAULT: '#E8C5C5',
          light: '#F4DDDD',
          dark: '#C99B9F',
        },
        'heart': {
          DEFAULT: '#C99B9F',
          dark: '#A87580',
          light: '#E8C5C5',
        },
        'ivory': '#FFFFFF',
        'ivory-warm': '#FAFAFA',
        'ivory-soft': '#FFFFFF',
        'cream': '#FFFFFF',
        'cream-warm': '#FAFAFA',
        'gold': '#C99B9F',
        'gold-light': '#E8C5C5',
        'rose': {
          DEFAULT: '#E8C5C5',
          light: '#F4DDDD',
          dark: '#C99B9F',
        },
        'burgundy': {
          DEFAULT: '#0A0A0A',
          dark: '#000000',
          light: '#1A1A1A',
        },
        'primary': '#0A0A0A',
        'accent': '#C99B9F',
        'accent-dark': '#A87580',
        'light': '#FFFFFF',
        'light-gray': '#E8E8E8',
        'text-dark': '#1A1A1A',
        'text-light': '#6B6B6B',
      },
      fontFamily: {
        'display': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'script': ['"Allura"', '"Cormorant Garamond"', 'cursive'],
        'serif': ['"Playfair Display"', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-ivory': 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)',
        'gradient-cream': 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)',
        'gradient-charcoal': 'linear-gradient(180deg, #0A0A0A 0%, #000000 100%)',
        'gradient-burgundy': 'linear-gradient(180deg, #0A0A0A 0%, #000000 100%)',
        'gradient-rose': 'linear-gradient(135deg, #F4DDDD 0%, #E8C5C5 100%)',
        'gradient-pink': 'linear-gradient(135deg, #F4DDDD 0%, #E8C5C5 100%)',
      },
      boxShadow: {
        'soft': '0 8px 32px -8px rgba(10, 10, 10, 0.08)',
        'glow': '0 0 40px -8px rgba(201, 155, 159, 0.4)',
        'editorial': '0 24px 50px -20px rgba(10, 10, 10, 0.18)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'editorial': '0.35em',
      },
    },
  },
  plugins: [],
};
