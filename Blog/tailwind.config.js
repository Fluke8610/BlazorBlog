/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./js/**/*.{vue,js,ts,jsx,tsx}",
        "./Pages/**/*.razor",
        "./Components/**/*.razor"
    ],
    theme: {
        screens: {
            'xxs': '325px',
            'xs': '475px',
            'sm': '768px',
            'md': '1024px',
            'lg': '1440px',
            'xl': '1660px',
            'xxl': '1920px',
            'xxxl': '2560px'
        },
        extend: {},
  },
  plugins: [],
}

