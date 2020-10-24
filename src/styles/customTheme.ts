import { theme, DefaultTheme } from "@chakra-ui/core";

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    /** Example */
    body: "Rubik, sans-serif",
    heading: "Rubik, serif",
  },
  colors: {
    ...theme.colors,
    /** Example */
    // teal: {
    //   ...theme.colors.teal,
    //   700: "#005661",
    //   500: "#00838e",
    //   300: "#4fb3be",
    // },
  },
};

export default customTheme;
