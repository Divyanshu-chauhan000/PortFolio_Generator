/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D2E32", // Dark Gray-Black
        secondary: "#4A90E2", // Vibrant Blue
        accent: "#FF6347", // Warm Yellow-Orange
        background: "#F8F9FA", // Soft White
        text: "#1A1A1A", // Deep Black
        lightpuple: "#E9A5F1",
        peach: '#FED2E2', // Soft peach color
        
      },
    },
  },
  plugins: [],
}

