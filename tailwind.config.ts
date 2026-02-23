import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme tokens
        "c-bg":           "var(--bg)",
        "c-surface":      "var(--surface)",
        "c-text":         "var(--text)",
        "c-text-2":       "var(--text-2)",
        "c-text-3":       "var(--text-3)",
        "c-border":       "var(--border)",
        "c-accent":       "var(--accent)",
        // Dark section tokens
        "c-dark-bg":      "var(--dark-bg)",
        "c-dark-surface": "var(--dark-surface)",
        "c-dark-text":    "var(--dark-text)",
        "c-dark-text-2":  "var(--dark-text-2)",
        "c-dark-border":  "var(--dark-border)",
      },
    },
  },
  plugins: [],
};

export default config;
