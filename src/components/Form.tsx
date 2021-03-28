/**
 * @todo
 * [ ] refactor this component into smaller components to improve maintainability and readability
 */

import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Code,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import { FormikErrors, useFormik } from "formik";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import MotionBox from "./MotionBox";

import { getLocaleTimeString } from "../helpers/getLocaleTimeString";

import { GOOGLE_CAL_TEMPLATE_LINK } from "../constants/googlecal";

type FormInput = {
  title: string;
  description?: string;
  location?: string;
  start?: string;
  end?: string;
};

const Form = () => {
  const { colorMode } = useColorMode();

  const [link, setLink] = useState<string>();
  const [embedButton, setEmbedButton] = useState<string>();

  const [isEditMode, setIsEditMode] = useState<boolean>(true);
  const [isShowingEmbed, setIsShowingEmbed] = useState<boolean>(false);

  const { values, handleChange, handleSubmit, errors } = useFormik<FormInput>({
    initialValues: {
      title: "",
      description: "",
      location: "",
      start: getLocaleTimeString(),
      end: getLocaleTimeString(),
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

  const contraBoxStyle: Partial<BoxProps> = {
    padding: 4,
    borderRadius: 16,
    border: "2px solid black",
    boxShadow: "0px 6px 0px #18191F;",
  };

  const contraButtonStyle: Partial<ButtonProps> = {
    borderRadius: 16,
    border: "2px solid black",
    boxShadow: "0px 4px 0px #18191F;",
  };

  const childAnimationProps = {
    variants: {
      before: {
        opacity: 0,
        y: 20,
        transition: {
          type: "spring",
          damping: 16,
          stiffness: 200,
        },
      },
      after: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 16,
          stiffness: 200,
        },
      },
    },
  };

  return (
    <MotionBox
      variants={{
        before: {},
        after: { transition: { staggerChildren: 0.06 } },
      }}
      initial="before"
      animate="after"
    >
      {isEditMode && (
        <>
          <MotionBox {...childAnimationProps}>
            <Box
              marginBottom={6}
              backgroundColor={colorMode === "light" ? "white" : "gray.700"}
              {...contraBoxStyle}
            >
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
                  borderColor="black"
                  borderRadius={8}
                  variant="filled"
                />
              </FormControl>

              <FormControl marginBottom={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  name="description"
                  value={description}
                  onChange={handleChange}
                  placeholder="Describe your event"
                  borderColor="black"
                  borderRadius={8}
                  variant="filled"
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
                  borderColor="black"
                  borderRadius={8}
                  variant="filled"
                />
              </FormControl>
            </Box>
          </MotionBox>

          <MotionBox {...childAnimationProps}>
            <Box
              marginBottom={8}
              backgroundColor={
                colorMode === "light" ? "yellow.400" : "yellow.600"
              }
              {...contraBoxStyle}
            >
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
                  borderColor="black"
                  borderRadius={8}
                  variant="filled"
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
                  borderColor="black"
                  borderRadius={8}
                  variant="filled"
                />
                {errors.end && (
                  <FormHelperText color="red.600">{errors.end}</FormHelperText>
                )}
              </FormControl>
            </Box>
          </MotionBox>

          <MotionBox {...childAnimationProps}>
            <Button
              isDisabled={Object.keys(errors).length ? true : false}
              onClick={() => handleSubmit()}
              isFullWidth
              backgroundColor={colorMode === "light" ? "black" : "gray.600"}
              color="white"
              {...contraButtonStyle}
            >
              Generate
            </Button>
          </MotionBox>
        </>
      )}

      {link && !isEditMode && (
        <MotionBox marginY={4} {...childAnimationProps}>
          <Button
            onClick={backToEditMode}
            marginBottom={4}
            leftIcon={<AiOutlineArrowLeft />}
            backgroundColor={colorMode === "light" ? "white" : "gray.600"}
            {...contraButtonStyle}
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
              backgroundColor="blue.700"
              color="white"
              marginBottom={2}
              {...contraButtonStyle}
            >
              Copy Link
            </Button>
            <Text textAlign="center" fontSize="0.8rem">
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
                backgroundColor="blue.500"
                color="white"
                {...contraButtonStyle}
              >
                Generate Embed Button
              </Button>
            )}
            {isShowingEmbed && (
              <>
                <Code
                  wordBreak="break-word"
                  marginBottom={2}
                  colorScheme="cyan"
                  padding={3}
                  borderRadius={6}
                  fontSize={"0.7rem"}
                >
                  {embedButton}
                </Code>
                <Button
                  isFullWidth
                  onClick={handleCopyEmbedButton}
                  colorScheme="cyan"
                  marginBottom={2}
                  {...contraButtonStyle}
                >
                  Copy Embed Button
                </Button>
                <Text
                  textAlign="center"
                  fontSize="0.8rem"
                  color={colorMode === "light" ? "gray.600" : "gray.200"}
                >
                  Copy the embed button to your web page.
                </Text>
              </>
            )}
          </Box>
        </MotionBox>
      )}
    </MotionBox>
  );
};

export default Form;
