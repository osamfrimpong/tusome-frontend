import { createTheme } from "@mui/material/styles";
import Constants from "./constants";

const commonTheme = {
  typography: {
    fontFamily: ["Flex", "sans-serif"],
    button: {
     
      fontFamily: ["Flex", "sans-serif"],
      textTransform: "none",
      elevation: 0,
      disableRipple: true,
      cursor: "pointer",
      padding: "24px 175.5px",
      fontSize: "16px",
      lineHeight: "24px",
      height: "62px",
      // boxShadow: 0,
    },
  },
};

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "light",
    primary: { main: Constants.LIGHT_COLORS.PRIMARY },
    secondary: { main: Constants.LIGHT_COLORS.SECONDARY },
    error: { main: Constants.DARK_COLORS.ERROR },
    success: { main: Constants.LIGHT_COLORS.SUCCESS },
    warning: { main: Constants.LIGHT_COLORS.WARNING },
    neutral: { main: Constants.LIGHT_COLORS.NEUTRAL },
    danger: { main: Constants.LIGHT_COLORS.DANGER },
  },
});

export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "dark",
    primary: { main: Constants.DARK_COLORS.PRIMARY },
    secondary: { main: Constants.DARK_COLORS.SECONDARY },
    error: { main: Constants.DARK_COLORS.ERROR },
    success: { main: Constants.DARK_COLORS.SUCCESS },
    warning: { main: Constants.DARK_COLORS.WARNING },
    neutral: { main: Constants.DARK_COLORS.NEUTRAL },
    danger: { main: Constants.DARK_COLORS.DANGER },
  },
});
