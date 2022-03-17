import { Box, useColorMode } from "@chakra-ui/react";

import { maxWidthProps } from "styles/customTheme";

import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      backgroundColor={colorMode === "light" ? "gray.50" : "gray.900"}
      minHeight="100vh"
      transition="0.4s ease-out"
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
