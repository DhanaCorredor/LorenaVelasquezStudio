/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#1A1A1A',
        'accent': '#D4956E',
        'accent-dark': '#B8824D',
        'light': '#F5F1ED',
        'light-gray': '#E8E3DE',
        'text-dark': '#2D2D2D',
        'text-light': '#6B6B6B',
        'gold': '#C9A961',
        'rose': '#D4A897',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-subtle': 'linear-gradient(135deg, #F5F1ED 0%, #FDF8F5 100%)',
      },
    },
  },
  plugins: [],
};
