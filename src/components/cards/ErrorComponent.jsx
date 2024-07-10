import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ErrorOutlineRounded from "@mui/icons-material/ErrorOutlineRounded";
import PropType from "prop-types";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

ErrorComponent.propTypes = {
  title: PropType.string,
  message: PropType.string,
};

export default function ErrorComponent(props) {
  const navigate = useNavigate();
  return (
    <Container maxWidth="none" sx={{ mt: { xs: 7, sm: 7, md: 8 } }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <ErrorOutlineRounded
          sx={{ fontSize: 100, color: "red", alignSelf: "center" }}
        />
        <Typography sx={{ fontWeight: 800, fontSize: 24, alignSelf: "center" }}>
          {props.title || "Oops!"}
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: 24,
            alignSelf: "center",
            textWrap: "wrap",
          }}
        >
          {props.message || "An error occurred"}
        </Typography>
        <Button
          sx={{ alignSelf: "center", height: "40px", mt: 2 }}
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </Box>
    </Container>
  );
}
