import { Box, Flex, Heading, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { maxWidthProps } from "../../styles/customTheme";
import AppMenu from "./AppMenu";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex as="header" width="full" align="center" {...maxWidthProps}>
      <Link href="/" passHref>
        <Box flexBasis="100%">
          <Heading fontSize={["2xl", "3xl"]}>
            Add to Calendar <br />
            Generator
          </Heading>
        </Box>
      </Link>

      <Flex marginLeft="auto">
        <ThemeToggle />
        <AppMenu />
      </Flex>
    </Flex>
  );
};

export default Header;
