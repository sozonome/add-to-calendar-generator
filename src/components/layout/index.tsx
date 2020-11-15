import { Box, useColorMode } from "@chakra-ui/react";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";
import { maxWidthProps } from "../../styles/customTheme";

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      backgroundColor={colorMode === "light" ? "blue.600" : "gray.800"}
      minHeight="100vh"
    >
      <Meta />
      <Header />
      <Box>
        <Box as="main" marginY={22} {...maxWidthProps}>
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
