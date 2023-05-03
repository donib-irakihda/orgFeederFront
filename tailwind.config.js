/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        success: "#92e3a9",
        success2: "#4ad295",
      },
    },
  },
  plugins: [require("daisyui")],
};
