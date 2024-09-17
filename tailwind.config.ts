import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      inset: {
        '5-per': "5%",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        '85-per':"85%",
        '90-per':"90%",
        '350-px':"350px",
        '400-px':"400px",
        '600': "600px",
        '700': "700px",
        '95-per': '95%'
      },
      width:{
        '80':"80%",
        '90':"90%",
      },
      keyframes: {
        showSlide: {
          '0%': { opacity: '40%' },
          '100%': { opacity: '100%' },
        }
      },
      animation: {
        showSlide: 'showSlide 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
