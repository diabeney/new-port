/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BgWhite: "#F1F6F9",
        BgDark: "#040D12",
        LightAccent: "hsl(0, 0%, 67%)",
        secondary: "#020202be",
      },
    },
  },
  plugins: [],
};
