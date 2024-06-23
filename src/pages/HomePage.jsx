import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import IntroImage from "../assets/images/seems.jpg";
import Constants from "../utils/constants";

export default function HomePage() {
  return (
    <Box>
      <Grid container sx={{ backgroundColor: "#006D5B" }}>
        <Grid item xs={12} sm={8} md={8} sx={{ p: "50px" }}>
          <Typography
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
        <Grid item xs={12} sm={4} md={4}>
          <Box component="img" src={IntroImage} alt="seems" />
        </Grid>
      </Grid>
      <Typography sx={{ fontWeight: 700, fontSize: "50px", mt: 4 }}>
        What to Expect
      </Typography>
      <Grid container spacing={8} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4} md={4}>
          <Typography>Wide Range</Typography>
          <Typography>
            We have a wide range of past questions from high schools and
            universities in Ghana and Kenya
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Typography>Progress Tracking</Typography>
          <Typography>
            Monitor your study progress and be able to continue from where you
            got to when you return.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Typography>Practice Mode</Typography>
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
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: "50px", color: Constants.CUSTOM_COLORS.WHITE }}>
          Find out about the quizzes
        </Typography>
        <Button
          variant="contained"
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
    </Box>
  );
}
