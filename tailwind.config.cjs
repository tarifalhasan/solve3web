/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: " 'Lato', sans-serif",
        segoe: "'segoe'",
        jamjuree: "'Bai Jamjuree', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
      padding: {
        "1/3": "33.33333%",
        "2/3": "66.6666%",
      },
      backgroundColor: {
        skin: {
          dark: "var(--color-bg-dark)",
          purple: "var( --color-text-puple)",
          "dark-200": "var(--color-black-darken)",
        },
      },
      color: {
        pink: "var(--color-pink)",
      },
      textColor: {
        skin: {
          purple: "var( --color-text-puple)",
          light: "var(--color-text-light)",
          muted: "var( --color-text-muted)",
        },
      },
      fontSize: {
        xs: [
          "14px",
          {
            lineHeight: "25px",
            letterSpacing: "0.03em",
            fontWeight: "400",
          },
        ],
        sm: [
          "16px",
          {
            lineHeight: "30px",
            letterSpacing: "0.03em",
            fontWeight: "400",
          },
        ],
        base: [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        lg: [
          "17px",
          {
            lineHeight: "28px",
            letterSpacing: "0.05em",
            fontWeight: "400",
          },
        ],
        xl: [
          "24px",
          {
            lineHeight: "28px",
            letterSpacing: "0.05em",
            fontWeight: "400",
          },
        ],
        "2xl": [
          "28px",
          {
            lineHeight: "25px",
            letterSpacing: "0.05em",
            fontWeight: "700",
          },
        ],
        "4xl": [
          "42px",
          {
            lineHeight: "46px",
            letterSpacing: "0.05em",
            fontWeight: "700",
          },
        ],
        "7xl": [
          "70px",
          {
            lineHeight: "46px",
            letterSpacing: "0.05em",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
