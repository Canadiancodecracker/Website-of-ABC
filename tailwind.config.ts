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
          green: '#4CAF50',
        },
      },
      boxShadow: {
        brand: '0 10px 30px -12px rgba(14,60,117,.25)',
      },
    },
  },
  plugins: [],
}
export default config

