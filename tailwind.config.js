/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      blur: {
        xl: '25px',
      },
      boxShadow: {
        'white': '0 0 10px 0 rgba(255, 255, 255, 0.75)',
        'black': '0 0 30px 0 rgba(0, 0, 0, 0.25)',
      }
    },
    fontSize: {
      base: '18px',
      '5xl': '60px',
      '4xl': '40px',
    }
  },
  plugins: [],
}
