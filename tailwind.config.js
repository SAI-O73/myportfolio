/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0B1120', // Primary background
          900: '#0f172a',
          850: '#111827', // Secondary background
          800: '#1e293b',
          700: '#263449', // Border color
        },
        cyan: {
          400: '#38BDF8', // Accent blue / electric cyan
          500: '#0ea5e9',
          glow: 'rgba(56, 189, 248, 0.15)',
        },
        indigo: {
          400: '#818CF8', // Secondary accent
          500: '#6366f1',
          glow: 'rgba(129, 140, 248, 0.15)',
        },
        slate: {
          100: '#F8FAFC', // Main text
          300: '#CBD5E1', // Secondary text
          400: '#94A3B8',
          700: '#334155',
          800: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(56, 189, 248, 0.3)',
        'glow-indigo': '0 0 25px -5px rgba(129, 140, 248, 0.3)',
        'card': '0 10px 30px -10px rgba(2, 6, 23, 0.7)',
        'card-hover': '0 20px 40px -15px rgba(56, 189, 248, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
