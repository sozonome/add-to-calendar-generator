import { Box, Flex, Heading } from "@chakra-ui/core";
import { maxWidthProps } from "../../styles/customTheme";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      backgroundColor="blue.600"
      // boxShadow={"0px 4px 14px 1px rgba(0,0,0,0.15);"}
    >
      <Box {...maxWidthProps} flexBasis="100%">
        <Heading
          as="h1"
          color="blue.600"
          style={{ WebkitTextStroke: "1px white" }}
        >
          Add to Calendar
        </Heading>
        <Heading color="white">Generator</Heading>
      </Box>
    </Flex>
  );
};

export default Header;
