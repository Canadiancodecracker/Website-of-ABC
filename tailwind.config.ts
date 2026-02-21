import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "var(--color-ink)",
          emerald: "var(--color-emerald)",
          teal: "var(--color-teal)",
          sky: "var(--color-sky)",
          cloud: "var(--color-cloud)"
        }
      },
      fontFamily: {
        sans: ["'Public Sans'", "'Noto Sans SC'", "sans-serif"]
      },
      boxShadow: {
        soft: "0 12px 40px rgba(14, 50, 44, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
