/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          900: '#101010',
          800: '#141414',
          700: '#181818',
          600: '#222222',
        },
        bronze: {
          light: '#E5C79E',
          DEFAULT: '#B8976C',
          dark: '#A38054',
        },
        offwhite: '#F9F8F6',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
