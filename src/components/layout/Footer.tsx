import { Box, Link } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/react";
import { isNullOrUndefined } from "util";
import { maxWidthProps } from "../../styles/customTheme";
import Badges from "./Badges";

const Footer = () => {
  return (
    <Flex
      as="footer"
      wrap="wrap"
      textAlign={["center", "inherit"]}
      width="full"
      align="center"
      {...maxWidthProps}
    >
      <Text flexBasis={["100%", "50%"]}>
        2020 -{" "}
        <Link isExternal href="https://sznm.dev" fontWeight={500}>
          sznm.dev
        </Link>
      </Text>

      <Box
        marginY={2}
        flexBasis={["100%", "50%"]}
        marginLeft="auto"
        textAlign="center"
      >
        <Badges />
      </Box>
    </Flex>
  );
};

export default Footer;
