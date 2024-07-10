import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  Home as HomeIcon,
} from "@mui/icons-material";
import Constants from "../utils/constants";
import CategoryList from "./CategoryList";

const QuestionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedCategory) {
      axios
        .get(
          `${Constants.API_BASE_URL}/categories/${selectedCategory.id}/questions`
        )
        .then((response) => {
          console.log(
            "Fetched questions for category:",
            selectedCategory.id,
            response.data
          );
          setSelectedCategory((prevCategory) => ({
            ...prevCategory,
            questions: response.data.questions,
          }));
        })
        .catch((error) => {
          console.error(
            `Error fetching questions for category ${selectedCategory.id}:`,
            error
          );
        });
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
      <Grid container spacing={3} sx={{ maxWidth: 1200 }}>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <IconButton color="primary" onClick={handleBackClick}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton color="primary" onClick={handleHomeClick}>
            <HomeIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: "12px" }}>
            <Typography variant="h5" gutterBottom>
              Categories
            </Typography>
            <CategoryList
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategoryClick}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: "12px" }}>
            <Typography variant="h5" gutterBottom>
              {selectedCategory
                ? `${selectedCategory.name} Questions`
                : "Select a Category"}
            </Typography>
            <List>
              {selectedCategory && selectedCategory.questions ? (
                selectedCategory.questions.map((question) => (
                  <React.Fragment key={question.id}>
                    <ListItem>
                      <ListItemText primary={question.text} />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))
              ) : (
                <ListItemText primary="No questions available for this category." />
              )}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuestionPage;
