/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '380px',
      },
      colors: {
        brand: {
          DEFAULT: '#C8102E', // Official logo accent red
          dark: '#A00D24',
          light: '#E63946',
          soft: '#FFF5F5',
        },
        ivory: {
          DEFAULT: '#F7F5F0',
          50: '#FCFBF9',
          100: '#F7F5F0',
          200: '#EEEAE0',
          300: '#E2DDCF',
        },
        dark: {
          DEFAULT: '#151515',
          soft: '#1E1E1E',
          card: '#242424',
        },
        charcoal: '#333333',
        muted: '#666666',
        borderSoft: '#E6E4E0',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Didot', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        script: ['"Playfair Display"', 'cursive', 'serif'],
      },
      letterSpacing: {
        widestEditorial: '0.25em',
        caps: '0.15em',
      },
      boxShadow: {
        editorial: '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
        subtle: '0 4px 20px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
