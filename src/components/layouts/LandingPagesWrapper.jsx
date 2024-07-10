import * as React from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "../partials/Footer";
import Constants from "../../utils/constants";
import UserProfileDropdown from "../partials/UserProfileDropdown";

const drawerWidth = 240;
const navItems = [
  { label: "Categories", link: "/categories" },
  { label: "Questions", link: "/questions" },
  { label: "About Us", link: "/about-us" },
];

function LandingPagesWrapper() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL,
        color: "#fff",
      }}
    >
      <Link to="/">
        <Typography sx={{ my: 2, fontWeight: 700, color: "#fff" }}>
          <span style={{ color: "#fff" }}>Tusome</span>
        </Typography>
      </Link>
      <Divider sx={{ borderColor: "#fff" }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL,
                color: "#fff",
              }}
            >
              <Link to={item.link}>
                <ListItemText primary={item.label} sx={{ color: "#fff" }} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL,
          color: "#fff",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, color: "#fff" }}
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
            <Link to="/" style={{textDecoration: "none", color: "white"}}>
             Tusome
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" }, marginRight: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                sx={{
                  color: "#fff",
                  backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL,
                }}
                component={Link}
                to={item.link}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <UserProfileDropdown /> {/* Integration of UserProfileDropdown */}
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
      <Box component="main" sx={{ flexGrow: 1}}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default LandingPagesWrapper;
