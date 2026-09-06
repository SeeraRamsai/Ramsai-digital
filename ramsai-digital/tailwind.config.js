/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1B2B",
          panel: "#0F2438",
          panel2: "#122C42",
          line: "#1E3A52",
        },
        coral: {
          DEFAULT: "#FF6B4A",
          soft: "#FF8A6B",
          dim: "#3A2420",
        },
        sunrise: {
          DEFAULT: "#F4B942",
          soft: "#FFD37A",
        },
        mist: {
          DEFAULT: "#F2F6F8",
          dim: "#93A6B8",
          faint: "#5E7488",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "70ch",
      },
      boxShadow: {
        lift: "0 20px 60px -20px rgba(0,0,0,0.45)",
      },
      keyframes: {
        heroIn: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "hero-in": "heroIn 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
