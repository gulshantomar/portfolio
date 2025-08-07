// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      textShadow: {
        white: '0 0 8px rgba(255, 255, 255, 0.8)',
        'white-lg': '0 0 16px rgba(255, 255, 255, 0.8)',
      },
       backgroundImage: {
    'radial-glow': 'radial-gradient(circle, rgba(147,51,234,0.2), rgba(88,28,135,0.3), transparent)',
  },
      boxShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [
  ],
};
