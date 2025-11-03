// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      },
    },
  },
  palette: {
    background: {
      default: "#2c3f67"
    },
    discord: {
      contrastText: "#FFFFFF",
      main: "#5865F2",
    },
    divider: "#696969",
    mode: 'dark',
    text: {
      wowGold: "#F8B700",
    }
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

export default theme;
