/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", "ui-sans-serif", "system-ui"],
      },
      colors: {
        midnight: "#07182f",
        ocean: "#0e4d92",
        azure: "#3aa7ff",
        cyanMist: "#dff8ff",
        cloud: "#f4f8ff",
      },
      boxShadow: {
        premium: "0 30px 90px rgba(20, 73, 128, 0.18)",
        glass: "0 24px 70px rgba(7, 24, 47, 0.12)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        glow: "glow 8s ease-in-out infinite alternate",
        slideUp: "slideUp 720ms cubic-bezier(.2,.8,.2,1) both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        glow: {
          "0%": { transform: "translate3d(-4%, 0, 0) scale(1)", opacity: "0.72" },
          "100%": { transform: "translate3d(5%, -3%, 0) scale(1.08)", opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
