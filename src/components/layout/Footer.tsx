import { Link } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/react";
import { maxWidthProps } from "../../styles/customTheme";

const Footer = () => {
  return (
    <Flex
      as="footer"
      color="white"
      width="full"
      align="center"
      {...maxWidthProps}
    >
      <Text>
        2020 -{" "}
        <Link isExternal href="https://sznm.dev" fontWeight={500}>
          sznm.dev
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
