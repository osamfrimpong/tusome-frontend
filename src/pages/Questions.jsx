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

const QuestionPage = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedSubcategory) {
      axios
        .get(
          `${Constants.API_BASE_URL}/categories/${selectedSubcategory.id}/questions`
        )
        .then((response) => {
          console.log(
            "Fetched questions for subcategory:",
            selectedSubcategory.id,
            response.data
          );
          setSelectedSubcategory((prevSubcategory) => ({
            ...prevSubcategory,
            questions: response.data.questions,
          }));
        })
        .catch((error) => {
          console.error(
            `Error fetching questions for subcategory ${selectedSubcategory.id}:`,
            error
          );
        });
    }
  }, [selectedSubcategory]);

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
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
              Subcategories
            </Typography>
            <CategoryList
              selectedCategory={selectedSubcategory}
              onSelectCategory={handleSubcategoryClick}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: "12px" }}>
            <Typography variant="h5" gutterBottom>
              {selectedSubcategory
                ? `${selectedSubcategory.name} Questions`
                : "Select a Subcategory"}
            </Typography>
            <List>
              {selectedSubcategory && selectedSubcategory.questions ? (
                selectedSubcategory.questions.map((question) => (
                  <React.Fragment key={question.id}>
                    <ListItem>
                      <ListItemText primary={question.text} />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))
              ) : (
                <ListItemText primary="No questions available for this subcategory." />
              )}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuestionPage;
