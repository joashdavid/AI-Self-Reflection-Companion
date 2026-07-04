import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        purple: {
          '700': '#5C6FA8', // Custom purple
          '800': '#4A5B8A', // Slightly darker for hover
        },
        blue: {
          '700': '#6F82BD', // Custom blue
          '800': '#5B6BA2', // Slightly darker for hover
        },
        'dark-gray': '#333333', // Custom dark gray for title
        'muted-indigo': '#4F5D8C', // Header Title
        'soft-gray-blue': '#5F6FA3', // Header Subtitle
        'register-purple': {
          DEFAULT: '#6A5ACD', // Button gradient start
          darker: '#5A4CA9', // For hover
        },
        'register-blue': {
          DEFAULT: '#4F6BD8', // Button gradient end
          darker: '#4159B5', // For hover
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;
