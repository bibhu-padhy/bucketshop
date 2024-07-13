/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // This enables the 'class' strategy for dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4a5568",
          dark: "#2d3748",
        },
        secondary: {
          DEFAULT: "#ed8936",
          dark: "#dd6b20",
        },
        background: {
          DEFAULT: "#f7fafc",
          dark: "#1a202c",
        },
        text: {
          DEFAULT: "#2d3748",
          dark: "#e2e8f0",
        },
      },
    },
  },
  plugins: [],
};
