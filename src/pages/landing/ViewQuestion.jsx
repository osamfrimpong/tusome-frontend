import { useLocation, useNavigate } from "react-router-dom";

import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import ErrorComponent from "../../components/cards/ErrorComponent";

export default function ViewQuestion() {
  const location = useLocation();
  const question = location.state || null;
  const navigate = useNavigate();
 

  return (
    <Container maxWidth="none" sx={{ mt: { xs: 7, sm: 7, md: 8 }, mb: 5 }}>
      {question && (
        <Stack direction={"column"}>
          <Typography sx={{ fontWeight: 700, fontSize: 24 }}>
            Question Details
          </Typography>
          <Button
            variant="contained"
            sx={{ height: "40px", width: {xs: "50%", sm: "30%", md: "10%"} }}
            onClick={() =>
              navigate(`/quiz/${question.id}`, { state: question })
            }
          >
            Try as Quiz
          </Button>
          <Divider sx={{ my: 1 }} />
          <Typography>
            Category Details:{" "}
            {question.formatted_category_details.main_category_id.name}
            {" > "}
            {question.formatted_category_details.country_category_id.name}
            {" > "} {question.formatted_category_details.type_category_id.name}
          </Typography>
          <Typography>
            Subject:{" "}
            {question.formatted_category_details.subject_category_id.name}
          </Typography>
          <Typography>Year: {question.year}</Typography>
          {question.question_content.map((content, index) => (
            <Box key={index} sx={{ mt: 2 }}>
              <Typography sx={{ fontWeight: 700 }}>
                Q{content.question_number}.
              </Typography>
              <Typography component={"p"}>
                {content.question_details}
              </Typography>
              {Object.entries(content.answer_options).map(([key, value]) => (
                <Box key={key} sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography sx={{ fontWeight: 700, mr: 1 }}>
                    {key.toUpperCase()}.
                  </Typography>
                  <Typography component="p">{value}</Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Stack>
      )}

      {!question && (
        <ErrorComponent title={"Opps"} message={"Invalid Question"} />
      )}
    </Container>
  );
}
