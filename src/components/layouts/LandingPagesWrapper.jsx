// LandingPagesWrapper.jsx

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Footer from "../partials/Footer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Constants from "../../utils/constants";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

const drawerWidth = 240;
const navItems = ["Quiz", "Questions", "About Us"];

function LandingPagesWrapper(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography sx={{ my: 2, fontWeight: 700 }}>Tusome</Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem
          disablePadding
          sx={{ border: "1px solid", justifyContent: "center" }}
        >
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to="/signup">
              <ListItemText primary="Create Account" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar component="nav" elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: 700,
            }}
          >
            Tusome
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
            <Button
              variant="contained"
              disableElevation
              disableRipple
              onClick={() => navigate("/signup")}
              sx={{
                backgroundColor: Constants.CUSTOM_COLORS.WHITE,
                color: Constants.CUSTOM_COLORS.MAIN_TEAL,
                textTransform: "none",
                height: "40px",
                borderRadius: "0px",
                "&:hover": {
                  color: Constants.CUSTOM_COLORS.WHITE,
                },
              }}
            >
              Create Account
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default LandingPagesWrapper;
