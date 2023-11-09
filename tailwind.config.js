const withMT = require("@material-tailwind/html/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Poppins, sans-serif',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
});