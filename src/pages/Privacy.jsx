import React from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



function Privacy() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md"
      style={{
        overflowY: 'auto',
        height: '100vh',
        padding:'20px',
        boxSizing:'border-box',
      }}
      >
        <div style={{ marginTop: '40px' }}>
        <Typography variant="h2" gutterBottom>
          Privacy Policy
        </Typography>
        </div>
        <Typography variant="body1" gutterBottom>
          This privacy policy outlines how we collect, use, and protect your personal information.
        </Typography>
        <Typography variant="body1" gutterBottom>
          We collect personal information when you interact with our website, such as your name, email address, and other contact information.
        </Typography>
        <Typography variant="body1" gutterBottom>
          We use your personal information to provide you with our services, to communicate with you, and to improve our website.
        </Typography>
        <Typography variant="body1" gutterBottom>
          We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure.
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default Privacy;