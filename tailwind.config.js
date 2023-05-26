/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["IBM Plex Mono", "Menlo", "monospace"],
      body: ["IBM Plex Mono", "Menlo", "monospace"],
    },
    extend: {
      screens: {
        sm: "640px",
        md: "760px",
        lg: "1400px",
      },
      colors: {
        lightBeige: "#fdf0d5",
        brownLight: "#a98467",
        darkGreen: "#3c5233",
        lightGray: "#E3DBDB",
        lightPurple: "#b5838d",
        modalPurple: "#c9b1bd",
      },
      dropShadow: {
        "2xl": "0 0px 10px #b5838d",
        "3xl": "0 0px 10px white",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

// lightGreen: "#DED3A6",
