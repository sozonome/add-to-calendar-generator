import { Box, Flex, Heading, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { maxWidthProps } from "../../styles/customTheme";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex as="header" width="full" align="center" {...maxWidthProps}>
      <Link href="/" passHref>
        <Box flexBasis="100%">
          <Heading
            as="h1"
            color={colorMode === "light" ? "blue.600" : "gray.900"}
            style={{ WebkitTextStroke: "1px white" }}
          >
            Add to Calendar
          </Heading>
          <Heading color="white">Generator</Heading>
        </Box>
      </Link>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
