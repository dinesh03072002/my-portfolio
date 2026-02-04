/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
        'pacifico': ['"Pacifico"', 'cursive'],
      },
      keyframes: {
        starfield: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(20px, -20px) rotate(120deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
        },
        titleGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))' },
          '50%': { filter: 'drop-shadow(0 0 40px rgba(168, 85, 247, 0.4))' },
        },
        orbit1: {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.3' },
          '50%': { transform: 'translate(20px, -20px) scale(1.1)', opacity: '0.6' },
          '100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.3' },
        },
        orbit2: {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.2' },
          '50%': { transform: 'translate(-15px, 15px) scale(0.9)', opacity: '0.5' },
          '100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.2' },
        },
        orbit3: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0.4' },
          '50%': { transform: 'translate(10px, 10px) rotate(180deg)', opacity: '0.7' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)', opacity: '0.4' },
        },
        rotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        starfield: 'starfield 60s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        float: 'float 15s ease-in-out infinite',
        titleGlow: 'titleGlow 3s ease-in-out infinite',
        orbit1: 'orbit1 20s linear infinite',
        orbit2: 'orbit2 15s linear infinite reverse',
        orbit3: 'orbit3 10s linear infinite',
        rotate: 'rotate 10s linear infinite',
        slideInLeft: 'slideInLeft 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}