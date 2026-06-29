import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#F3E7D0",
        ink: "#2E1C12",
        rust: "#D4622B",
        brick: "#B0411F",
        gold: "#E6A338",
        peach: "#E89B6C",
        tan: "#cbb89e",
        clay: "#4a3424",
        stone: "#6b5a45",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "3px",
      },
    },
  },
  plugins: [],
};
export default config;
