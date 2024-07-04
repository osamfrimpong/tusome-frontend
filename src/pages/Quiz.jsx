import React, { useState } from 'react';
import { Box, Button, Container, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import Constants from '../utils/constants';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'Madrid', 'London'],
    correctAnswer: 'Paris'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    correctAnswer: 'Mars'
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
    correctAnswer: 'Leonardo da Vinci'
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    correctAnswer: 'Pacific Ocean'
  },
  {
    question: 'Which is the longest river in the world?',
    options: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'],
    correctAnswer: 'Nile'
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Mark Twain'],
    correctAnswer: 'William Shakespeare'
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmitAnswer = () => {
    const correctAnswer = quizData[currentQuestion].correctAnswer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setScore(0);
    setShowScore(false);
  };

  return (
    <Container maxWidth="sm">
      {!showScore ? (
        <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Quiz
          </Typography>
          <Typography variant="body1" gutterBottom>
            Question {currentQuestion + 1} of {quizData.length}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {quizData[currentQuestion].question}
          </Typography>
          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <RadioGroup aria-label="quiz" name="quiz" value={selectedAnswer} onChange={handleOptionChange}>
              {quizData[currentQuestion].options.map((option, index) => (
                <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          </FormControl>
          <Button
            variant="contained"
            onClick={handleSubmitAnswer}
            sx={{ mt: 3, backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL, color: Constants.CUSTOM_COLORS.WHITE }}
          >
            {currentQuestion === quizData.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      ) : (
        <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Quiz Result
          </Typography>
          <Typography variant="h6" gutterBottom>
            Your score: {score} / {quizData.length}
          </Typography>
          <Button
            variant="contained"
            onClick={handleRestartQuiz}
            sx={{ mt: 3, backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL, color: Constants.CUSTOM_COLORS.WHITE }}
          >
            Restart Quiz
          </Button>
        </Box>
      )}
    </Container>
  );
}

export default Quiz;
