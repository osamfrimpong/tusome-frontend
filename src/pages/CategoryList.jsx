import  { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Divider,
  Typography,
} from "@mui/material";

import Constants from "../utils/constants";
import NestedListView from "../components/partials/CategoryTreeView";

const CategoryList = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${Constants.API_BASE_URL}/categories`)
      .then((response) => {
        // console.log("Fetched categories:", response.data);
        const fetchedCategories = response.data;
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

 


  return (
    <Box sx={{ padding: "2%", mt: { xs: 7, sm: 7, md: 8 }, mb: 5}}>
      <Typography sx={{fontWeight: 800, fontSize: 24}}>All Categories</Typography>
      <Divider />
      <NestedListView data={categories} />
    </Box>
  );
};

export default CategoryList;
