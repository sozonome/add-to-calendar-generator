import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/core";
import { useFormik } from "formik";

type FormInput = {
  title: string;
  description?: string;
  location?: string;
  start?: string;
  end?: string;
};

const Form = () => {
  const { values, handleChange, handleSubmit } = useFormik<FormInput>({
    initialValues: {
      title: "",
      description: "",
      location: "",
      start: "",
      end: "",
    },
    onSubmit: () => {},
  });

  const { title, description, location, start, end } = values;

  return (
    <Box>
      {console.log(values)}
      <Box marginBottom={6}>
        <Heading size="lg" marginBottom={2}>
          Info
        </Heading>

        <FormControl marginBottom={4} isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            name="title"
            value={title}
            onChange={handleChange}
            type="text"
          />
        </FormControl>

        <FormControl marginBottom={4}>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={description}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl marginBottom={4}>
          <FormLabel>Location</FormLabel>
          <Input
            name="location"
            value={location}
            onChange={handleChange}
            type="text"
          />
        </FormControl>
      </Box>

      <Box marginBottom={8}>
        <Heading size="lg" marginBottom={2}>
          Time
        </Heading>

        <FormControl marginBottom={4}>
          <FormLabel>Start</FormLabel>
          <Input
            name="start"
            value={start}
            onChange={handleChange}
            type="datetime-local"
          />
        </FormControl>

        <FormControl marginBottom={4}>
          <FormLabel>End</FormLabel>
          <Input
            name="end"
            value={end}
            onChange={handleChange}
            type="datetime-local"
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default Form;
