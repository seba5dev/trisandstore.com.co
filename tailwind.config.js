module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#71d446",
          secondary: "#008037",
          accent: "#606060",
          neutral: "#3D4451",
          "base-100": "#e5e1e6",
        },
      },
    ],
  },
};
