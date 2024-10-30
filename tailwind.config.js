/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust according to your project structure
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    container: {
      screen: {
        sm: "576px",
        md: "767px",
        lg: "1024px",
        xl: "1283px",
        "2xl": "1320px",
      },
    },

    extend: {
     
      colors: {
        'dark-black': "#171717",
        'half-black': "#344054",
        'half-gray': "#98A2B3",
         orange: "#FD853A",
      },

      backgroundImage: {
        'skillbg': "url('/images/skillbg.png')",
      },
      
    },
  },
  plugins: [],
};
