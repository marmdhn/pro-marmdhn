import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import tailwindScrollbar from "tailwind-scrollbar";

// Tailwind accepts a function here at runtime (for opacity-modifier support,
// e.g. `bg-surface/90`), but its official Config type only allows strings —
// cast the return type so tsc doesn't reject a perfectly valid Tailwind config.
const withOpacity = (varName: string): string =>
  (({ opacityValue }: { opacityValue?: string }) =>
    opacityValue !== undefined
      ? `rgb(var(${varName}) / ${opacityValue})`
      : `rgb(var(${varName}))`) as unknown as string;

const config: Partial<Config> = {
  darkMode: "class",
  plugins: [daisyui, tailwindScrollbar],
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
          "50%": { transform: "translateX(60vw) translateY(150px)" },
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
        "text-secondary": "#BFBFBF",
        surface: withOpacity("--surface"),
        "surface-muted": withOpacity("--surface-muted"),
        ink: withOpacity("--ink"),
        "ink-muted": withOpacity("--ink-muted"),
        "ink-faint": withOpacity("--ink-faint"),
        "ink-ghost": withOpacity("--ink-ghost"),
        line: withOpacity("--line"),
      },
    },
  },
};
export default config;
