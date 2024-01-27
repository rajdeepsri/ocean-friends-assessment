/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0 20px rgba(255,255, 255, 0.01)",
          "0 0 20px rgba(255, 255,255, 0.01)",
        ],
      },
    },
  },
  plugins: [],
};
