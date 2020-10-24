import { Flex, Box, Heading, Image } from "@chakra-ui/core";
import Form from "../components/Form";

const Home = () => {
  return (
    <Box>
      <Heading as="h2" fontSize="3xl" marginBottom={8}>
        Hello
      </Heading>
      <Box display={["block", "block", "flex"]}>
        <Box flexBasis="50%">
          <Image src={"/Events-bro.svg"} maxWidth={["100%", "60%", "80%"]} />
        </Box>
        <Box flexBasis="50%">
          <Form />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
