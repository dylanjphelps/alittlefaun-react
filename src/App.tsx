import {
  PaletteOptions,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import React from "react";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#78909c",
    light: "#47a6ff",
    dark: "#0074e0",
  },
  secondary: { main: "#f23b8e", dark: "#ba0061", light: "#ff74be" },
  error: { main: "#eb0000", dark: "#c62828", light: "#ef5350" },
  warning: { main: "#ed6c02", light: "#ff9800", dark: "#e65100" },
  info: { main: "#0288d1", light: "#03a9f4", dark: "#01579b" },
  success: { main: "#2e7d32", light: "#4caf50", dark: "#1b5e20" },
  background: {
    default: "#a5d6a7",
    paper: "#a5d6a7",
  },
  text: {
    primary: "#000000",
  },
};
export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#148eff",
    light: "#e0f0ff",
    dark: "#005aad",
    contrastText: "rgba(0,0,0,0.87)",
  },
  secondary: { main: "#f87dcc", dark: "#c34b9b", light: "#ffafff" },
  error: { main: "#dd0000", dark: "#b10000", light: "#ff8364" },
  warning: { main: "#ffb400", dark: "#cc9000", light: "#ffd54f" },
  info: { main: "#7abfff", light: "#9dd1ff", dark: "#4170ca" },
  success: { main: "#6cdb00", dark: "#54a800", light: "#beef99" },
  background: {
    default: "#111218",
    paper: "#1D1E24",
  },
};

const App = () => {
  const theme = React.useMemo(() => {
    return createTheme({
      palette: lightPalette,
      typography: {
        fontFamily: '"Noto Sans", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
          fontWeight: 600,
        },
        h2: {
          fontWeight: 600,
        },
        h3: {
          fontWeight: 600,
        },
        h4: {
          fontWeight: 700,
          fontFamily:
            '"Object Sans", "Noto Sans", "Roboto", "Helvetica", "Arial", sans-serif',
        },
        h5: {
          fontWeight: 700,
          fontFamily:
            '"Object Sans", "Noto Sans", "Roboto", "Helvetica", "Arial", sans-serif',
        },
        h6: {
          fontWeight: 700,
          fontFamily:
            '"Object Sans", "Noto Sans", "Roboto", "Helvetica", "Arial", sans-serif',
        },
        subtitle1: {
          fontWeight: 700,
          fontFamily:
            '"Object Sans", "Noto Sans", "Roboto", "Helvetica", "Arial", sans-serif',
        },
        subtitle2: {
          fontWeight: 700,
          fontFamily:
            '"Object Sans", "Noto Sans", "Roboto", "Helvetica", "Arial", sans-serif',
        },
        button: {
          fontWeight: 700,
          fontFamily:
            '"Object Sans", "Noto Sans", "Roboto", "Helvetica", "Arial", sans-serif',
        },
        overline: {
          fontFamily:
            '"Object Sans", "Noto Sans", "Roboto", "Helvetica", "Arial", sans-serif',
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: "unset",
            },
          },
        },
        MuiPaper: {
          defaultProps: {
            variant: "outlined",
          },
        },
        MuiMenu: {
          defaultProps: {
            PaperProps: {
              variant: "elevation",
            },
          },
        },
        MuiSelect: {
          defaultProps: {
            MenuProps: {
              PaperProps: {
                variant: "elevation",
              },
            },
          },
        },
      },
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavigationBar />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
