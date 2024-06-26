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
import { Outlet, Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Constants from "../../utils/constants";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

const drawerWidth = 240;
const navItems = [
  { label: "Quiz", link: "/quiz" },
  { label: "Questions", link: "/questions" },
  { label: "About Us", link: "/about-us" },
];

function LandingPagesWrapper(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) =>!prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL, color: "#fff" }}>
      <Typography sx={{ my: 2, fontWeight: 700, color: "#fff" }}>Tusome</Typography>
      <Divider sx={{ borderColor: "#fff" }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center", backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL, color: "#fff" }}>
              <Link to={item.link}>
                <ListItemText primary={item.label} sx={{ color: "#fff" }} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ border: "1px solid #fff", justifyContent: "center" }}>
          <ListItemButton sx={{ textAlign: "center", backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL, color: "#fff" }}>
            <Link to="/signup">
              <ListItemText primary="Create Account" sx={{ color: "#fff" }} />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar component="nav" elevation={0} sx={{ backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL, color: "#fff" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#fff" }}
          >
            <MenuIcon sx={{ color: "#fff" }} />
          </IconButton>
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Tusome
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.label} sx={{ color: "#fff", backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL }} component={Link} to={item.link}>
                {item.label}
              </Button>
            ))}
            <Button
              variant="outlined"
              disableElevation
              disableRipple
              onClick={() => navigate("/signup")}
              sx={{
                backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL,
                color: "#fff",
                textTransform: "none",
                height: "40px",
                borderRadius: "0px",
                "&:hover": {
                  backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL,
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
            "&.MuiDrawer-paper": {
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

