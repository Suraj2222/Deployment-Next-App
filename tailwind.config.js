/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      laptop: "1024pxpx",
      tablet: "768pxpx",
      mobile: "512px",
    },
    boxShadow: {
      sm: "1px 2px 8px 0px rgba(11,10,55,0.15)",
      md: "1px 3px 12px 0px rgba(11,10,55,0.2)",
      lg: "2px 4px 16px 0px rgba(18,16,99,0.3)",
    },
    fontFamily: {
      inter: "Inter,sans-serif",
    },
    fontSize: {
      xs: ["12px", { lineHeight: "20px", letterSpacing: "-0.03em" }],
      sm: ["14px", { lineHeight: "20px", letterSpacing: "-0.03em" }],
      sm: ["16px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
      lg: ["18px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
      xl: ["20px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
      "2xl": ["24px", { lineHeight: "32px", letterSpacing: "-0.032em" }],
      "3xl": ["32px", { lineHeight: "48px", letterSpacing: "-0.032em" }],
      "4xl": ["48px", { lineHeight: "64px", letterSpacing: "-0.032em" }],
      "5xl": ["56px", { lineHeight: "80px", letterSpacing: "-0.032em" }],
    },
    extend: {
      colors: {
        primary: "#1c4ceb", //blue
        "primary-dark": "#1034ad", //darkBlue
      },
    },
  },
  plugins: [],
};
