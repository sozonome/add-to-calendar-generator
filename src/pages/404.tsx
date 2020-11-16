import {
  Box,
  Button,
  Heading,
  Text,
  Link as ChakraLink,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Page404 = () => {
  const { colorMode } = useColorMode();

  return (
    <Box color="white">
      <Box width={["100%", "70%", "60%", "60%"]} margin="0 auto">
        <Image unsized src="/404 Error-pana.svg" />
      </Box>
      <Text textAlign="center" fontSize="xs">
        <ChakraLink href="https://stories.freepik.com/web" isExternal>
          Illustration by Freepik Stories
        </ChakraLink>
      </Text>

      <Box marginY={4}>
        <Heading textAlign="center">Page not found.</Heading>

        <Box textAlign="center" marginY={2}>
          <Text>No worries!</Text>
          <Link href="/" passHref>
            <Button
              backgroundColor={colorMode === "light" ? "cyan.600" : "teal.500"}
            >
              Let's Head Back
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Page404;
