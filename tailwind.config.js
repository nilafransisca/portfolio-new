/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          light: "#fff0f3",
          accent: "#ed99a7",
          soft: "#ffc0cb",
          hot: "#ff69b4",
          dark: "#f4b6c2",
        },
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-reverse": "float 8s ease-in-out infinite reverse",
        fadeInUp: "fadeInUp 1s ease",
        fadeInUpSlow: "fadeInUp 1.2s ease",
      },
    },
  },
  plugins: [],
}
