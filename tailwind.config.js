/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      tablet: "999px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "home-section":
          "linear-gradient(to right bottom, #000000bf, #000000bf) , url('./Images/Main_page_Background_image.jpg')",
        "About-us-section":
          "linear-gradient(to right bottom, #000000bf, #000000bf) , url('./Images/About-us-main-image.jpg')",
      },
      gradientColorStops: {
        transBlack: "rgba(0, 0, 0, 0.397)",
      },
    },
  },
  plugins: [],
};
