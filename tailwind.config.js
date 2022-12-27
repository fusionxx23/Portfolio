/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['"Poppins"', "sans-serif"],
                chivo: [`'Chivo Mono'`, `monospace`],
            },
            transitionProperty: {
                up: "opacity, transform",
            },
            spacing: {
                '100': '25rem',
                '104': '26rem',
                '108': '27rem',
                '112': '28rem',
                '116': '29rem',
                '120': '30rem',
                '124': '31rem',
            },
            colors: {
                dark: {
                    100: "#000c18",
                    200: "#060621",
                    300: "#0a192f",
                },
                blue: {
                    100: "#082050",
                    200: "#051336",
                },
                light: {
                    100: "#c285ff",
                    200: "#ccd6f6",
                    300: "#8892b0",
                    400: "#7c87a4",
                },
            },
            transitionDelay: {
                1200: '1200ms',
                1400: '1400ms',
                3000: "3000ms",
            },
        },
    },
    plugins: [],
};