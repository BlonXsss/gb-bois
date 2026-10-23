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
        page: "#eef1f2",
        ink: "#14202a",
        muted: "#4f5d68",
        amber: {
          DEFAULT: "#c98a3c",
          light: "#e4b06e",
        },
        deep: "#0f1a22",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-grotesk)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2rem": "2rem",
      },
      boxShadow: {
        soft: "0 10px 40px -18px rgba(20, 32, 42, 0.18)",
        lift: "0 16px 40px -16px rgba(20, 32, 42, 0.22)",
        amber: "0 12px 28px -10px rgba(201, 138, 60, 0.55)",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
    },
  },
  plugins: [],
} satisfies Config;
