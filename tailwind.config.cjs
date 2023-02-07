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
          "0.875em",
          {
            lineHeight: "1.5625em",
            letterSpacing: "0.03em",
            fontWeight: "400",
          },
        ],
        sm: [
          "1em",
          {
            lineHeight: "1.875em",
            letterSpacing: "0.03em",
            fontWeight: "400",
          },
        ],
        base: [
          "1em",
          {
            lineHeight: "1.75em",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        lg: [
          "17px",
          {
            lineHeight: "1.75em",
            letterSpacing: "0.05em",
            fontWeight: "400",
          },
        ],
        xl: [
          "1.5em",
          {
            lineHeight: ".50em",
            letterSpacing: "0.05em",
            fontWeight: "400",
          },
        ],
        "2xl": [
          "1.75em",
          {
            lineHeight: "25px",
            letterSpacing: "0.05em",
            fontWeight: "700",
          },
        ],
        "4xl": [
          "2.625em",
          {
            lineHeight: "2.852em",
            letterSpacing: "0.05em",
            fontWeight: "700",
          },
        ],
        "5xl": [
          "2.375em",
          {
            lineHeight: "1.375em",
            letterSpacing: "0.05em",
            fontWeight: "500",
          },
        ],
        "6xl": [
          "3.125em",
          {
            lineHeight: "0.8em",
            letterSpacing: "0.05em",
            fontWeight: "700",
          },
        ],
        "7xl": [
          "4.375em",
          {
            lineHeight: "0.8em",
            letterSpacing: "0.05em",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
