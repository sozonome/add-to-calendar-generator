import { Link } from "@chakra-ui/core";
import { Flex, Text } from "@chakra-ui/core";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
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
