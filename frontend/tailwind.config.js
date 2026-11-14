/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: { DEFAULT: '#10B981', deep: '#059669', soft: '#ECFDF5' },
        charcoal: '#171C26',
        slateText: '#1E293B',
      },
      boxShadow: { card: '0 6px 24px rgba(23, 28, 38, 0.045)' },
    },
  },
  plugins: [],
};
