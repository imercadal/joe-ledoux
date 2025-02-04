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
        primary: "#0091BD",
        secondary: {
          100: '#ffffff',
          200: '#eb2847'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
