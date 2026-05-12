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
        potd: {
          card: '#E2E8F0',
          image: '#B5D4F4'
        },
        inspect: {
          divider: '#F3F4F6',
          button: '#0A090A',
          'button-text': '#FFFFFF',
        },
        birthday: {
          badge: '#0D1B3E',
          'badge-text': '#FFFFFF',
          'error-surface': '#FEF2F2',
          'error-text': '#EF4444',
          button: '#000000',
          'button-disabled': '#D1D5DB',
          'button-text': '#FFFFFF',
          option: '#000000',
          'option-inactive': '#FFFFFF',
          'option-text': '#FFFFFF',
          'option-text-inactive': '#374151',
          'section-label': '#9CA3AF',
        },
        random: {
          card: '#FFFFFF',
          'card-border': '#F3F4F6',
          date: '#EF7C00',
        },
      },
    },
  },
  plugins: [],
};
