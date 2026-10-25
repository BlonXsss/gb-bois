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
        page: "#e8ecef",
        ink: "#121c24",
        muted: "#55636e",
        amber: {
          DEFAULT: "#c48438",
          light: "#e2ae6a",
        },
        deep: "#0c161e",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-grotesk)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2rem": "2rem",
      },
      boxShadow: {
        soft: "0 12px 36px -20px rgba(18, 28, 36, 0.22)",
        lift: "0 18px 42px -18px rgba(18, 28, 36, 0.26)",
        amber: "0 14px 30px -12px rgba(196, 132, 56, 0.48)",
      },
      letterSpacing: {
        tightest: "-0.035em",
      },

    },
  },
  plugins: [],
} satisfies Config;
