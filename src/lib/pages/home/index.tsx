import { Box, Heading, Image, Text } from "@chakra-ui/react";

import Form from "lib/components/Form";

const Home = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Heading as="h2" fontSize="2xl">
          Hello
        </Heading>
        <Box>
          <Text fontSize="0.9rem">
            Generate an &quot;Add to Calendar&quot; link.
          </Text>
          <Text fontSize="0.7rem">
            Currently only support Google Calendar (&quot;Add to Google
            Calendar&quot;).
          </Text>
        </Box>
      </Box>

      <Box display={["block", "block", "flex"]}>
        <Box flexBasis="50%">
          <Box maxWidth={["100%", "60%", "80%"]}>
            <Image src="/Events-bro.svg" />
          </Box>
        </Box>
        <Box flexBasis="50%">
          <Form />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
