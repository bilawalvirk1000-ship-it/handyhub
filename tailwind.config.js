/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./config/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#F97316",
          dark: "#C2410C",
          light: "#FB923C",
        },
        accent: {
          DEFAULT: "#FBBF24",
        },
        ink: {
          DEFAULT: "#0A0A0A",
          soft: "#334155",
          muted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -6px rgba(15, 23, 42, 0.12)",
      },
      maxWidth: {
        page: "1200px",
      },
    },
  },
  plugins: [],
};
