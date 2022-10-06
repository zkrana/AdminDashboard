module.exports = {
  content: ['./*.html'],
  screens: {
    "sm": "640px",
    // => @media (min-width: 640px) { ... }
    "md": "768px",
    // => @media (min-width: 768px) { ... }
    "lg": "1024px",
    // => @media (min-width: 1024px) { ... }
    "xl": "1280px",
    // => @media (min-width: 1280px) { ... }
    "2xl":	"1536px"
  },
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'shuvoit-bg': '#F4F5FA',
        'shuvoit-shadow': 'linear-gradient(98deg, #C6A7FE, #9155FD 94%)',
        'shuvoit-text':'rgba(58, 53, 65, 0.87)',
        'btn':'#9155FD',
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [ ],
}

