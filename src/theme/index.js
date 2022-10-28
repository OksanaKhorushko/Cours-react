import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#26516f",
    },
    secondary: {
      main: "#0098FF",
    },
    helper: {
      main: '#f0f8ff',
      light: '#f4f8fb',
      dark: '#e2f1ff',
    },
  },
  typography: {
    fontSize: 12,
    h1: {
      fontSize: 28,
    },
    h2: {
      fontSize: 26,
    },
    h3: {
      fontSize: 24,
    },
    h4: {
      fontSize: 22,
    },
    h5: {
      fontSize: 20,
    },
    h6: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 14,
    },
  },
});
