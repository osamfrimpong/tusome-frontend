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
  useTheme,
  Grid,
} from "@mui/material";
import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "../partials/Footer";
import Constants from "../../utils/constants";
import { useAuth } from "../../pages/auth/useAuth";
import UserProfileDropdown from "../partials/UserProfileDropdown";

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
  const { user } = useAuth();

  // Log the user object to check if it's correctly fetched
  console.log("User:", user);

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
        {!user && (
          <ListItem
            disablePadding
            sx={{ border: "1px solid #fff", justifyContent: "center" }}
          >
            <ListItemButton
              sx={{
                textAlign: "center",
                backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL,
                color: "#fff",
              }}
            >
              <Link to="/signup">
                <ListItemText primary="Create Account" sx={{ color: "#fff" }} />
              </Link>
            </ListItemButton>
          </ListItem>
        )}
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
            <Link to="/">
              <span style={{ color: "#fff" }}>Tusome</span>
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
            {!user && (
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
            )}
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
