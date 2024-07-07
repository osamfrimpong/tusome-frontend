import React from "react";
import { Box, Grid, Typography, Card, CardContent, Container } from "@mui/material";
import IntroImage from "../assets/images/seems.jpg";
import Constants from "../utils/constants";

const HomePage = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
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
      </Container>
      <Grid container spacing={4} sx={{ py: 10, px: 4 }}>
        {/* Section with four cards */}
        <Grid item xs={12} sx={{ mb: 4 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, fontSize: 36, mb: 4 }}>
            Featured Questions
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h5">Question 1</Typography>
              <Typography variant="body2">
                Question 1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h5">Question 2</Typography>
              <Typography variant="body2">
                Question 2
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h5">Question 3</Typography>
              <Typography variant="body2">
                Question 3
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h5">Question 4</Typography>
              <Typography variant="body2">
                Question 4
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
