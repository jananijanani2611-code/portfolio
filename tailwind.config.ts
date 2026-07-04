import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#FFFFFF",
          secondary: "#FAFAFA",
          dark: "#0F172A",
          "dark-secondary": "#111827",
        },
        ink: {
          DEFAULT: "#111111",
          secondary: "#6B7280",
          dark: "#F5F5F5",
          "dark-secondary": "#94A3B8",
        },
        line: {
          DEFAULT: "#E5E7EB",
          dark: "#1E293B",
        },
        accent: {
          DEFAULT: "#000000",
          dark: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
        lg: "16px",
        xl: "20px",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)",
        "soft-hover": "0 4px 12px rgba(0,0,0,0.06), 0 16px 40px rgba(0,0,0,0.08)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
