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
        caPrimary: "#FC1C37",
        caSecondary: "#AD40E1",
        caTextSecondary: "#7A7A7A",
      },
    },
  },
  plugins: [],
};

//TODO: Poner esto backgroundImage: { waves: "url('/tu/url/a/waves.png')" } }

export default config;
