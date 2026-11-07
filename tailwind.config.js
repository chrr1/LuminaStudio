/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F7F5F0',
          dark: '#ECE8DF',
          card: '#FFFFFF',
          border: '#E3DFD5',
        },
        terracotta: {
          DEFAULT: '#D34826',
          hover: '#BA3E1E',
          dark: '#9F3216',
          light: '#FCEEEA',
          subtle: '#FAF0ED',
        },
        darkroom: {
          DEFAULT: '#141414',
          surface: '#1A1A1A',
          card: '#222222',
          border: '#2E2E2E',
        },
        postit: {
          yellow: '#FEF3C7',
          yellowBorder: '#FDE68A',
          orange: '#D34826',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Anton', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'polaroid': '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'polaroid-hover': '0 20px 30px -10px rgba(0, 0, 0, 0.16), 0 12px 15px -8px rgba(0, 0, 0, 0.08)',
        'postit': '2px 4px 12px rgba(0,0,0,0.08)',
        'terracotta': '0 10px 25px -5px rgba(211, 72, 38, 0.3)',
      }
    },
  },
  plugins: [],
}
