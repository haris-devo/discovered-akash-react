/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-new":
          "linear-gradient(to bottom, rgba(57, 191, 249, 1), rgba(67, 136, 238, 1))",
        "gradient-old":
          "linear-gradient(to bottom, rgba(67, 136, 238, 1), rgba(57, 191, 249, 1))",
      },
      fontFamily: {
        // inter font family
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
