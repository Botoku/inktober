/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: "#0C2C47",
        yellow: "#DA9B2B",
        green: "#2E5749",
        orange: "#BF512C",
        mint: "#ABCBCA"
      },
    },
  },
  plugins: [],
};
