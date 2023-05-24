/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-primary": "rgba(243, 244, 246, 1)",
        "blue-primary": "rgba(17, 24, 39, 1)",
      },
      fontSize: {
        logo: "clamp(1.75rem, 5vw, 3rem)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        rotate: "rotate 6s linear infinite",
        tilt: "tilt 5s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": {
            transform: "rotate(0)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
