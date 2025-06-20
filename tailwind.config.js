// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  //   content: [
  //     "./app/**/*.{ts,tsx,js,jsx}",
  //     "./components/**/*.{ts,tsx,js,jsx}",
  //     "./node_modules/@shadcn/ui/**/*.{ts,tsx,js,jsx}", // optional: if using shadcn/ui
  //   ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto-condensed)"],
        inter: ["var(--font-inter)"],
      },
      boxShadow: {
        custom: "0px 4px 25px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
