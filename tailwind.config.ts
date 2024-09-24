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
      colors: {
        davSky: "#C3EBFA",
        davSkyLight: "#EDF9FD",
        davPurple: "#CFCEFF",
        davPurpleLight: "#F1F0FF",
        davYellow: "#FAE27C",
        davYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;
