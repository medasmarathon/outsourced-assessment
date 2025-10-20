export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#4A559D",
          "primary-hover": "#3A4580",
        },
        nav: {
          bg: "#3B4248",
          "item-active": "#A3C93A",
          "item-active-text": "#333333",
          "item-inactive": "#FFFFFF",
          heading: "#B0B0B0",
        },
        neutral: {
          50: "#F9F9F9",
          100: "#F0F0F0",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#B0B0B0",
          500: "#757575",
          600: "#666666",
          700: "#333333",
        },
        status: {
          "utility-bg": "#E8F5E9",
          "utility-text": "#4CAF50",
          "carbon-bg": "#F0F0F0",
          "carbon-text": "#333333",
          delete: "#E53935",
          "delete-hover": "#C62828",
        },
      },
    },
  },
  plugins: [],
};
