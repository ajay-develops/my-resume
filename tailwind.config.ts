import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          blue: "#3B82F6",
          "blue-light": "#60A5FA",
          "blue-dark": "#2563EB",
        },
      },
    },
  },
  plugins: [],
};
export default config;

