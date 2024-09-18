import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-left-right": {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(60vw)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-left-right": "slide-left-right 20s ease-in-out infinite",
      },
      fontFamily: {
        "sf-mono": ['"SF Mono"', "monospace"],
        calibre: ['"Calibre"', "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#27BBA0",
        secondary: "#7A7A7A",
      },
    },
  },
  plugins: [],
};
export default config;
