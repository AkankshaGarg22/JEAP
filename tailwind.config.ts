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
        ArialRegular: ["arial-regular", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mb-curve" : "url(/assets/blog/mb-curve.svg)",
        "lg-curve" : "url(/assets/blog/header.svg)",
        "about-landing" : "url(/assets/blog/about/bg/1.jpg)",
        "focus-landing" : "url(/assets/blog/focus/bg/1.jpg)",
        "mb-about-curve" : "url(/assets/blog/about/curve/mb.png)",
        "xl-about-curve" : "url(/assets/blog/about/curve/xl.png)",
        "mb-partner-curve" : "url(/assets/blog/about/curve/mb-partner.png)",
        "impact-landing": "url(/assets/blog/impactimages/Impact.jpg)",
        "resources-landing": "url(/assets/blog/resources/resources.jpg)",
        "impact-curvexl":"url(/assets/blog/impactimages/curvexl.png)",
        "impact-curvemb":"url(/assets/blog/impactimages/curvemb.png)",     
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
      animation: {
        'slide-in': 'slideInFromLeft 1s ease-out forwards',
        'slide-out': 'slideOut 0.5s ease-out forwards'
      },
      keyframes: {
        changeImage: {
          '0%': { backgroundImage: 'url("/assets/blog/jpgs/header_image.webp")', },
          '25%': { backgroundImage: 'url("/assets/blog/jpgs/header_1.webp")' },
          '50%': { backgroundImage: 'url("/assets/blog/jpgs/header_2.webp")' },
          '75%': { backgroundImage: 'url("/assets/blog/jpgs/header_3.webp")' },
          '100%': { backgroundImage: 'url("/assets/blog/jpgs/header_image.webp")' },
        },
        slideInFromLeft : {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }
        },
        slideOut:{
          '0%':{
            opacity: "1",
          },
          '100%': {
            opacity:"0",
          }
        }

      },
      transitionProperty: {
        'bg-image': 'background-image',
      },
      screens: {
        'xs' : '390px',
        '3xl': '2560px',
        '4xl': '3455px'    
      }

    },
   
  },
  plugins: [],
};
export default config;
