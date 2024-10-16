/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'media',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-blue': '#116dff',
        'primary': '#1D67CD'
      },
      fontSize: {
        'heading': '42px', // Add custom font size
      },
      lineHeight: {
        'extra-loose': '0.9em', // Custom line height
      },
      letterSpacing:{
        'small': '-0.05em'
      },
      fontFamily: {
        'poppins': ['poppins-semibold', 'poppins', 'sans-serif'], // Custom font family
      },
      borderColor: {
        'blue': '#1D67CD', // Custom border color 
      },
    },
  },
  plugins: [],
};
