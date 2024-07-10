class Constants {
  static LIGHT_COLORS = {
    PRIMARY: "#014D4E",
    SECONDARY: "#F4F4ED",
    ERROR: "#FF8A80",
    SUCCESS: "#ECFBEC",
    WARNING: "#DCB400",
    NEUTRAL: "#F5F6FA",
    DANGER: "#FF0000",
  };

  static DARK_COLORS = {
    PRIMARY: "#FFFFFF",
    SECONDARY: "#424242",
    ERROR: "#FF8A80",
    SUCCESS: "#A5D6A7",
    WARNING: "#FFD54F",
    NEUTRAL: "#212121",
    DANGER: "#FF0000",
  };

  static CUSTOM_COLORS = {
    WHITE: "#FFFFFF",
    BLACK: "#000000",
    GRAY: "#F5F6FA",
    BUTTON_BORDER_BLACK: "#1B1C1E",
    FAINT_BLUE: "#E1F6FF",
    MAIN_TEAL: "#014D4E",
  };


    static API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://tusome-06769d862471.herokuapp.com/api";

    static HIDE_ON_MOBILE = {
        display: { xs: "none", sm: "none", md: "block"},
    };
    static SHOW_ON_MOBILE = {
        display: { xs: "block", sm: "block", md: "none"},
    };

 
}

export default Constants;
