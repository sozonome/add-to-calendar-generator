import {
  Box,
  Button,
  Code,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/core";
import { FormikErrors, useFormik } from "formik";
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
  const [embedButton, setEmbedButton] = useState<string>();

  const [isEditMode, setIsEditMode] = useState<boolean>(true);
  const [isShowingEmbed, setIsShowingEmbed] = useState<boolean>(false);

  const { values, handleChange, handleSubmit, errors } = useFormik<FormInput>({
    initialValues: {
      title: "",
      description: "",
      location: "",
      start:
        new Date().toISOString().substring(0, 10) +
        "T" +
        new Date().toLocaleTimeString().substring(0, 5),
      end:
        new Date().toISOString().substring(0, 10) +
        "T" +
        new Date().toLocaleTimeString().substring(0, 5),
    },
    validate: (formValues: FormInput) => {
      const FormErrors: FormikErrors<FormInput> = {};

      if (new Date(formValues.end) < new Date(formValues.start)) {
        FormErrors.end =
          "End Date / Time can't be earlier than Start Date / Time";
      }

      return FormErrors;
    },
    onSubmit: (formValues: FormInput) => {
      setLink(
        `${GOOGLE_CAL_TEMPLATE_LINK}${
          formValues.title && "&text=" + encodeURI(formValues.title)
        }${
          formValues.description &&
          "&details=" + encodeURI(formValues.description)
        }${
          formValues.location && "&location=" + encodeURI(formValues.location)
        }&dates=${new Date(formValues.start)
          .toISOString()
          .replace(/[-//:]+/g, "")}%2F${new Date(formValues.end)
          .toISOString()
          .replace(/[-//:]+/g, "")}`
      );

      setIsEditMode(false);
      setIsShowingEmbed(false);
    },
  });

  const backToEditMode = () => {
    setIsEditMode(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
  };

  const generateEmbedButton = () => {
    setEmbedButton(
      `<a 
      href="${link}" 
      target="_blank" 
      rel="noopener noreferrer"
      style="
        border: 1px solid black;
        padding: 6px;
        border-radius: 6px;
        text-decoration: none;
        color: white;
        font-weight: 400;
        background-color: black;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
          Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      ">Add to Google Calendar</a>`
    );
    setIsShowingEmbed(true);
  };

  const handleCopyEmbedButton = () => {
    navigator.clipboard.writeText(embedButton);
  };

  const { title, description, location, start, end } = values;

  return (
    <Box>
      {isEditMode && (
        <>
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
                placeholder="Event Title"
              />
            </FormControl>

            <FormControl marginBottom={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Describe your event"
              />
            </FormControl>

            <FormControl marginBottom={4}>
              <FormLabel>Location</FormLabel>
              <Input
                name="location"
                value={location}
                onChange={handleChange}
                type="text"
                placeholder="Event Location"
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
                isInvalid={errors.end ? true : false}
                errorBorderColor="crimson"
              />
              {errors.end && <FormHelperText>{errors.end}</FormHelperText>}
            </FormControl>

            <Button
              isDisabled={Object.keys(errors).length ? true : false}
              onClick={handleSubmit}
              isFullWidth
              variantColor="green"
            >
              Generate
            </Button>
          </Box>
        </>
      )}

      {link && !isEditMode && (
        <Box marginY={4}>
          <Button
            onClick={backToEditMode}
            marginBottom={2}
            leftIcon={"arrow-back"}
          >
            Back
          </Button>

          <Box>
            <Textarea
              minHeight={"6rem"}
              value={link}
              isReadOnly
              marginBottom={2}
              fontSize={"0.9rem"}
            />
            <Button
              onClick={handleCopyLink}
              isFullWidth
              variantColor="blue"
              marginBottom={2}
            >
              Copy Link
            </Button>
            <Text textAlign="center" color="#888888" fontSize="0.8rem">
              You can copy this link to your custom button or you can just share
              this link anywhere.
            </Text>
          </Box>

          <Box marginY={4}>
            {!isShowingEmbed && (
              <Button
                onClick={generateEmbedButton}
                isFullWidth
                marginBottom={2}
              >
                Generate Embed Button
              </Button>
            )}
            {isShowingEmbed && (
              <>
                <Code
                  wordBreak="break-word"
                  marginBottom={2}
                  variantColor="cyan"
                  padding={3}
                  borderRadius={6}
                  fontSize={"0.7rem"}
                >
                  {embedButton}
                </Code>
                <Button
                  isFullWidth
                  onClick={handleCopyEmbedButton}
                  variantColor="cyan"
                  marginBottom={2}
                >
                  Copy Embed Button
                </Button>
                <Text textAlign="center" fontSize="0.8rem" color="#888888">
                  Copy the embed button to your web page.
                </Text>
              </>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Form;
