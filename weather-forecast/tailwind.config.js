/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      violet: {
        250: "#BCC3FF",
        450: "#8E9AFF",
      },
    },
    extend: {},
  },
  plugins: [],
};
