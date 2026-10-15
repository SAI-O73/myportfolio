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
        // Theme Colors
        royal: {
          50: '#EFF6FF',  // Secondary background: Light Blue
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB', // Primary accent: Royal Blue
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        navy: {
          900: '#0F172A', // Headings: Dark Navy
          950: '#020617',
        },
        slateText: {
          500: '#64748B',
          600: '#475569', // Body text: Slate Gray
          700: '#334155',
          800: '#1E293B',
        },
        surface: {
          white: '#FFFFFF', // Primary background: White
          subtle: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
          blueBorder: '#BFDBFE',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)',
        'premium': '0 10px 30px -5px rgba(37, 99, 235, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.03)',
        'premium-hover': '0 20px 40px -10px rgba(37, 99, 235, 0.16), 0 8px 12px -3px rgba(15, 23, 42, 0.05)',
        'royal-glow': '0 0 25px -3px rgba(37, 99, 235, 0.25)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
