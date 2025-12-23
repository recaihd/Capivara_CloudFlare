/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        primary: {
          500: "#ff4b4b",
          600: "#e63946",
          700: "#b51f2b"
        },
        secondary: {
          500: "#fbbf24"
        }
      },
      boxShadow: {
        "neon-red": "0 0 25px rgba(248, 113, 113, 0.8)"
      },
      backgroundImage: {
        "mc-pattern":
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/fundo_site2.gif')"
      }
    }
  },
  plugins: []
};


