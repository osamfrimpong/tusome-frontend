import  { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Button,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    LinearProgress,
    Box,
    Alert,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const QuizComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    const questions = location.state?.question_content;
   
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));
    const [showResults, setShowResults] = useState(false);
    const [error, setError] = useState('');

    const handleAnswer = (event) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = event.target.value;
        setAnswers(newAnswers);
        setError('');
    };

    const handlePrevious = () => {
        setCurrentQuestion((prev) => Math.max(0, prev - 1));
        setError('');
    };

    const handleNext = () => {
        if (!answers[currentQuestion]) {
            setError('Please select an answer before proceeding.');
            return;
        }
        setCurrentQuestion((prev) => Math.min(questions.length - 1, prev + 1));
        setError('');
    };

    const handleFinish = () => {
        if (!answers[currentQuestion]) {
            setError('Please select an answer before finishing.');
            return;
        }
        if (answers.some(answer => !answer)) {
            setError('Please answer all questions before finishing.');
            return;
        }
        setShowResults(true);
        setError('');
    };

    const handleSubmit = () => {
        const score = answers.reduce((acc, answer, index) => {
            return answer === questions[index].correct_option ? acc + 1 : acc;
        }, 0);
        navigate('/quiz/results', {
            state: {
                score,
                total: questions.length,
                questions: questions,
                userAnswers: answers
            }
        });
    };

    if (showResults) {
        return (
            <Box maxWidth={"lg"} sx={{ padding: "2%", mt: { xs: 7, sm: 7, md: 8 }, mb: 5 }}>
            <Box sx={{px: 4}}>
                <Typography fontWeight={700} fontSize={20}>Review Your Answers</Typography>
                {questions.map((question, index) => (
                    <Box key={index} mb={3}>
                        <Typography component={"p"} fontSize={18} fontWeight={400} sx={{mb: 1}}>Q{index + 1}. {question.question_details}</Typography>
                        <Typography>
                            Your answer: ({answers[index]}) {question.answer_options[answers[index]]}
                        </Typography>
                    </Box>
                ))}
                <Button variant="contained" onClick={handleSubmit}  sx={{height: 40, mb: 4, alignSelf: "center", width: "50%"}}>Submit</Button>
            </Box>
            </Box>
        );
    }

    const question = questions[currentQuestion];

    return (
        <Box maxWidth={"md"} sx={{ padding: "2%",  height: "100vh", justifyContent: "flex-start", mt: { xs: 7, sm: 7, md: 8 }, mb: 5 }}>
        <Typography fontWeight={700} fontSize={24} mb={2}>Quiz</Typography>
            <Box sx={{border: "1px solid", padding: "4%", borderRadius: 4, backgroundColor: theme.palette.secondary.main}}>
            <LinearProgress variant="determinate" sx={{height: 10, borderRadius: 4}} value={(currentQuestion + 1) / questions.length * 100} />
            <Typography fontWeight={700} fontSize={20} mt={2} mb={2}>
                Question {currentQuestion + 1} of {questions.length}
            </Typography>
            <Typography component={"p"} fontSize={18} fontWeight={400} sx={{mb: 2}}>{question.question_details}</Typography>
            <RadioGroup value={answers[currentQuestion]} onChange={handleAnswer}>
                {Object.entries(question.answer_options).map(([key, value]) => (
                    <FormControlLabel key={key} value={key} control={<Radio sx={{height: 50, width: 50}} />} label={value} />
                ))}
            </RadioGroup>
            {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2, gap: 2}}>
                <Button onClick={handlePrevious} disabled={currentQuestion === 0} fullWidth sx={{height: 40}} variant='outlined'>Previous</Button>
                <Button onClick={handleNext} disabled={currentQuestion === questions.length - 1} fullWidth sx={{height: 40}} variant='contained'>Next</Button>
                {currentQuestion === questions.length - 1 && (
                    <Button variant="contained" onClick={handleFinish} fullWidth sx={{height: 40}}>Finish</Button>
                )}
            </Box>
            </Box>
        </Box>
    );
};

export default QuizComponent;