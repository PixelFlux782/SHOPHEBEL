import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "cinematic": "1400px",
      },
      colors: {
        background: "#0A0A0A",
        foreground: "#FAFAFA",
        card: {
          DEFAULT: "#111317",
          border: "rgba(255, 255, 255, 0.08)",
        },
        brand: {
          blue: "#0066FF", // Das UI-Accent Blue aus dem Brand System
          muted: "#888888",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "radial-gradient(circle at 50% 0%, rgba(0, 102, 255, 0.15) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;