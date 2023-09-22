/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        BgWhite: "#FAFAFF",
        BgDark: "#20262E",
        BgDark_200: "#183152",
        BgDark_100: "#183152",
        BgWhite_200: "#F1F6F9be",
        LightAccent: "hsl(0, 0%, 57%)",
        secondary: "#020202be",
      },
    },
  },
  plugins: [],
};
