/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-planA":
          "linear-gradient(to bottom right, #7A42E8 0%, #4D45D6 65%, #4D45D6 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
