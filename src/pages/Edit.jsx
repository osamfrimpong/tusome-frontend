import React, { useState } from 'react';
import {Box, Grid ,Paper, Typography, TextField, Button, Avatar, FormControl, InputLabel, Select, MenuItem, IconButton,} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from "@mui/material"

const EditProfile = () => {
  const theme = useTheme();


  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    gender: 'male',
    avatarUrl: 'https://example.com/avatar.jpg',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic goes here
    console.log('Form submitted:', formData);
    // You can add logic to update the profile or send the data to a server
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
      <Paper elevation={3} sx={{ padding: 3, maxWidth: 600, margin: 'auto' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Edit Profile
        </Typography>
        <Avatar src={formData.avatarUrl} alt="Profile Picture" sx={{ width: 120, height: 120, margin: '0 auto', marginBottom: 2 }} />
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="avatar-upload"
          type="file"
          onChange={(e) => handleChange({ target: { name: 'avatarUrl', value: URL.createObjectURL(e.target.files[0]) } })}
        />
        <label htmlFor="avatar-upload">
        <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        sx={{ position: 'absolute', top: 150, left: 735 }} // Adjust the position of the IconButton
        >
        <EditIcon />
            </IconButton>
        </label>
        <form onSubmit={handleSubmit}>
          <TextField
            name="fullName"
            label="Full Name"
            variant="outlined"
            fullWidth
            value={formData.fullName}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              label="Gender"
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="bio"
            label="Bio"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={formData.bio}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Save Changes
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default EditProfile;
