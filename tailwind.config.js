/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Hanken Grotesk'"],
      },
      boxShadow: {
        "3xl": "10px 10px 50px -25px hsl(241, 81%, 54%)",
      },
    },
    colors: {
      "light-red": "hsl(0, 100%, 67%)",
      "orangey-yellow": "hsl(39, 100%, 56%)",
      "green-teal": "hsl(166, 100%, 37%)",
      "cobalt-blue": "hsl(234, 85%, 45%)",

      "red-transparent": "hsl(0, 100%, 67%, 0.06)",
      "orange-transparent": "hsl(39, 100%, 56%, 0.06)",
      "green-transparent": "hsl(166, 100%, 37%, 0.06)",
      "blue-transparent": "hsl(234, 85%, 45%, 0.06)",
      "gray-transparent": "hsl(224, 30%, 27%, 0.4)",

      "light-slate-blue": "hsl(252, 100%, 67%)",
      "light-royal-blue": "hsl(241, 81%, 54%)",

      "violet-blue": "hsla(256, 72%, 46%, 1)",
      "persian-blue": "hsla(241, 72%, 46%, 0)",

      white: "hsl(0, 0%, 100%)",
      "pale-blue": "hsl(221, 100%, 96%)",
      "light-lavender": "hsl(241, 100%, 89%)",
      "dark-gray-blue": "hsl(224, 30%, 27%)",
    },
  },
  plugins: [],
};
