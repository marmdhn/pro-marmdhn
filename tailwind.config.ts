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
        shine: {
          "0%": { backgroundPosition: "100% 50%" },
          "25%": { backgroundPosition: "50% 50%" },
          "50%": { backgroundPosition: "0% 50%" },
          "75%": { backgroundPosition: "50% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "slide-left-right": "slide-left-right 20s ease-in-out infinite",
        shine: "shine 20s ease-in-out infinite",
      },
      fontFamily: {
        "sf-mono": ['"SF Mono"', "monospace"],
        calibre: ['"Calibre"', "sans-serif"],
        adelia: ['"Adelia"', "cursive"],
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
