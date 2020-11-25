import { IconButton, useColorMode } from "@chakra-ui/react";
import { CgMoon, CgSun } from "react-icons/cg";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      marginRight={2}
      aria-label="theme toggle"
      icon={colorMode === "light" ? <CgMoon /> : <CgSun />}
      onClick={toggleColorMode}
      backgroundColor={colorMode === "light" ? "blue.400" : "gray.500"}
    />
  );
};

export default ThemeToggle;
