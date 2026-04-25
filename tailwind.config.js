/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#042C53',
          hover: '#185FA5',
          surface: '#E6F1FB',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#525252',
          tertiary: '#6B7280',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F5F5F7',
        },
        header: {
          title: '#1A1A1A',
          subtitle: '#525252',
          accent: '#DC2626',
          button: '#E7E5E4',
          'button-active': '#E6F1FB',
          icon: '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
};
