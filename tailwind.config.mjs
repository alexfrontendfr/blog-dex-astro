/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3490dc",
          dark: "#2779bd",
        },
        secondary: {
          DEFAULT: "#ffed4a",
          dark: "#f2d024",
        },
        background: {
          light: "#f8fafc",
          dark: "#1a202c",
        },
        text: {
          light: "#2d3748",
          dark: "#e2e8f0",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
