import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/theme";

const customSizes = {
  sizes: {
    button: {
      sm: "24px", // Small button size
      md: "32px", // Medium button size
      lg: "40px", // Large button size
    },
    input: {
      sm: "24px",
      md: "32px",
      lg: "40px",
    },
  },

  paddings: {
    button: {
      sm: "24px",
      md: "32px",
      lg: "40px",
    },
    input: {
      sm: "8px",
      md: "12px",
      lg: "16px",
    },
  },
};


const customTheme = extendTheme({
  ...chakraTheme,
  ...customSizes,
});

export default customTheme;