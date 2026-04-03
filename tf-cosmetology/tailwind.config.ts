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
        primary: "#003434",
        "primary-container": "#004d4d",
        "on-primary": "#ffffff",
        "on-primary-container": "#80bdbc",
        "on-primary-fixed": "#002020",
        "on-primary-fixed-variant": "#044f4f",
        "primary-fixed": "#b0eeed",
        "primary-fixed-dim": "#94d1d1",
        "inverse-primary": "#94d1d1",

        secondary: "#615e58",
        "secondary-container": "#e7e2da",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#67645e",
        "secondary-fixed": "#e7e2da",
        "secondary-fixed-dim": "#cac6be",
        "on-secondary-fixed": "#1d1c17",
        "on-secondary-fixed-variant": "#494741",

        tertiary: "#3e2b00",
        "tertiary-container": "#5a4000",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#d3ac64",
        "on-tertiary-fixed": "#261900",
        "on-tertiary-fixed-variant": "#5d4201",
        "tertiary-fixed": "#ffdea5",
        "tertiary-fixed-dim": "#e9c176",

        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",

        background: "#fbf9f4",
        "on-background": "#1b1c19",
        surface: "#fbf9f4",
        "on-surface": "#1b1c19",
        "on-surface-variant": "#3f4848",
        "surface-variant": "#e4e2dd",
        "surface-bright": "#fbf9f4",
        "surface-dim": "#dbdad5",
        "surface-tint": "#296767",
        "surface-container": "#f0eee9",
        "surface-container-low": "#f5f3ee",
        "surface-container-high": "#eae8e3",
        "surface-container-highest": "#e4e2dd",
        "surface-container-lowest": "#ffffff",
        "inverse-surface": "#30312e",
        "inverse-on-surface": "#f2f1ec",

        outline: "#6f7978",
        "outline-variant": "#bfc8c8",
      },
      fontFamily: {
        headline: ["var(--font-newsreader)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        label: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.25rem",
        xl: "0.5rem",
        "2xl": "0.75rem",
        full: "9999px",
      },
      boxShadow: {
        editorial: "0 24px 40px -4px rgba(27, 28, 25, 0.06)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
