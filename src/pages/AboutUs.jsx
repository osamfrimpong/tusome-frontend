import React from 'react';
import Constants from '../utils/constants';
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography, Box, Divider, } from '@mui/material';

const AboutUs = () => {
  const theme = useTheme();
  
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h2" component="h2" gutterBottom>
                About Us
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" component="h3" gutterBottom>
                Welcome to Tusome
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                At Tusome, we believe in the power of seamless collaboration and 
                sharing of knowledge. Our platform is dedicated to providing secure 
                and user-friendly environment for students to learn.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" component="h3" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" gutterBottom>
               At Tusome, our mission is to empower students and educators by providing
               easy access to a comprehensive database of past exam questions. Our goal 
               is to foster academicexcellence, boost confidence, and support lifeong learning
               by making high-quality educational materials readily available to everyone
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" component="h3" gutterBottom>
                What Sets Us Apart
              </Typography>
              <Typography variant="body1" gutterBottom>
              1.<b> User-Friendly Interface:</b> Our design is an intuitive and easy-to-navigate interface
               with clear categorization and search functionality. <br/>
               2. <b>Detailed Solutions:</b> we provide step-by-step solutions and explanations for each question,
                helping users understand the concepts behind the answers.<br/>
                3.<b> Regular Updates:</b> We ensure the database is frequently updated with the latest exam papers and solutions.<br/>
                4. <b>Mobile Compatibility:</b> We ensure the app is fully functional on mobile devices to provide flexibility and accessibility.<br/>
                5. <b>Security and Privacy:</b> We ensure robust data protection measures to safeguard user information and privacy.


              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" component="h3" gutterBottom>
                How It Works
              </Typography>
              <Typography variant="body1" gutterBottom>
                1. Create Easily create an account <br/>
                2. Browse 

              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
            </Grid>
            <Box sx={{  pt: 3, mt: 3 }}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            &copy; {new Date().getFullYear()} Tusome. All rights reserved.
          </Typography>
            </Box>
          </Grid>
        </Container>
    );
  }

export default AboutUs;