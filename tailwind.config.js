const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // margin: {
      //   body: "36px",
      // },
      screens: {
        xxsm: "350px",
        xsm: "425px",
        mobile: "425px",
        sm: "640px",
        tablet: "640px",
        md: "768px",
        lg: "1024px",
        laptop: "1024px",
        xl: "1440px",
        desktop: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'white-smoke': 'var(--white-smoke)',
        'linen': 'var(--linen)',
        'mint-cream': 'var(--mint-cream)',
        'ivory-blush': 'var(--ivory-blush)',
        'light-pink': 'var(--light-pink)',
        'soft-blue': 'var(--soft-blue)',
      },
      // extend: {
      //   margin: {
      //     'body-xxsm': '16px',   // Very small screens
      //     'body-xsm': '24px',    // Extra small screens
      //     'body-sm': '28px',     // Small screens
      //     'body-md': '32px',     // Medium screens
      //     'body-lg': '36px',     // Large screens
      //     'body-xl': '40px',     // Extra large screens
      //     'body-2xl': '48px',    // 2XL screens
      //   },
      // },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addVariablesForColors(addBase, theme);
    },
  ],
};

function addVariablesForColors(addBase, theme) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': {
          '--white-smoke': '#F5F5F5',
          '--linen': '#FAF0E6',
          '--mint-cream': '#F5FFFA',
          '--ivory-blush': '#F6F8F8',
          '--light-pink': '#FFEBEB',
          '--soft-blue': '#F0F4F8',
        },
  });
}
