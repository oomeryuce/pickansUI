const colors = require("tailwindcss/colors");
const themes = require("tailwindcss/defaultTheme");

const withOpacity =
  (variableName) =>
  ({ opacityValue }) => {
    if (opacityValue != null) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: "279px minmax(900px, 1fr) 279px",
      },
      colors: {
        brand: colors.lightBlue,
        "pickans-light": "#3EAEFF",
        "pickans-darker": "#374052",
        "pickans-red": "#ff664e",
        github: "#333333",
        "dark-theme": "#0e131f",
        "fb-variant": "#3b5898",
        "lnkin-variant": "#0076b5",
        "bluish-gray": {
          50: "#f5f7fa",
          100: "#ebeff5",
          200: "#dde4ee",
          300: "#bfcbdf",
          400: "#9db0cd",
          500: "#7490b9",
          600: "#5272a3",
          700: "#3f587d",
          800: "#354a69",
          900: "#30435f",
        },
        "havelock-blue": {
          50: "#f5fbff",
          100: "#ecf7ff",
          200: "#cfebff",
          300: "#b2dfff",
          400: "#78c6ff",
          500: "#3EAEFF",
          600: "#389de6",
          700: "#2f83bf",
          800: "#256899",
          900: "#1e557d",
        },
        "dark-gray": {
          50: "#e4e4e4",
          100: "#cbcbcb",
          200: "#b2b2b2",
          300: "#9a9a9a",
          400: "#828282",
          500: "#6b6b6b",
          600: "#555555",
          700: "#404040",
          800: "#2c2c2c",
          900: "#181818",
        },
        "spring-bud": {
          50: "#e3e4ef",
          100: "#c9c9e1",
          200: "#aeafd4",
          300: "#9496c8",
          400: "#7b7cbe",
          500: "#6466a0",
          600: "#50517f",
          700: "#3c3d60",
          800: "#2a2a42",
          900: "#181826",
        },
      },
      backgroundColor: {
        "pickans-light": "#3EAEFF",
        "pickans-darker": "#374052",
      },
      fontFamily: {
        sans: ["Inter", ...themes.fontFamily.sans],
      },
      textColor: {
        "pickans-darker": "#374052",
        skin: {
          base: withOpacity(`--color-text-base`),
          muted: withOpacity(`--color-text-muted`),
          inverted: withOpacity(`--color-text-inverted`),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity(`--color-fill`),
          "button-accent": withOpacity(`--color-button-accent`),
          "button-accent-hover": withOpacity(`--color-button-accent-hover`),
          "button-muted": withOpacity(`--color-button-muted`),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity(`--color-fill`),
        },
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
