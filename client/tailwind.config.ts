export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Enables Tailwind in all components/pages
  ],
  theme: {
    extend: {
      fontFamily: {
        medieval: ['MedievalSharp', 'cursive'],
      },
      colors: {
        magicPurple: '#6a0dad',
        magicPurpleDark: '#5a009e',
        goldAccent: '#ffd700',
        goldAccentDark: '#e6c200',
        dangerRed: '#cc3333',
        dangerRedDark: '#b22222',
        neutralDark: '#333333',
        neutralDarkHover: '#444444',
        darkStone: '#1a1a1a',
        scrollGray: '#2b2b2b',
      },
    },
  },
  plugins: [],
}