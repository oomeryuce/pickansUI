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
        "theme-base": {
          50: "#f4f7fa", // body bg color - light theme
          100: "#e4e7eb", // border color - light theme
          200: "#f3f4f6", // text color - dark theme
          300: "#d1d5da", // darken text color - dark theme
          400: "#ebeff5", // hover color - light theme
          500: "#5272a3", // bluish text color - dark theme
          600: "#50517f",
          700: "#374151", // border color - hover color - dark theme
          800: "#1f2937", // body bg color - dark theme
          900: "#111827", // div bg color - dark theme
        },
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
        "pickans-light": "#3EAEFF",
        "pickans-darker": "#374052",
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

  daisyui: {
    themes: [
      {
        light: {
          primary: "#3EAEFF",
          "primary-focus": "#ebeff5",
          "primary-content": "#ffffff",
          secondary: "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#e4e7eb",
          "base-content": "#1f2937",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
        dark: {
          primary: "#3EAEFF",
          "primary-focus": "#ebeff5",
          "primary-content": "#ffffff",
          secondary: "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#111827",
          "base-200": "#1f2937",
          "base-300": "#374151",
          "base-content": "#f3f4f6",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },

  plugins: [
    require("@tailwindcss/typography"),
    // require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
};
