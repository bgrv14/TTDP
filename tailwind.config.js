/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        gray: {
          100: "#E2E6EE",
          200: "#B2B2B2",
          300: "#767678",
          400: "#585454",
          500: "#1A1A1A",
          600: "#070707",
          700: "#929292",
          800: "#F9FAFC",
          900: "#B4B4B4",
        },
        primary: "#09AFF4",
        secondary: "#5245DD",
        accent: {
          yellow: "#FFD400",
          purple: "#C07FF2",
          blue: "#74B7FE",
        },
        gradient: {
          start: "#919191",
          end: "#E9E9E9",
        },
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      fontSize: {
        h1: [
          "48px",
          { lineHeight: "120%", letterSpacing: "0%", jost: "Jost Semi Bold" },
        ],
        h2: [
          "40px",
          { lineHeight: "120%", letterSpacing: "0%", jost: "Jost Bold" },
        ],
        h3: [
          "32px",
          { lineHeight: "120%", letterSpacing: "0%", jost: "Jost ExtraBold" },
        ],
        h4: [
          "28px",
          { lineHeight: "120%", letterSpacing: "0%", jost: "Jost Bold" },
        ],
        h5: [
          "22px",
          { lineHeight: "120%", letterSpacing: "0%", jost: "Jost Medium" },
        ],
        button: ["22px", { lineHeight: "120%", letterSpacing: "0%" }],
        headline1: ["18px", { lineHeight: "150%", letterSpacing: "0%" }],
        headline2: ["16px", { lineHeight: "120%", letterSpacing: "0%" }],
        headline3: ["14px", { lineHeight: "150%", letterSpacing: "0%" }],
        primary: ["20px", { lineHeight: "100%", letterSpacing: "0%" }],
      },
      borderRadius: {
        s: ["20px"],
        m: ["30px"],
        l: ["40px"],
      },
      gridTemplateColumns: {
        desktop: "repeat(12, 1fr)",
        mobile: "repeat(2, 1fr)",
      },
      gap: {
        desktop: "20px",
        mobile: "30px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
