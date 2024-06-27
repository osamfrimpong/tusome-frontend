import * as React from 'react';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


function faq() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Accordion>
        <AccordionSummary>
        <div style={{ marginTop: '40px' }}>
          <Typography>Question 1</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Answer 1</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography>Question 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Answer 2</Typography>
        </AccordionDetails>
      </Accordion>
      {/* Add more accordions as needed */}
    </ThemeProvider>
  );
}

export default faq;