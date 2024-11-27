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
        colors: {
            'space-cadet': '#2b2d42',
            'cool-gray': '#8d99ae',
            'anti-flash-white': '#edf2f4',
            'red-pantone': '#ef233c',
            'fire-engine-red': '#d90429',
            'white': '#ffffff',
            'black' : '#000000',
            'eggshell-blue': '#bfd7ed',
            'light-blue': '#60a3d9',
            'mid-blue': '#0074b7',
            'dark-blue': '#003b73',
            'off-white': '#fffbfb'
        },
        extend: {},
  },
  plugins: [],
}

