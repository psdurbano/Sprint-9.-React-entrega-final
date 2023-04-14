import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
    100: "#d5d5d5",
    200: "#ababac",
    300: "#818082",
    400: "#575659",
    500: "#2d2c2f",
    600: "#242326",
    700: "#1b1a1c",
    800: "#121213",
    900: "#090909",
  },

  secondary: {
    100: "#fff4ce",
    200: "#ffe99d",
    300: "#ffdd6b",
    400: "#ffd23a",
    500: "#ffc709",
    600: "#cc9f07",
    700: "#997705",
    800: "#665004",
    900: "#332802",
  },

  neautral: {
    100: "#fcfbf8",
    200: "#faf6f1",
    300: "#f7f2eb",
    400: "#f5ede4",
    500: "#f2e9dd",
    600: "#c2bab1",
    700: "#918c85",
    800: "#615d58",
    900: "#302f2c",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neautral: {
      dark: shades.neautral[700],
      main: shades.neautral[500],
      light: shades.neautral[100],
    },
  },
  typography: ["Jost", "sans-serif"].join(","),
  fontSize: 11,
  h1: {
    typography: ["Jost", "sans-serif"].join(","),
    fontSize: 48,
  },
  h2: {
    typography: ["Jost", "sans-serif"].join(","),
    fontSize: 36,
  },
  h3: {
    typography: ["Jost", "sans-serif"].join(","),
    fontSize: 20,
  },
  h4: {
    typography: ["Jost", "sans-serif"].join(","),
    fontSize: 14,
  },
});