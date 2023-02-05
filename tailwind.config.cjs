/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: " 'Lato', sans-serif",
        segoe: "'segoe'",
      },
      backgroundColor: {
        skin: {
          dark: "var(--color-bg-dark)",
          purple: "var( --color-text-puple)",
        },
      },
      textColor: {
        skin: {
          purple: "var( --color-text-puple)",
          light: "var(--color-text-light)",
        },
      },
    },
  },
  plugins: [],
};
