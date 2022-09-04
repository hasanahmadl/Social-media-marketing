import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#410784",
    },
    secondary: {
      main: "#23027D",
    },
  },

  typography: {
    fontFamily: "Nunito",
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        elevation1: {
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
        },
      },
    },
  },
});

export default theme;
