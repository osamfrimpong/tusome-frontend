import  { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material";
import axios from "axios";
import Card from "@mui/material/Card";
import { useAuth } from "../../pages/auth/useAuth"; // Import useAuth hook
import Constants from "../../utils/constants";

export default function SignIn() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the useAuth hook
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    if (!email || !password) {
      setError("Both email and password are required");
      return;
    }

    const formData = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        `${Constants.API_BASE_URL}/login`,
        formData
      );

      if (response.data.status === "success") {
        console.log(response.data);
        login(response.data); // Call login function with response data
        navigate("/", { replace: true });
      } else {
        console.error("Login failed:", response.data.message);
        setError("Login failed. Please check your credentials and try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <Container component="main" maxWidth="sm" sx={{alignContent: "center", height: "100vh"}}>
      <Card sx={{padding: 4, backgroundColor: theme.palette.secondary.main}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: theme.palette.primary.main }}>
          <AccountBoxIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error={Boolean(error)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={Boolean(error)}
          />
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row", mt: 2 }}>
          <Typography>Don&apos;t have an account?{" "}</Typography>
              <Link to="/signup" style={{textDecoration: "none", fontWeight: 700, color: theme.palette.primary.main }}>
                Sign Up
              </Link>
          </Box>
        </Box>
      </Box>
      </Card>
    </Container>
  );
}
