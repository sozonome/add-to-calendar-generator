import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/core";
import { useFormik } from "formik";
import { useState } from "react";

import { GOOGLE_CAL_TEMPLATE_LINK } from "../constants/googlecal";

type FormInput = {
  title: string;
  description?: string;
  location?: string;
  start?: string;
  end?: string;
};

const Form = () => {
  const [link, setLink] = useState<string>();

  const { values, handleChange, handleSubmit } = useFormik<FormInput>({
    initialValues: {
      title: "",
      description: "",
      location: "",
      start: new Date().toISOString(),
      end: new Date().toISOString(),
    },
    onSubmit: (formValues: FormInput) => {
      const { title, description, location, start, end } = formValues;

      setLink(
        `${GOOGLE_CAL_TEMPLATE_LINK}${title && "&text=" + title}${
          description && "&details=" + description
        }${location && "&location=" + location}&dates=${new Date(start)
          .toISOString()
          .replace(/[-//:]+/g, "")}%2F${new Date(end)
          .toISOString()
          .replace(/[-//:]+/g, "")}`
      );
    },
  });

  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
  };

  const { title, description, location, start, end } = values;

  return (
    <Box>
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
            type="datetime-local"
            onChange={handleChange}
          />
        </FormControl>

        <FormControl marginBottom={4}>
          <FormLabel>End</FormLabel>
          <Input
            name="end"
            value={end}
            type="datetime-local"
            onChange={handleChange}
          />
        </FormControl>

        <Button onClick={handleSubmit} isFullWidth variantColor="green">
          Generate
        </Button>
      </Box>

      {link && (
        <Box marginY={4}>
          <Textarea value={link} isReadOnly marginBottom={2} />
          <Button onClick={handleCopyLink} isFullWidth variantColor="blue">
            Copy Link
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Form;
