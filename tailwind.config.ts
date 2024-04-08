import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        CompasseRegular: ["compasse-regular", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mb-curve" : "url(/assets/blog/mb-curve.svg)",
        "lg-curve" : "url(/assets/blog/header.svg)",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      keyframes: {
        changeImage: {
          '0%': { backgroundImage: 'url("/assets/blog/header_image.png")' },
          '25%': { backgroundImage: 'url("/assets/blog/AK402864-145979.jpg")' },
          '50%': { backgroundImage: 'url("/assets/blog/Guinea_Hawkey_ebola_76657.jpg")' },
          '75%': { backgroundImage: 'url("/assets/blog/WHO-PANOS-PAKISTAN-47.JPG")' },
          '100%': { backgroundImage: 'url("/assets/blog/header_image.png")' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
