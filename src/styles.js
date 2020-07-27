import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffcc33",
      dark: "#ffb347",
    },
    secondary: {
      main: "#F3F5F7",
    },
    green: "#389b35",
  },

  typography: {
    h1: {
      fontSize: "2rem",

      "@media (max-width:644px)": {
        fontSize: "1.5rem",
      },
    },

    h6: {
      fontSize: "1.2rem",

      "@media (max-width:644px)": {
        fontSize: "1rem",
      },
    },
    h4: {
      fontSize: "2rem",

      "@media (max-width:644px)": {
        fontSize: "1.1rem",
      },
    },

    body2: {
      fontSize: "1.6rem",

      "@media (max-width:644px)": {
        fontSize: "1rem",
      },
    },
  },
});
