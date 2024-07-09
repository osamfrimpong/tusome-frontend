import {
  Box,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import Constants from "../utils/constants";
import CategoryCard from "../components/cards/CategoryCard";
import QuestionAnswer from "@mui/icons-material/QuestionAnswer";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import AssignmentTurnedIn from "@mui/icons-material/AssignmentTurnedIn";
import PropositionCard from "../components/cards/PropositionCard";
import ChooseUsImage from "../assets/images/choose.jpg";
import QuizImage from "../assets/images/quiz.jpg";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const theme = useTheme();
  const [categories, setCategories] = useState([]); 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${Constants.API_BASE_URL}/home`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          }
        });
        // console.log(response.data.categories);
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);


  const propositions = [
    {
      id: 1,
      title: "What to Expect",
      description:
        "We have a wide range of past questions from high schools and universities in Ghana and Kenya",
      icon: <QuestionAnswer />,
    },
    {
      id: 2,
      title: "Progress Tracking",
      description:
        "Monitor your study progress and be able to continue from where you got to when you return.",
      icon: <AutoModeIcon />,
    },
    {
      id: 3,
      title: "Practice Mode",
      description:
        "Test your knowledge with practice exams that simulate real test.",
      icon: <AssignmentTurnedIn />,
    },
  ];
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        mt: { xs: 7, sm: 7, md: 8 },
      }}
    >
      <Grid container sx={{ backgroundColor: "#006D5B" }}>
        <Grid item xs={12} sm={8} md={8} sx={{ alignContent: "center", px: 4 }}>
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
          <Box
            component="img"
            src={QuizImage}
            alt="seems"
            sx={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={0} sx={{ px: 4, mt: 4 }}>
        <Grid item xs={12} sm={4} md={4}>
          <Box
            component="img"
            src={ChooseUsImage}
            sx={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10, objectFit: "cover", width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={8} sx={{backgroundColor: theme.palette.secondary.main, px: 4, alignContent: "center"}}>
          <Typography sx={{ fontWeight: 700, fontSize: 36, mb: 1 }}>
            Why Choose Tusome?
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={4}>
            {propositions.map((proposition) => (
              <Grid item xs={12} sm={12} md={6} key={proposition.id}>
                <PropositionCard proposition={proposition} />
              </Grid>))}
          </Grid>

        </Grid>
      </Grid>

      <Typography sx={{ fontWeight: 700, fontSize: 36, mb: 1, mt: 4,  pl: 4 }}>
        Popular Categories/Subjects
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Grid container spacing={4} sx={{px: 4, mb: 2}}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={3} key={category.id}>
            <CategoryCard category={category} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
