module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
        sapphire: "#05668D",
        seaweed: "#028090",
        persian: "#00A896",
        meadow: "#02C39A",
        spring: "#F0F3BD",
        coral: "#E8817F",
        rose: "#C3727C",
        plum: "#8D5273",
        eminence: "#5A336E",
        violet: "#311F62",
        oxford: "#070B34",
      },
      fontFamily: {
        body: ["Mulish"],
        roboto: ["Roboto"],
        noto: ["Noto Sans JP"],
      },
    },
  },
  variants: {},
  plugins: [],
};
