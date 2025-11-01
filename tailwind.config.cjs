module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5a4',
        'primary-700': '#0b948a',
        'muted-foreground': '#6b7280'
      },
      boxShadow: {
        'card': '0 6px 18px rgba(15,23,42,0.08)'
      }
    }
  },
  plugins: []
};
