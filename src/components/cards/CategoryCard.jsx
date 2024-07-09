import { ArrowForward } from "@mui/icons-material";
import { Box, Card, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

CategoryCard.propTypes = {
  category: PropTypes.object.isRequired,
};

export default function CategoryCard(props) {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Card
      sx={{
        border: "2px solid",
        borderRadius: "8px",
        backgroundColor: theme.palette.secondary.main,
      }}
      elevation={0}
    >
      <Box sx={{ padding: "10px" }}>
        <Typography sx={{ fontWeight: 700, mb: 2 }}>
          {props.category.name}
        </Typography>
        <Typography sx={{ fontWeight: 400, mb: 2 }}>
          {props.category.description}
        </Typography>
        <Button
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            height: "40px",
            borderRadius: "5px",
            fontWeight: 700,
            mb: 2,
            "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.secondary.main,
                cursor: "pointer",
            },
          }}
          variant="outlined"
          onClick={() =>
            navigate(`/category/view/${props.category.id}`, {
              state: props.category,
            })
          }
          endIcon={<ArrowForward />}
        >
          Explore
        </Button>
      </Box>
    </Card>
  );
}
