import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    body: "Rubik, sans-serif",
    heading: "Rubik, serif",
  },
});

export const maxWidthProps = {
  margin: "0 auto",
  maxWidth: 800,
  padding: 8,
};

export default customTheme;
