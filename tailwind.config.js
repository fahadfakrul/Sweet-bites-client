/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rowdies: '"Rowdies", sans-serif',
        cormorant: '"Cormorant", serif',
      },
    },
  },
  plugins: [require("daisyui")],
};
