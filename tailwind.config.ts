import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",     // 16px for mobile
        md: "2.5rem",        // 40px for tablets (768px+)
        lg: "3.5rem",        // 56px for desktop (1024px+)
      },
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1028px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Sanctuary Villas brand colors
        primary: {
          DEFAULT: "#643c15", // Primary brown
          dark: "#2e1b12",    // Dark brown for headings
          light: "#8b6630",   // Light brown/gold
        },
        surface: {
          DEFAULT: "#eae7d9", // Beige background
          white: "#ffffff",
        },
      },
      fontFamily: {
        serif: ["var(--font-ovo)", "serif"],
        sans: ["var(--font-nunito-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
