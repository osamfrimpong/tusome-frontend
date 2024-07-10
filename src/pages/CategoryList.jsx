import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemButton,
  IconButton,
} from "@mui/material";
import { ChevronRight as ChevronRightIcon } from "@mui/icons-material";

const CategoryList = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <List component="nav" aria-label="categories">
      {categories.length > 0 ? (
        categories.map((category) => (
          <React.Fragment key={category.id}>
            <ListItem disablePadding>
              <ListItemButton
                selected={
                  selectedCategory && category.id === selectedCategory.id
                }
                onClick={() => onSelectCategory(category)}
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
        <ListItemText primary="No categories available." />
      )}
    </List>
  );
};

export default CategoryList;
