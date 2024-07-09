import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "./utils/theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
