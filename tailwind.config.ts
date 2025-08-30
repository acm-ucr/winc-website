/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        winc: {
          red: {
            100: "#ffcac0",
            200: "#fdbdc1",
            300: "#fb959b",
            400: "#FA7B82",
            500: "#af565b",
            600: "#7d3e41",
          },
          blue: {
            100: "#adbfe6",
            200: "#91a9dd",
            300: "#7694d5",
            400: "#5e76aa",
            500: "#3b4a6b",
          },
          yellow: {
            100: "#f6f3e4",
            200: "#FCDCA7",
          },
          brown: {
            100: "#22010a",
          },
          orange: {
            100: "#FFB388",
          },
          beige: {
            100: "#F7EEE3",
          },
          black: {
            100: "#203E4E",
          },
        },
      },
    },
  },
  plugins: [],
};
