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
  const [categories, setCategories] = useState([]);
  const [openCategories, setOpenCategories] = useState({});

  useEffect(() => {
    axios
      .get(`${Constants.API_BASE_URL}/categories`)
      .then((response) => {
        console.log("Fetched categories:", response.data);
        const fetchedCategories = response.data.data;
        if (Array.isArray(fetchedCategories)) {
          setCategories(fetchedCategories);
        } else {
          console.error("Invalid response format:", fetchedCategories);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleToggle = (categoryId) => {
    setOpenCategories((prevOpenCategories) => ({
      ...prevOpenCategories,
      [categoryId]: !prevOpenCategories[categoryId],
    }));
  };

  const renderCategory = (category, level = 0) => {
    const isOpen = openCategories[category.id];
    const hasChildren = category.children && category.children.length > 0;

    return (
      <React.Fragment key={category.id}>
        <ListItem disablePadding>
          <ListItemButton
            selected={selectedCategory && category.id === selectedCategory.id}
            onClick={() => {
              console.log("Category clicked:", category);
              onSelectCategory(category);
            }}
            sx={{ pl: level * 2 }}
          >
            <ListItemText primary={category.name} />
            {hasChildren && (
              <IconButton
                edge="end"
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggle(category.id);
                }}
              >
                {isOpen ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            )}
            {!hasChildren && (
              <IconButton edge="end">
                <ChevronRightIcon />
              </IconButton>
            )}
          </ListItemButton>
        </ListItem>
        <Divider />
        {hasChildren && (
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {category.children.map((child) =>
                renderCategory(child, level + 1)
              )}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  };

  return (
    <List component="nav" aria-label="categories">
      {categories.length > 0 ? (
        categories.map((category) => renderCategory(category))
      ) : (
        <ListItemText primary="No categories available." />
      )}
    </List>
  );
};

export default CategoryList;
