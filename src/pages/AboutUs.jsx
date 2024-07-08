import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, AppBar, Toolbar, Container } from '@mui/material';
import { useTheme } from "@mui/material";
import EdmundImg from '../assets/images/Edmund.jpg';
import SchandorfImg from '../assets/images/Schandorf.jpg';
import GraceImg from '../assets/images/Grace.jpg';


function AboutUs() {
  const theme = useTheme();
  const developers = [
    {
      name: 'Dr (Med) Schandorf Osam-Frimpong',
      image: SchandorfImg,
      bio: 'Backend Developer'
    },
    {
      name: 'Richard Senyo Gadasu',
      image: 'janeSmithImg',
      bio: 'Backend Developer',
    },
    {
      name: 'Grace Letiwa',
      image: GraceImg,
      bio: 'Frontend Developer',
    },
    {
      name: 'Edmund Adanor Mensah',
      image: EdmundImg,
      bio: 'Frontend Developer',
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: 2, backgroundColor: theme.palette.background.default, overflowY: 'auto' }}>
      <Typography variant="h3" component="div" sx={{ mb: 3, mt:3 }}>
        About Us
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2}}>
        {developers.map((developer, index) => (
          <Grid item key={index} xs={12} sm={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image={developer.image}
                alt={developer.name}
                sx={{ objectFit: 'cover', height: '100%', borderRadius: '16px' }}
              />
              <CardContent>
                <Typography variant="h5">{developer.name}</Typography>
                <Typography variant="body2">{developer.bio}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Container maxWidth="md" sx={{ py: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <div style={{ marginTop: '40px' }}>
              </div>
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
                2. Browse Through Questions <br/>
                3. Solve Questions and have Fun

              </Typography>
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
        </Container>
    </Box>
    
  );
}

export default AboutUs;
