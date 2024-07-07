import * as React from "react";
import { Box, Grid, Typography, Link, Button } from "@mui/material";
import Constants from "../../utils/constants";
import { useNavigate } from "react-router-dom";


function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL,
        color: Constants.CUSTOM_COLORS.WHITE,
        py: 6,
        px: { xs: 2, sm: 6 },
        mt: "auto",
      }}
    >

      {/* Bottom Footer */}
      <Box sx={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)", pt: 3, mt: 3 }}>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          &copy; {new Date().getFullYear()} Tusome. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
