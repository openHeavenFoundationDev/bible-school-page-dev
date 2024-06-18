import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        22: "5.5rem",
        25: "6.25rem",
        30: "7.5rem",
        38: "9.5rem",
        41: "10.25rem",
        42: "10.5rem",
        47: "11.75rem",
        53: "13.25rem",
        54: "13.5rem",
        59: "14.75rem",
        60: "15rem",
        68: "17rem",
        70: "17.5rem",
        114: "28.5rem",
        120: "30rem",
        122: "30.5rem",
        124: "31rem",
        128: "32rem",
        130: "32.5rem",
        132: "33rem",
        145: "36.25rem",
        200: "50rem",
        228: "57rem",
      },
    },
  },
  plugins: [],
};
export default config;
