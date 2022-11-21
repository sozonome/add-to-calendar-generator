import { Box } from "@chakra-ui/react";

import { maxWidthProps } from "lib/styles/customTheme";

import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minHeight="100vh" transition="0.4s ease-out">
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
