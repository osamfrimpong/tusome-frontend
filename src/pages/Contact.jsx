import React from 'react';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';


const Contact = () => {
const theme = useTheme();


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <div style={{ marginTop: '40px' }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Contact Us
            </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
            variant="contained" 
            fullWidth
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Contact;