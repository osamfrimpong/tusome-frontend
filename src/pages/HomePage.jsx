import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IntroImage from "../assets/images/seems.jpg";
import Constants from "../utils/constants";

const isAuthenticated = async () => {
  try {
    const response = await axios.get(
      "https://http://tusome-06769d862471.herokuapp.com/auth-check",
      {
        withCredentials: true, // Include cookies in the request
      }
    );
    return response.data.authenticated;
  } catch (error) {
    console.error("Authentication check failed", error);
    return false;
  }
};

const HomePage = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const auth = await isAuthenticated();
      if (!auth) {
        navigate("/login");
      } else {
        setAuthChecked(true);
      }
    };

    checkAuth();
  }, [navigate]);

  if (!authChecked) {
    return <p>Loading...</p>; // Show a loading message or spinner while checking authentication
  }

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Your existing HomePage content here */}
      <Grid container sx={{ backgroundColor: "#006D5B", py: 10 }}>
        <Grid item xs={12} sm={8} md={8} sx={{ p: 5, pl: 10 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              fontSize: 48,
              color: Constants.CUSTOM_COLORS.WHITE,
              mb: 5,
            }}
          >
            Tusome
          </Typography>
          <Typography
            component="p"
            sx={{
              color: Constants.CUSTOM_COLORS.WHITE,
              fontWeight: 400,
              fontSize: 20,
            }}
          >
            A cutting-edge educational tool that enables students to thrive in
            their academic pursuits by offering access to a vast collection of
            past exam questions. Connecting students with relevant study
            resources by providing a simple and user-friendly interface for
            better learning and exam preparation.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={4} sx={{ p: 5, pr: 10 }}>
          <Box
            component="img"
            src={IntroImage}
            alt="seems"
            sx={{ borderRadius: 10, width: 500, height: 250 }}
          />
        </Grid>
      </Grid>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h2" sx={{ fontWeight: 700, fontSize: 36, mb: 4 }}>
          What to Expect
        </Typography>
        <Grid container spacing={8} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={4} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Wide Range
            </Typography>
            <Typography>
              We have a wide range of past questions from high schools and
              universities in Ghana and Kenya
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Progress Tracking
            </Typography>
            <Typography>
              Monitor your study progress and be able to continue from where you
              got to when you return.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Practice Mode
            </Typography>
            <Typography>
              Test your knowledge with practice exams that simulate real test.
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL,
            padding: "50px",
            borderRadius: 10,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: 36,
              color: Constants.CUSTOM_COLORS.WHITE,
            }}
          >
            Find out about the quizzes
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/quiz")}
            sx={{
              backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL,
              color: Constants.CUSTOM_COLORS.WHITE,
              borderRadius: "0px",
              height: "40px",
              textTransform: "none",
              "&:hover": { backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL },
            }}
          >
            View Quizzes
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
