/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["var(--font-urbanist)"],
      },
      colors: {
        winc: {
          black: "#203E4E",
          pink: "#FA6C5E",
          orange: "#FFB388",
          yellow: "#FCDCA7",
          beige: "#F7EEE3",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
