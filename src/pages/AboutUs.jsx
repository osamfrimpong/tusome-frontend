import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, AppBar, Toolbar } from '@mui/material';
import { useTheme } from "@mui/material";
import EdmundImg from '../assets/images/Edmund.jpg';

function AboutUs() {
  const theme = useTheme();
  const developers = [
    {
      name: 'Dr (Med) Schandorf Osam-Frimpong',
      image: 'johnDoeImg',
      bio: 'Backend Developer'
    },
    {
      name: 'Richard Senyo Gadasu',
      image: 'janeSmithImg',
      bio: 'Backend Developer',
    },
    {
      name: 'Grace Letiwa',
      image: 'bobJohnsonImg',
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
      <Grid container spacing={2} sx={{ mt: 2 }}>
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
    </Box>
  );
}

export default AboutUs;
