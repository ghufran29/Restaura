import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FEA116",
        light: "#F1F8FF",
        dark: "#0F172B",
      },
      screens: {
				xs: '360px',
				sm: '640px',
				md: '768px',
				lg: '960px',
				xl: '1200px'
			},
			fontFamily: {
				primary: "Nunito, sans-serif",
        secondary: "Pacifico, cursive",
			},
      animation: {
        'spin-slow': 'spin 25s linear infinite' 
      },
    },
  },
  plugins: [],
};
export default config;
