/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "custom-black": "#1C1427",
        "custom-grey" : "#40394A",
        "custom-green": "#7ECA9C",
        "custom-green-light": "#CCFFBD"
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"]
    },
    container: {
      center: true,
      padding: '1rem', // horizontal padding
      screens:{
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  
  plugins: [require('tailwind-scrollbar')],
}
