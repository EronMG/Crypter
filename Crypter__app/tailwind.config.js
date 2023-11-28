/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
    extend: {
        colors: {
            primaryBlue: "#3772FF",
            primaryFiol: "#9757D7",
            primaryPink: "#EF466F",
            primaryGreen: "#45B26B",
            secondaryBlue: "#4BC9F0",
            secondaryWhite: "#E4D7CF",
            secondaryYellow: "#FFD166",
            secondaryPink: "#CDB4DB",
            neutrals900: "#141416",
            neutrals800: "#23262F",
            neutrals700: "#353945",
            neutrals600: "#777E90",
            neutrals500: "#B1B5C3",
            neutrals400: "#F4F5F6",
            neutrals300: "#E6E8EC",
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            sans: ['DM Sans', "sans-serif"],
        },
    },
    screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1020px",
        lg: "1440px",
        xl: "1700px",
    },
};
export const plugins = [];