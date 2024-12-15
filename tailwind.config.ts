import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        graphik: ["Graphik", "Arial", "sans-serif"],
        libre: ["Libre Franklin", "Arial", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.75rem", // 28px
        "4xl": "2rem", // 32px
        "5xl": "2.625rem", // 42px
        "6xl": "3rem", // 48px
        "7xl": "4rem", // 64px
        "8xl": "5rem", // 80px
        home: "102px", // Custom size for home
      },
      colors: {
        primary: {
          main: "#E75250",
        },
      },
      boxShadow: {
        nav: "0px 2px 100px 0px #0000000D",
        blur: "-10px 14px 34px 0px #00000040",
      },
    },
  },
  plugins: [],
} satisfies Config;
