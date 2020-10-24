import { Box } from "@chakra-ui/core";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";
import { maxWidthProps } from "../../styles/customTheme";

const Layout = ({ children }) => {
  return (
    <Box backgroundColor="gray.100">
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
