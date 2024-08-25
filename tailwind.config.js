/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueviolet: "#5010c0",
        "color-primary-cta": "#355dff",
        "state-bold-white": "#fff",
        "color-grey": "rgba(228, 228, 228, 0.1)",
        "state-dark-active": "#191b20",
        "state-light": "#808191",
        "miscellaneous-sidebar-shadow-drag-over": "rgba(0, 0, 0, 0.2)",
        gray: {
          "100": "#1d1c20",
          "200": "#0a090d",
        },
        "accent-accent-02": "#3f8cff",
        "color-dark-darkmode-bg": "#1f2128",
        black: "#000",
        "color-dark-card": "#242731",
      },
      spacing: {},
      fontFamily: {
        "button-small-bold-13": "Inter",
        "headline-h4-medium-32": "Poppins",
      },
      borderRadius: {
        "8xs": "5px",
        "12xs": "1px",
      },
    },
    fontSize: {
      smi: "13px",
      sm: "14px",
      "3xs": "10px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "37xl": "56px",
      "15xl": "34px",
      "26xl": "45px",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
