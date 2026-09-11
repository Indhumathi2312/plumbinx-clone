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
        brand: {
          green: "#02CD31",
          dark: "#0F110F",
          surfaceDark: "#1A1C1A",
          cardDark: "#262A27",
          borderDark: "#353635",
          muted: "#7D857F",
          lightTint: "#F0FCF3",
          accentTint: "#D0F2D9",
          borderLight: "#E5EBE7",
        },
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        inter: ["Inter Tight", "Inter", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      borderRadius: {
        '4xl': '2.5rem', // 40px
      }
    },
  },
  plugins: [],
};

export default config;
