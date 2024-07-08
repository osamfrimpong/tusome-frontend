import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import { useAuth } from "../../pages/auth/useAuth"; // Import useAuth hook
import Card from "@mui/material/Card";
import Constants from "../../utils/constants";

export default function SignUp() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the useAuth hook
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fullName = data.get("fullName");
    const email = data.get("email");
    const password = data.get("password");
    // const allowExtraEmails = data.get("allowExtraEmails") === "on";

    if (!fullName || !email || !password) {
      setError("All fields are required");
      return;
    }

    const formData = {
      name: fullName,
      email,
      password,
    };

    try {
      const response = await axios.post(
        `${Constants.API_BASE_URL}/register`,
        formData
      );
      console.log(response);
      login(response.data); // Call login function with response data
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Registration failed", error);
      setError("Registration failed. Please check your details and try again.");
    }
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{ alignContent: "center", height: "100vh" }}
    >
      <Card sx={{ padding: 4, backgroundColor: theme.palette.secondary.main }}>
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <TextField
              autoComplete="given-name"
              name="fullName"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              autoFocus
              error={Boolean(error)}
              sx={{ mb: 2 }}
            />

            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              error={Boolean(error)}
              sx={{ mb: 2 }}
            />

            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              error={Boolean(error)}
              sx={{ mb: 2 }}
            />

            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              error={Boolean(error)}
              sx={{ mb: 2 }}
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
              Sign Up
            </Button>
            <Button
            type="button"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
            onClick={() => navigate("/")}
          >
            Back
          </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                mt: 2,
              }}
            >
              <Typography>Already have an account? </Typography>
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                }}
              >
                Sign In
              </Link>
            </Box>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
