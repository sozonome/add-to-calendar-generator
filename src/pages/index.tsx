import { Box, Heading, Image, Text } from "@chakra-ui/core";
import Form from "../components/Form";

const Home = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Heading color="#444444" as="h2" fontSize="2xl">
          Hello
        </Heading>
        <Box color="#888888">
          <Text fontSize="0.9rem">Generate an "Add to Calendar" link.</Text>
          <Text fontSize="0.7rem">
            Currently only support Google Calendar ("Add to Google Calendar").
          </Text>
        </Box>
      </Box>

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
