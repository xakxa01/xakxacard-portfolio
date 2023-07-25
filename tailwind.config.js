/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      nunito: "var(--nunito)",
      inter: "var(--inter)",
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        arrowLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-10px)" },
        },
        arrowDown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
        tada: {
          "0%": { transform: "scale(1)" },
          "10%, 20%": { transform: "scale(0.9) rotate(-3deg)" },
          "30%, 50%, 70%, 90%": { transform: "scale(1.1) rotate(3deg)" },
          "40%, 60%, 80%": { transform: "scale(1.1) rotate(-3deg)" },
          "100%": { transform: "scale(1) rotate(0)" },
        },
        opacity: {
          "0%": { opacity: "1", visibility: "visible" },
          "50%": { opacity: "0", visibility: "hidden" },
        },
        terminal: {
          "0%": { background: "transparent" },
          "100%": { background: "#ffe754" },
        },
      },
      animation: {
        arrowLeft: "arrowLeft 0.5s ease-in-out infinite alternate",
        arrowDown: "arrowDown 0.5s ease-in-out infinite alternate",
        tada: "tada 1s ease-in-out infinite",
        opacity: "opacity 3s ease-in-out alternate",
        terminal: "terminal 0.5s ease-in-out infinite alternate",
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      colors: {
        azul: "#0099ff",
        celeste: "#08d9d6",
        negro: "#222831",
        negro2: "#252b34",
        negro3: "#363c45",
        blanco: "#f5f5f5",
        gris: "#ebebeb",
        amarillo: "#ffe754",
        verde: "#00DFA2",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },
      backgroundImage: {
        "big-logo": "url('/assets/svg/bigLogo.svg')",
        "big-blob": "url('/assets/svg/blob decoration.svg')",
        "black-logo": "url('/assets/svg/black.svg')",
        "arrow-down": "url('/assets/svg/bxs-down-arrow.svg')",
        "arrow-left": "url('/assets/svg/arrow-left.svg')",
        "gray-logo": "url('/assets/svg/gris.svg')",
        myPhoto: "url('/assets/img/myPhoto.jpg')",
        helpmyteam: "url('/assets/img/helpmyteam.jpg')",
      },
    },
  },
  plugins: [],
};
