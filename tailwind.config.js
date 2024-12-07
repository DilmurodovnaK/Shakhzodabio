/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            '2xl': { 'max': '1485px' },
            'xl': { 'max': '1186px' },
            'lg': { 'max': '950px' },
            'md': { 'max': '790px' },
            'nb': { 'max': '706px' },
            'sm': { 'max': '654px' },
            'ms': { 'max': '480px' },
            'mm': { 'max': '390px' },

        },
        extend: {},
    },
    plugins: [],
}