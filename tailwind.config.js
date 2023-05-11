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
        orangeLight: "#f4a261",
        beige: "#e3d5ca",
        blueScreen: "#415a77",
        brownLight: "#a98467",
        darkGreen: "#6b9080",
        lightGray: "#E3DBDB",
      },
      dropShadow: {
        "2xl": "0 0px 10px #ffafcc",
        "3xl": "0 0px 10px white",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
