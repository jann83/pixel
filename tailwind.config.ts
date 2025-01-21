/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de incluir las rutas correctas de tu proyecto
  ],
  theme: {
    extend: {
      colors: {
        Orange: {
          100: "#ffe6cc",
          200: "#ffcc99",
          300: "#ffb366",
          400: "#ff9933",
          500: "#ff9505", // Color principal
          600: "#cc7604",
          700: "#995703",
          800: "#663802",
          900: "#331c01",
        },
        white: {
          500: "#ffffff"

        }

      },
    },
  },
  plugins: [],
};
