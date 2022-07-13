module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        navbarBg: "url('../images/navbar-bg.png')",
        sectionImageBg: "url('assets/images/sectionImageBg.png')",
        communityIconBg: "url('../images/communityIconBg.png')",
      },
      colors: {
        bgPrimary: "#0A626D",
        bgPrimaryDark: "#095963",
        bgPopup: "#337A83",
      },
      fontFamily: {
        "erica-one": ["Erica One", "cursive"],
        enriqueta: ["Enriqueta", "serif"],
        inika: ["Inika", "serif"],
      },
    },
  },
  plugins: [],
};
