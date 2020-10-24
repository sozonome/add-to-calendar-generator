import { Box, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/core";

const Form = () => {
  return (
    <Box>
      <FormControl marginBottom={4} isRequired>
        <FormLabel>Title</FormLabel>
        <Input type="text" />
      </FormControl>

      <FormControl marginBottom={4}>
        <FormLabel>Description</FormLabel>
        <Textarea />
      </FormControl>

      <FormControl marginBottom={4}>
        <FormLabel>Location</FormLabel>
        <Input type="text" />
      </FormControl>
    </Box>
  );
};

export default Form;
