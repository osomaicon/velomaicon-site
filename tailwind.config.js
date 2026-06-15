/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        display: ['"Saira Condensed"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: {
          // amber = the warm backlight behind a gauge face (brand orange, lit)
          orange: '#ff8a1f',
          'orange-dark': '#c96a14',
          'orange-light': '#f5c089',
          amber: '#ffb43d',
          // instrument-cluster blacks: neutral graphite, not blue-black
          dark: '#0b0d11',
          surface: '#101319',
          card: '#161a21',
          // cool chrome bezel hairline (deliberately not orange-tinted)
          border: '#262c35',
          bezel: '#39414c',
          // printed-numeral ink on a dial face — a warm off-white, not pure white
          ink: '#dcd6c8',
          silver: '#8b93a1',
          // the one risk: a real gauge redline
          redline: '#e0382f',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
