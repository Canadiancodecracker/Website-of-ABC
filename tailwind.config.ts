import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Arial'],
      },
      colors: {
        brand: {
          blue: '#0E3C75',
          'blue-light': '#1E5A9E',
          'blue-dark': '#0A2D4F',
          green: '#4CAF50',
          'green-light': '#66BB6A',
          'green-dark': '#388E3C',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0E3C75 0%, #1E5A9E 100%)',
        'gradient-hero': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
        'gradient-card': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      },
      boxShadow: {
        brand: '0 10px 30px -12px rgba(14,60,117,.25)',
        'brand-lg': '0 20px 50px -12px rgba(14,60,117,.3)',
        'brand-xl': '0 25px 60px -12px rgba(14,60,117,.35)',
        'glow-blue': '0 0 20px rgba(14,60,117,.2)',
        'glow-green': '0 0 20px rgba(76,175,80,.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

