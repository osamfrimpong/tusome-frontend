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
  ListItemButton,
} from "@mui/material";
import {
  ChevronRight as ChevronRightIcon,
  ArrowBack as ArrowBackIcon,
  Home as HomeIcon,
} from "@mui/icons-material";
import Constants from "../utils/constants";

const QuestionPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${Constants.API_BASE_URL}/api/categories`)
      .then((response) => {
        const fetchedCategories = response.data.data; // Adjust to access 'data' property
        if (Array.isArray(fetchedCategories)) {
          setCategories(fetchedCategories);
          setSelectedCategory(fetchedCategories[0]); // Select the first category initially
        } else {
          console.error("Invalid response format:", fetchedCategories);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      axios
        .get(
          `${Constants.API_BASE_URL}/api/categories/${selectedCategory.id}/questions`
        )
        .then((response) => {
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
        {/* Categories List */}
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: "12px" }}>
            <Typography variant="h5" gutterBottom>
              Categories
            </Typography>
            <List component="nav" aria-label="categories">
              {categories.length > 0 ? (
                categories.map((category) => (
                  <React.Fragment key={category.id}>
                    <ListItem disablePadding>
                      <ListItemButton
                        selected={
                          selectedCategory &&
                          category.id === selectedCategory.id
                        }
                        onClick={() => handleCategoryClick(category)}
                      >
                        <ListItemText primary={category.name} />
                        <IconButton edge="end">
                          <ChevronRightIcon />
                        </IconButton>
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))
              ) : (
                <Typography variant="body1">
                  No categories available.
                </Typography>
              )}
            </List>
          </Paper>
        </Grid>

        {/* Questions List */}
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
                <Typography variant="body1">
                  No questions available for this category.
                </Typography>
              )}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuestionPage;
