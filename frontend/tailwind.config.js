/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Calibre", ...defaultTheme.fontFamily.sans],
      alpina: [
        "GT Alpina",
        "ui-serif",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
    },
    screens: {
      xs: "384px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2024px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0rem",
        md: "3rem",
        lg: "4rem",
      },
    },
    extend: {
      fontSize: {
        base: "1.125rem",
        xl: "1.25rem",
        "2xl": "2.5rem",
        "3xl": "2.625rem",
      },
      colors: {
        white: "#FFFFFF",
        blue: {
          DEFAULT: "#230B59",
          deep: "#4840BB",
          light: "#4D5898",
          lighter: "#7086C9",
          lightest: "#BDC6F5",
        },
        orange: { DEFAULT: "#DF8C5E", light: "#f4b896" },
        gray: "#DADEF1",
        yonder: "#505CA6",
        green: "#5fa698",
      },
      dropShadow: {
        short: "-6px 8px 0.6px rgba(0, 0, 0, 0.1)",
      },
      spacing: {},
      borderRadius: {},
      boxShadow: {},
    },
  },
  plugins: [],
};
