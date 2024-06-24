import * as React from "react";
import { Box, Grid, Typography, Link, Button } from "@mui/material";
import Constants from "../../utils/constants";

function Footer() {
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
      <Grid container spacing={4}>
        {/* Footer Column 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            About Us
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            eget mauris id purus aliquet porttitor.
          </Typography>
          <Button
            variant="outlined"
            component={Link}
            href="/about"
            sx={{ color: Constants.CUSTOM_COLORS.WHITE, borderColor: Constants.CUSTOM_COLORS.WHITE }}
          >
            Learn More
          </Button>
        </Grid>

        {/* Footer Column 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Useful Links
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <Link href="/faq" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
              FAQ
            </Link>
            <Link href="/contact" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
              Contact Us
            </Link>
            <Link href="/terms" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
              Terms of Service
            </Link>
            <Link href="/privacy" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
              Privacy Policy
            </Link>
          </Typography>
        </Grid>

        {/* Footer Column 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Follow Us
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
              Facebook
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
              Twitter
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" color="inherit" underline="hover" sx={{ display: "block", mb: 1 }}>
              Instagram
            </Link>
          </Typography>
        </Grid>

        {/* Footer Column 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Newsletter
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Sign up to receive updates and exclusive offers.
          </Typography>
          <form>
            <Box sx={{ display: "flex" }}>
              <input type="email" placeholder="Your email" required sx={{ p: 1, flexGrow: 1, mr: 1 }} />
              <Button type="submit" variant="contained" sx={{ backgroundColor: Constants.CUSTOM_COLORS.WHITE, color: Constants.CUSTOM_COLORS.MAIN_TEAL }}>
                Subscribe
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>

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
