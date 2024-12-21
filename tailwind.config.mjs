/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1520px",
      },
      fontFamily: {
        Pinar: ["var(--font-pinar)"],
        IranYekan: ["var(--font-iranyekan)"],
      },
    },
  },
  plugins: [],
};
