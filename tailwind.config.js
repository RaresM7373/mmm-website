/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'selector',
  theme: {
    screens: {
      sm: '650px',
      md: '768px',
      lg: '976px',
      xl: '1240px',
    },
    extend: {
      spacing: {
        100: '28rem',
        104: '32rem',
        108: '36rem',
        112: '40rem',
        video: '350px',
        videoPadding: '450px',
        maxVideo: '1150px',
        videoH: '700px',
      },
      minHeight: {
        112: '40rem',
      },
      maxWidth: {
        video: '1150px',
      },
      fontFamily: {
        primary: 'var(--font-titillium)',
        playfair: 'var(--font-playfair)',
      },
      backgroundImage: {
        hero_bg: "url('./public/assets/her')",
      },
      colors: {
        bg: 'white',
        bgDark: '#FFFBDA',
        secondaryBg: '#423453',
        secondary: '#F3F8FF',
        accent: '#F5C070',
        tcolor: '#070F2B',
        overlay: 'rgba(0,0,0, 0.5)',
        primary: {
          100: '#ece7fc',
          500: '#FDDD60',
          700: '#d4b84a',
          900: '#1B1642',
        },
      },
    },
  },
};

export default config;
