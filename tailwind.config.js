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
        beige: "#f2e8cf",
        blueScreen: "#415a77",
        brownLight: "#c9ada7",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
