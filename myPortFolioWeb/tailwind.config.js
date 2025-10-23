// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
//        backgroundImage: {
//       'skills-gradient': 'linear-gradient(38.73deg, rgba(239,68,68,0.15) 0%, rgba(239,68,68,0) 50%), linear-gradient(141.27deg, rgba(239,68,68,0) 50%, rgba(239,68,68,0.15) 80%)'
// ,
//       },
backgroundImage: {
        // 'gradient-custom': "linear-gradient(to left bottom, #ff3377, #7c4dff,#00d4ff)", Right color #7555ff its dark color
        'gradient-custom': "linear-gradient(to right, #00b4db, #0083b0);",
      },
    },
  },
  plugins: [],
};