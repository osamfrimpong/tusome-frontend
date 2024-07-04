import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, CircularProgress, CssBaseline, Box } from '@mui/material';
import { useTheme } from "@mui/material"
import Container from "@mui/material/Container"


const ChangePassword = () => {
    const theme = useTheme();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      // Call API to change password
      const response = await fetch('/api/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ oldPassword, newPassword, confirmPassword }),
      });
      const data = await response.json();
      if (data.success) {
        // Password changed successfully
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setError(null);
      } else {
        // Error changing password
        setError(data.error);
      }
    } catch (error) {
      setError('An error occurred while changing password');
    } finally {
      setLoading(false);
    }
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
         <Typography variant="h5" gutterBottom>
          Change Password
        </Typography>
        <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}
        >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Old Password"
                type="password"
                value={oldPassword}
                onChange={(event) => setOldPassword(event.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="New Password"
                type="password"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Confirm New Password"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                fullWidth
              />
            </Grid>
            {error && (
              <Grid item xs={12}>
                <Typography color="error">{error}</Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={loading}
              >
                {loading? (
                  <CircularProgress size={24} />
                ) : (
                  'Change Password'
                )}
              </Button>
            </Grid>
          </Grid>
        </form>
        </Box>
      </Box>
    </Container>
  );
};

export default ChangePassword;