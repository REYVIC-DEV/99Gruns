/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/**/*.liquid",
    "./templates/**/*.liquid",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./assets/**/*.js",
    "./assets/**/*.css",
    "./config/**/*.json",
  ],

  prefix: "tw-",

  corePlugins: {
    preflight: false,
  },

  theme: {
    extend: {
      colors: {
        green: "var(--green)",
        "lt-green": "var(--lt-green)",
        "dk-green": "var(--dk-green)",
        "green-tint": "var(--green-tint)",
        yellow: "var(--yellow)",
        "lt-yellow": "var(--lt-yellow)",
        "yellow-tint-1": "var(--yellow-tint-1)",
        "yellow-tint-2": "var(--yellow-tint-2)",
        white: "var(--white)",
        grey: "var(--grey)",
        "lt-grey": "var(--lt-grey)",
        "dk-grey": "var(--dk-grey)",
        red: "var(--red)",
      },
      fontFamily: {
        "dm-sans": "var(--dmsans)",
        "verona-serial": "var(--veronaserial)",
      },
    },
  },

  plugins: [],
};
