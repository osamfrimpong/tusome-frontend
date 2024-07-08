import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItemIcon,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import QuizIcon from "@mui/icons-material/Quiz";
import EditIcon from "@mui/icons-material/Edit";
import LockIcon from "@mui/icons-material/Lock";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useIndexedDB } from "./auth/IndexedDB";
import Progress from "./Progress";

const UserDashboard = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [db] = useIndexedDB("tokens", "token");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [username, setUsername] = useState("John Doe");
  const [profilePicture, setProfilePicture] = useState(
    "https://example.com/profile-picture.jpg"
  );

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = async () => {
    if (db) {
      const tx = db.transaction("tokens", "readwrite");
      await tx.store.clear();
      await tx.done;
    }
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    const checkToken = async () => {
      if (db) {
        const tx = db.transaction("tokens", "readonly");
        const token = await tx.store.get("token");
        if (!token) {
          navigate("/login", { replace: true });
        }
      }
    };

    checkToken();
  }, [db, navigate]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer}
          sx={{ ml: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <List
          sx={{
            width: 240,
          }}
          onClick={toggleDrawer}
        >
          <Button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </Button>
          <br />
          <Button component={Link} to="/questions">
            <ListItemIcon>
              <QuestionAnswerIcon />
            </ListItemIcon>
            <ListItemText primary="Questions" />
          </Button>
          <br />
          <Button component={Link} to="/edit-profile">
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Edit Profile" />
          </Button>
          <br />
          <Button component={Link} to="/change-password">
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <ListItemText primary="Change Password" />
          </Button>
          <br />
          <Button component={Link} to="/login" onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </Button>
        </List>
      </Drawer>

      {/* Main Content */}
      <Grid spacing={3} sx={{ maxWidth: "90%", justifyContent: "center" }}>
        <Grid item xs={12} md={8}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              bgcolor: "theme",
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
              Welcome, {username}!
            </Typography>
            <Avatar
              src={profilePicture}
              alt="Profile Picture"
              sx={{ width: 100, height: 100, mx: "auto", mb: 3 }}
            />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Progress />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDashboard;
