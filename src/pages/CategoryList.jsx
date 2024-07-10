import React from "react";
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

const CategoryList = ({ categories, selectedCategory, onSelectCategory }) => {
  const [openCategories, setOpenCategories] = React.useState({});

  const handleToggle = (categoryId) => {
    setOpenCategories((prevOpenCategories) => ({
      ...prevOpenCategories,
      [categoryId]: !prevOpenCategories[categoryId],
    }));
  };

  const renderCategory = (category) => {
    // Single category rendering function
    const isOpen = openCategories[category.id];
    const hasChildren = category.children && category.children.length > 0;

    return (
      <React.Fragment key={category.id}>
        <ListItem disablePadding>
          <ListItemButton
            selected={selectedCategory && category.id === selectedCategory.id}
            onClick={() => onSelectCategory(category)}
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
              {category.children.map(
                (childCategory) => renderCategory(childCategory) // Recursive call for children
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
        categories.map((category) => renderCategory(category)) // Map over top-level categories
      ) : (
        <ListItemText primary="No categories available." />
      )}
    </List>
  );
};

export default CategoryList;
