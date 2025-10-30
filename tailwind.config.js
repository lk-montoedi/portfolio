/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        primary: '#1A1A1A',
        secondary: '#101010',
        accent: '#FFD700',
        textPrimary: '#E0E0E0',
        textSecondary: '#B0B0B0',
      },
    },
  },
  plugins: [],
}