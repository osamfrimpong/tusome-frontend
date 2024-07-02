import React, { useState } from 'react';
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
} from '@mui/material';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';

const categories = [
  {
    id: 1,
    name: 'General Knowledge',
    questions: [
      { id: 1, text: 'What is the capital of France?' },
      { id: 2, text: 'Who painted the Mona Lisa?' },
      { id: 3, text: 'What is the tallest mountain in the world?' },
    ],
  },
  {
    id: 2,
    name: 'Science',
    questions: [
      { id: 4, text: 'What is the atomic number of Carbon?' },
      { id: 5, text: 'Who discovered penicillin?' },
      { id: 6, text: 'What is the process of photosynthesis?' },
    ],
  },
  {
    id: 3,
    name: 'History',
    questions: [
      { id: 7, text: 'When was the Declaration of Independence signed?' },
      { id: 8, text: 'Who was the first President of the United States?' },
      { id: 9, text: 'What year did World War II end?' },
    ],
  },
];

const QuestionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
      <Grid container spacing={3} sx={{ maxWidth: 1200 }}>
        {/* Categories List */}
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: '12px' }}>
            <Typography variant="h5" gutterBottom>
              Categories
            </Typography>
            <List component="nav" aria-label="categories">
              {categories.map((category) => (
                <React.Fragment key={category.id}>
                  <ListItem
                    button
                    selected={category.id === selectedCategory.id}
                    onClick={() => handleCategoryClick(category)}
                  >
                    <ListItemText primary={category.name} />
                    <IconButton edge="end">
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Questions List */}
        <Grid item xs={12} md={9}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: '12px' }}>
            <Typography variant="h5" gutterBottom>
              {selectedCategory.name} Questions
            </Typography>
            <List>
              {selectedCategory.questions.map((question) => (
                <React.Fragment key={question.id}>
                  <ListItem>
                    <ListItemText primary={question.text} />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuestionPage;
