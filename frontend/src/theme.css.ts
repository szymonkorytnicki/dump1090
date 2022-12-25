import { createTheme } from "@vanilla-extract/css";

export const [_, vars] = createTheme({
  colors: {
    white: "#fff",
    primary: "#0378A6",
    secondary: "#F29F05",
  },
  spacing: {
    small: "0.5rem",
    medium: "1rem",
    large: "2rem",
  },
});
