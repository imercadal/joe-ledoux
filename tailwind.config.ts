import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightText: "#ebf5fc",
        lightAccent: "#d8f5fa",
        subMenu: "#0091bd",
        accent: '#0091bd',
				dark: '#0d3a4e',
				darker: '#0b2f42',
				darkest: '#062637'
      },
      fontFamily: {
        azeret: ["var(--font-azeret-mono)"],
        inter: ["var(--font-inter)"],
        cardo: ["Cardo, serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

