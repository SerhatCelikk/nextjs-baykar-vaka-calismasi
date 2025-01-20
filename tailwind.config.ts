import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "rgba(58, 12, 163, 1)",
        textColour1: "rgba(11, 9, 10, 1)",
        textColour2: "rgba(43, 43, 43, 1)",
        textColour3: "rgba(128, 128, 128, 1)",
        textColour4: "rgba(170, 170, 170, 1)",
        textColour5: "rgba(212, 212, 212, 1)",
        colour1: "rgba(67, 97, 238, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
