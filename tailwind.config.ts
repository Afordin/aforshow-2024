import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Same as unocss config */
        caTextSecondary: "#7A7A7A",
        caBackground: "#060606",
        caGray: "#737373",
        caDisabled: "#616161",
        caBorder: "#51546E",
        caBlurBoxes: "#E2276D",
        caWhite: "#FAFAFA",
        caBlack: "#0A0A0A",
        pBorder: "#262626",
        caPrimary: {
          50: "#fff0f2",
          100: "#ffdde1",
          200: "#ffc1c8",
          300: "#ff96a3",
          400: "#ff596d",
          500: "#ff2640",
          600: "#fc1c37",
          700: "#d4011a",
          800: "#af0519",
          900: "#900c1c",
          950: "#4f000a",
        },
        caSecondary: {
          50: "#fbf5fe",
          100: "#f5eafd",
          200: "#ebd3fb",
          300: "#deb0f7",
          400: "#cd82f0",
          500: "#ad40e1",
          600: "#9a32c7",
          700: "#8226a5",
          800: "#6b2187",
          900: "#5c206f",
          950: "#3a0949",
        },
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      fontSize: {
        hero: ['clamp(1.5rem, 5.5vw, 3.75rem)', '1.1'],
      },
    },
  },
  variants: {
    extend: {
      backgroundPosition: ["hover"],
    },
  },
  plugins: [],
};

//TODO: Poner esto backgroundImage: { waves: "url('/tu/url/a/waves.png')" } }

export default config;
