import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  CircularProgress,
  Avatar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useIndexedDB } from "./auth/IndexedDB";
import Progress from "./Progress"; // Import the Progress component

const UserDashboard = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [db] = useIndexedDB("tokens", "token");

  const [username, setUsername] = useState("John Doe");
  const [profilePicture, setProfilePicture] = useState(
    "https://example.com/profile-picture.jpg"
  );
  const [quizzesCompleted, setQuizzesCompleted] = useState(3);
  const [totalQuizzes, setTotalQuizzes] = useState(10);
  const [recentActivity, setRecentActivity] = useState([
    { title: "Completed Quiz 1", date: "2024-06-29" },
    { title: "Completed Quiz 2", date: "2024-06-29" },
    { title: "Completed Quiz 3", date: "2024-06-29" },
  ]);
  const [myQuestions, setMyQuestions] = useState([
    { title: "Question 1", date: "2024-06-29" },
    { title: "Question 2", date: "2024-06-29" },
    { title: "Question 3", date: "2024-06-29" },
  ]);
  const [favorites, setFavorites] = useState([
    { title: "Favorite Question 1", date: "2024-06-29" },
    { title: "Favorite Question 2", date: "2024-06-29" },
    { title: "Favorite Question 3", date: "2024-06-29" },
  ]);
  const [notifications, setNotifications] = useState([
    { title: "New Quiz Available", date: "2024-06-29" },
    { title: "New Question Added", date: "2024-06-29" },
    { title: "Quiz Completion Reminder", date: "2024-06-29" },
  ]);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = async () => {
    if (db) {
      const tx = db.transaction("tokens", "readwrite");
      await tx.store.clear(); // Clear all tokens
      await tx.done;
    }
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    const checkToken = async () => {
      if (db) {
        const tx = db.transaction("tokens", "readonly");
        const tokenStore = tx.objectStore("tokens");
        const token = await tokenStore.get("token");
        if (!token) {
          navigate("/login", { replace: true });
        }
      }
    };

    checkToken();
  }, [db, navigate]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
      {/* Hamburger Menu for Small Screens */}
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
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <List
          sx={{
            width: 240,
          }}
          onClick={toggleDrawer}
        >
          <Button component={Link} to="/">
            <ListItemText primary="Home" />
          </Button>
          <br />
          <Button component={Link} to="/questions">
            <ListItemText primary="Questions" />
          </Button>
          <br />
          <Button component={Link} to="/quiz">
            <ListItemText primary="Quizzes" />
          </Button>
          <br />
          <Button component={Link} to="/edit-profile">
            <ListItemText primary="Edit Profile" />
          </Button>
          <br />
          <Button component={Link} to="/change-password">
            <ListItemText primary="Change Password" />
          </Button>
          <br />
          <Button component={Link} to="/login" onClick={handleLogout}>
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
              <Grid item xs={12} sm={6} md={4}>
                <Paper
                  elevation={3}
                  sx={{ p: 2, borderRadius: "12px", bgcolor: "theme" }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ textAlign: "center", mb: 2 }}
                  >
                    Quizzes Progress
                  </Typography>
                  <CircularProgress
                    variant="determinate"
                    value={(quizzesCompleted / totalQuizzes) * 100}
                    size={150}
                    thickness={6}
                    sx={{ color: "#4caf50", mx: "auto", display: "block" }}
                  />
                  <Typography
                    variant="body1"
                    align="center"
                    gutterBottom
                    sx={{ mt: 2 }}
                  >
                    {quizzesCompleted} of {totalQuizzes} quizzes completed
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper
                  elevation={3}
                  sx={{ p: 2, borderRadius: "12px", bgcolor: "theme" }}
                >
                  <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                    Recent Activity
                  </Typography>
                  <ul>
                    {recentActivity.map((activity, index) => (
                      <li key={index}>
                        <Typography variant="body1" gutterBottom>
                          {activity.title} - {activity.date}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ p: 2, borderRadius: "12px" }}>
                  <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                    My Questions
                  </Typography>
                  <ul>
                    {myQuestions.map((question, index) => (
                      <li key={index}>
                        <Typography variant="body1" gutterBottom>
                          {question.title} - {question.date}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ p: 2, borderRadius: "12px" }}>
                  <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                    Favorites
                  </Typography>
                  <ul>
                    {favorites.map((favorite, index) => (
                      <li key={index}>
                        <Typography variant="body1" gutterBottom>
                          {favorite.title} - {favorite.date}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Paper>
              </Grid>
              {/* Replace progress tracking with Progress component */}
              <Grid item xs={12} sm={6} md={4}>
                <Progress />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper
                  elevation={3}
                  sx={{ p: 2, borderRadius: "12px", bgcolor: "theme" }}
                >
                  <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                    Notifications
                  </Typography>
                  <ul>
                    {notifications.map((notification, index) => (
                      <li key={index}>
                        <Typography variant="body1" gutterBottom>
                          {notification.title} - {notification.date}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDashboard;
