import { ArrowForward } from "@mui/icons-material";
import { Box, Card, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

PropositionCard.propTypes = {
  proposition: PropTypes.object.isRequired,
};

export default function PropositionCard(props) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        border: 0,
        borderRadius: "18px",
        backgroundColor: "rgba(0, 0, 0, 0.87)",
      }}
      elevation={0}
    >
      <Box sx={{ padding: "20px" }}>
        <Box sx={{ color: "white"}}>{props.proposition.icon}</Box>
        
        <Typography sx={{ fontWeight: 700, mb: 4, color: "white" }}>
          {props.proposition.title}
        </Typography>
        <Typography sx={{ fontWeight: 400, mb: 4, color: "white"  }}>
          {props.proposition.description}
        </Typography>
        <Button
          sx={{
            backgroundColor: "white",
            border: 0,
            color: "black",
            height: "40px",
            borderRadius: "5px",
            fontWeight: 700,
            mb: 2,
            "&:hover": {
                backgroundColor: "black",
                color: "white",
                cursor: "pointer",
                border: "1px solid white",
            },
          }}
          variant="outlined"
          onClick={() =>
            navigate('/dashboard')
          }
          endIcon={<ArrowForward />}
        >
         Discover More
        </Button>
      </Box>
    </Card>
  );
}
