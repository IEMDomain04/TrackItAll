/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        HeaderRowColor: '#626E7A',
        AddColor: '#007BFF',
      },
      fontSize: {
        h1: '30px',
        h2: '20px',
        small: '12px'
      }
    },
  },
  plugins: [],
}