/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        textColor: {
            primary: "var(--text-primary)",
            secondary: "var(--text-secondary)",
            dark: "var(--text-dark)"
        }
      },
    },
    plugins: [],
  };
  