/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        avul: {
          50: '#E4F0F2',
          100: '#CDE8EC',
          200: '#9ED3DA',
          300: '#6CC3CF',
          400: '#3AA3B0',
          500: '#1F6F7A',
          600: '#195B64',
          700: '#1C4452',
          800: '#12313F',
          900: '#0A1C25',
          950: '#06141B',
        },
        // Alias foxnode to avul palette to harmonize all components automatically
        foxnode: {
          50: '#E4F0F2',
          100: '#CDE8EC',
          200: '#9ED3DA',
          300: '#6CC3CF',
          400: '#6CC3CF',
          500: '#1F6F7A',
          600: '#195B64',
          700: '#1C4452',
          800: '#12313F',
          900: '#0A1C25',
          950: '#06141B',
        },
        severity: {
          critical: '#E0525F',
          high: '#F5A524',
          medium: '#6CC3CF',
          low: '#2BC46A',
          info: '#98A3BA',
        },
        surface: {
          primary: 'rgb(var(--surface-primary) / <alpha-value>)',
          secondary: 'rgb(var(--surface-secondary) / <alpha-value>)',
          tertiary: 'rgb(var(--surface-tertiary) / <alpha-value>)',
          elevated: 'rgb(var(--surface-elevated) / <alpha-value>)',
        },
        content: {
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
          tertiary: 'rgb(var(--text-tertiary) / <alpha-value>)',
          muted: 'rgb(var(--text-muted) / <alpha-value>)',
        },
        border: {
          DEFAULT: 'rgb(var(--border-primary) / <alpha-value>)',
          secondary: 'rgb(var(--border-secondary) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
