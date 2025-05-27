// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//    extend: {
//       colors: {
//        primaryColor: '#2aa8d2', // apka custom color name
//       },
//     },
//   },
//   plugins: [],
// }
// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: '#00c5bb', // apka custom color name
      },
    },
  },
  plugins: [],
};
