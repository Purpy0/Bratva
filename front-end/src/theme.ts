import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      50: "#f8c6c6",
      100: "#f39595",
      200: "#ed5f5f",
      300: "#e72a2a",
      400: "#c21516",
      500: "#AE1415", // Cornell red
      600: "#C71517", // Engineering orange
      700: "#4D1F1F", // Caput mortuum
      800: "#161515", // Night
    },
    background: {
      light: "#3B3B3B",
      dark: "#121212",
    },
    text: {
      light: "#f8c6c6",
      dark: "#f8c6c6",
    },
  },
  fonts: {
    heading: "'Russo One', Arial, sans-serif",
    body: "'Russo One', Arial, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "full",
        fontWeight: "bold",
      },
      variants: {
        solid: {
          bg: "brand.500",
          color: "#fff",
          _dark: {
            bg: "brand.700",
            color: "#f8c6c6",
          },
          _hover: { bg: "brand.600" },
        },
      },
    },
  },
});

export default theme;
