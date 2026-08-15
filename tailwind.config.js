/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // DIDANO LUXE CARS — Palette officielle
        'dark-bg':      '#0F0705', // Fond principal sombre
        'dark-bg-alt':  '#291D14', // Sections / cartes
        'gold-dark':    '#9E7C3D', // Or foncé — accents secondaires
        'gold':         '#CCA64F', // Or principal — CTA, titres, bordures
        'gold-light':   '#F0D675', // Or clair — hover, highlights, glow
        'text-warm':    '#C9C0B3', // Texte secondaire sur fond sombre
        'text-muted':   '#56452F', // Texte secondaire sur fond clair
        'ivory':        '#F5F0E6', // Texte clair sur fond sombre
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #9E7C3D 0%, #CCA64F 50%, #F0D675 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0F0705 0%, #291D14 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(41,29,20,0.9) 0%, rgba(15,7,5,0.95) 100%)',
      },
      boxShadow: {
        'gold':      '0 4px 24px rgba(204,166,79,0.25)',
        'gold-lg':   '0 8px 40px rgba(204,166,79,0.35)',
        'gold-glow': '0 0 20px rgba(240,214,117,0.4)',
      },
      animation: {
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'shimmer':    'shimmer 2.5s linear infinite',
      },
      keyframes: {
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(204,166,79,0.4)' },
          '50%':      { boxShadow: '0 0 0 12px rgba(204,166,79,0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
      },
    },
  },
  plugins: [],
}
