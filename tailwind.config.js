module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          cta: "hsl(356, 100%, 66%)",
          ctabg: "hsl(355, 100%, 74%)",
          headings: "hsl(208, 49%, 24%)",
        },
        neutral: {
          footer: "hsl(240, 2%, 79%)",
          footerbg: "hsl(240, 10%, 16%)",
          body: "hsl(207, 13%, 34%)",
        },
        grad: {
          nav100: "hsl(13, 100%, 72%)",
          nav200: "hsl(353, 100%, 62%)",
          body100: " hsl(237, 17%, 21%)",
          body200: "hsl(237, 23%, 32%)",
        },
      },
      fontFamily: {
        overpass: ["Overpass"],
        ubuntu: ["Ubuntu"],
      },
      borderRadius: {
        "4xl": "4.5rem",
        "5xl": "6rem",
      },
      backgroundImage: {
        headerbg:
          "linear-gradient(to left top,hsl(353, 100%, 62%,10%),hsl(13, 100%, 72%,10%)),url('/images/bg-pattern-intro-desktop.svg')",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
