import {
  Box,
  Card,
  Container,
  Divider,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import ErrorComponent from "../../components/cards/ErrorComponent";

export default function ViewCategory() {
  const location = useLocation();
  const category = location.state || null;
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Container maxWidth="none" sx={{ mt: { xs: 7, sm: 7, md: 8 } }}>
      {category ? (
        category.questions.length > 0 ? (
        <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
          <Typography sx={{ fontWeight: 800, fontSize: 24 }}>
            Category/Subject: {category.name}
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: 20 }}>
            Description: {category.description}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Grid container>
            {category.questions.map((question, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    padding: 5,
                    backgroundColor: theme.palette.secondary.main,
                  }}
                >
                  <Typography>
                    Country:{" "}
                    {
                      question.formatted_category_details.country_category_id
                        .name
                    }
                  </Typography>
                  <Typography>
                    Level:{" "}
                    {question.formatted_category_details.main_category_id.name}
                  </Typography>
                  <Typography>
                    Exam/Programme/College Type:{" "}
                    {question.formatted_category_details.type_category_id.name}
                  </Typography>
                  <Typography>Year: {question.year}</Typography>
                  <Typography>
                    Total Questions: {question.question_content.length}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: 2,
                      mt: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{ height: "40px" }}
                      fullWidth
                      onClick={() =>
                        navigate(`/question/view/${question.id}`, {
                          state: question,
                        })
                      }
                    >
                      View
                    </Button>{" "}
                    <Button
                      variant="contained"
                      sx={{ height: "40px" }}
                      fullWidth
                      onClick={() =>
                        navigate(`/quiz/${question.id}`, { state: question })
                      }
                    >
                      Try as Quiz
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>) : (
           <ErrorComponent title="Oops!" message="No questions found for this category" />
        )
      ) : (
        <ErrorComponent title="Oops!" message="No Category Selected" />
      )}
    </Container>
  );
}
