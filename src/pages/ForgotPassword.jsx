import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Link, CssBaseline } from "@mui/material";
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption"
import { useTheme } from "@mui/material"
import Box from "@mui/material/Box"






const ForgotPassword = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to send password reset email
    fetch('/api/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
     .then((response) => response.json())
     .then((data) => {
        if (data.success) {
          setSuccess(true);
        } else {
          setError(data.error);
        }
      })
     .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline/>
    <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
       <Avatar sx={{ m: 1, bgcolor: theme }}>
            <EnhancedEncryptionIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Forgot Password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            margin="normal"
          />
          {error && (
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          )}
          {success && (
            <Typography variant="body2" color="primary">
              Password reset email sent successfully!
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
          >
            Send Password Reset Email
          </Button>
        </form>
        <Grid item>
        <Typography variant="body2">
          Don't have an account? <Link href="/signup">Sign up</Link>
        </Typography>
        </Grid>
        </Box>
    </Box>
    </Container>
  );
};

export default ForgotPassword;