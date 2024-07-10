import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  IconButton,
  Collapse,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import Constants from "../utils/constants";

const CategoryList = ({ selectedCategory, onSelectCategory }) => {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    if (selectedCategory && selectedCategory.children) {
      setSubcategories(selectedCategory.children);
    } else {
      setSubcategories([]);
    }
  }, [selectedCategory]);

  const handleToggle = (categoryId) => {
    // Toggle logic if needed
  };

  const renderSubcategory = (subcategory, level = 0) => {
    return (
      <React.Fragment key={subcategory.id}>
        <ListItem disablePadding>
          <ListItemButton
            selected={
              selectedCategory && subcategory.id === selectedCategory.id
            }
            onClick={() => onSelectCategory(subcategory)}
            sx={{ pl: level * 2 }}
          >
            <ListItemText primary={subcategory.name} />
          </ListItemButton>
        </ListItem>
        <Divider />
      </React.Fragment>
    );
  };

  return (
    <List component="nav" aria-label="subcategories">
      {subcategories.length > 0 ? (
        subcategories.map((subcategory) => renderSubcategory(subcategory))
      ) : (
        <ListItemText primary="No subcategories available." />
      )}
    </List>
  );
};

export default CategoryList;
