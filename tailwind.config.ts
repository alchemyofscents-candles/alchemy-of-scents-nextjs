import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFFFFF",
        charcoal: "#111111",
        taupe: "#F2F2F0",
        "taupe-dark": "#D9D9D6",
        burgundy: "#111111",
      },
      fontFamily: {
        serif: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
