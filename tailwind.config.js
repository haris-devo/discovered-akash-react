/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-new":
          "linear-gradient(to bottom, rgba(57, 191, 249, 1), rgba(67, 136, 238, 1))",
        "gradient-ltr":
          " linear-gradient(272.89deg, #2360FC 0%, #49BCFC 50.52%, #1ED6E2 100%)",
      },
      fontFamily: {
        // inter font family
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
