import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
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
});

export const maxWidthProps = {
  margin: "0 auto",
  maxWidth: 800,
  padding: 8,
};

export default customTheme;
