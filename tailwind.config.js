/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        foreground: '#fafafa',
        card: '#13131a',
        'card-hover': '#1a1a24',
        border: '#27272a',
        muted: '#a1a1aa',
        primary: {
          DEFAULT: '#8b5cf6',
          foreground: '#ffffff'
        },
        accent: {
          DEFAULT: '#06b6d4',
          foreground: '#ffffff'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)'
      }
    }
  },
  plugins: []
}