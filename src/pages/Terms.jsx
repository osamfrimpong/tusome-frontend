import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Container, Grid, Typography, Link, Divider } from '@mui/material';

function Terms (){
const theme = useTheme();

  return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <div style={{ marginTop: '40px' }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Terms & Condition
            </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Last updated: June 26, 2024
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Welcome to Tusome.com! By accessing and using this webite,
              you agree to comply with and and be bound by the following
              terms and conditions. If you do not agree to these terms, 
              please do not use Tusome.com.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3" component="h3" gutterBottom>
              Acceptance of Terms
            </Typography>
            <Typography variant="body1" gutterBottom>
             By using Tusome.com, you acknowledge that you ahve read, understood,
             and agree to be bound by these terms and Conditions. We reserve the right
             to update, modify, or revise these terms at any time without prior notice.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3" component="h3" gutterBottom>
              User Accounts
            </Typography>
            <Typography variant="body1" gutterBottom>
              To use the Service, you must create a user account. You are
              responsible for maintaining the confidentiality of your account
              and password.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3" component="h3" gutterBottom>
              Intellectual Property
            </Typography>
            <Typography variant="body1" gutterBottom>
              The Service and all content, including but not limited to text,
              images, and software, are the property of Tusome or its
              licensors.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3" component="h3" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              If you have any questions or concerns about these Terms, please
              contact us at <Link href="mailto:support@example.com">support@example.com</Link>.
            </Typography>
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </Container>
  );
}

export default Terms;