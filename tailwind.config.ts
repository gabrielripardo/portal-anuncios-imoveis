import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans Pro"', 'ui-sans-serif', 'system-ui'], 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "orange-default": "#F36C21",
        "gray-700": "#393B3D",
        "gray-600": "#4E5254",
        "gray-400": "#A1A7AA",
        "gray-300": "#D0D5D8",
        "gray-200": "#EDF1F4"
      },
    },
  },
  plugins: [],
} satisfies Config;
