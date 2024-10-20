/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024",
        xl: "1200px",
      },

      fontFamily: {
        primary: "var(--font-bebas)",
        secondry: "var(--font-inter)",
      },

      colors: {
        primary: "#10151f",
        secondry: "#475667",
        accent: {
          DEFAULT: "#7edad2",
          hover: "#79d3cc",
        },
      },
      boxShadow: {
        custom: "0px 14px 54px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
