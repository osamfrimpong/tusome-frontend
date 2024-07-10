import { useLocation } from 'react-router-dom';
import { Typography, Box, Paper, List, ListItem, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ResultsComponent = () => {
    const location = useLocation();
    const { score, total, questions, userAnswers } = location.state;
    const theme = useTheme();

    return (
        <Box sx={{ maxWidth: 800, padding: 3, mt: { xs: 7, sm: 7, md: 8 }, mb: 5}}>
            <Typography variant="h4" gutterBottom>Quiz Results</Typography>
            <Typography variant="h5" gutterBottom>
                Your score: {score} out of {total}
            </Typography>

            <List>
                {questions.map((question, index) => (
                    <Paper key={index} elevation={1} sx={{ mb: 3, p: 2, backgroundColor: theme.palette.secondary.main }}>
                        <Typography variant="h6">
                            Q{index + 1}. {question.question_details}
                        </Typography>
                        <List dense>
                            {Object.entries(question.answer_options).map(([key, value]) => (
                                <ListItem key={key}>
                                    <ListItemText
                                        primary={`${key}: ${value}`}
                                        sx={{
                                            color: key === question.correct_option
                                                ? 'green'
                                                : (key === userAnswers[index] ? 'red' : 'inherit'),
                                            fontWeight: (key === question.correct_option || key === userAnswers[index]) ? 'bold' : 'normal',
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                        <Typography sx={{ mt: 1 }}>
                            Your answer: ({userAnswers[index]}) {question.answer_options[userAnswers[index]]}
                        </Typography>
                        <Typography sx={{ color: 'green' }}>
                            Correct answer: ({question.correct_option}) {question.answer_options[question.correct_option]}
                        </Typography>
                    </Paper>
                ))}
            </List>
        </Box>
    );
};

export default ResultsComponent;