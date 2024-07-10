import React from "react";

const CategorySelect = ({ categories, selectedCategory, onSelectCategory }) => {
  const renderOptions = (categories, level = 0) => {
    return categories.map((category) => (
      <React.Fragment key={category.id}>
        <option value={category.id}>
          {"-".repeat(level)} {category.name}
        </option>
        {category.children &&
          category.children.length > 0 &&
          renderOptions(category.children, level + 1)}
      </React.Fragment>
    ));
  };

  const handleChange = (event) => {
    const categoryId = parseInt(event.target.value);
    const selected = findCategoryById(categories, categoryId);
    onSelectCategory(selected);
  };

  const findCategoryById = (categories, id) => {
    for (const category of categories) {
      if (category.id === id) return category;
      if (category.children) {
        const found = findCategoryById(category.children, id);
        if (found) return found;
      }
    }
    return null;
  };

  return (
    <select
      value={selectedCategory ? selectedCategory.id : ""}
      onChange={handleChange}
    >
      <option value="">Select a Category</option>
      {renderOptions(categories)}
    </select>
  );
};

export default CategorySelect;
