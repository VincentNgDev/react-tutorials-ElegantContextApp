/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      "elegant-context": "#edbf68",
      "cart-button": "#edbf68",
      "cart-button-text-color": "#201e1a",
      "product-card-bg-color": "#5f4e33",
      "product-card-title-color": "#fbd392",
      "product-card-price-color": "#d1b68b",
      "product-card-add2cart-button-bg-color": "#f4b115",
      "product-card-add2cart-button-text-color": "#201e1a",
      "product-card-add2cart-button-hover-bg-color": "#f5b744",
      "shop-title": "#a59b8b",
      "cart-dialog-bg-color": "#b59665",
      "cart-item-bg-color": "#d3b17b",
      "cart-title-text-color": "#4f412a",
    },
    height: {
      "500px": "500px",
      "100vh": "100vh",
    },
    width: {
      "300px": "300px",
    },
    maxHeight: {
      "100px": "100px",
    },
    minHeight: {
      "600px": "600px",
    },
    fontSize: {
      "2.5rem": "2,5rem",
    },
    boxShadow: {
      "product-card": "0 0 10px rgba(0, 0, 0, 0.2)",
      "cart-dialog": "0 0 10px rgba(0, 0, 0, 0.5)",
    },
    textShadow: {
      "elegant-context": "0 0 4px rgba(35, 34, 34, 0.4)",
    },
    padding: {
      "3/20": "15%",
    },
    borderRadius: {
      "5px": "5px",
    },
    gridTemplateColumns : {
      "shop": "repeat(auto-fit, minmax(20rem, 1fr))",
    },
    margin: {
      "0.15rem": "0.15rem",
    },
    animation: {
      "cart-dialog-open-animation": "fade-slide-in-from-top 0.3s ease-in-out",
    },
    keyframes: {
      "fade-slide-in-from-top": {
        "0%": {
          opacity: 0,
          transform: "translateY(-50px)"
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)"
        }
      },
    },
  },
};
export const plugins = [
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "text-shadow": (value) => ({
          textShadow: value,
        }),
      },
      { values: theme("textShadow") }
    );
  }),
];
