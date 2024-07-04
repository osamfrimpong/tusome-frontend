import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthCheck = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "https://tusome-06769d862471.herokuapp.com/api/auth-check",
          {
            withCredentials: true, // Include cookies in the request
          }
        );
        setIsAuthenticated(response.data.authenticated);
        if (!response.data.authenticated) {
          navigate("/login");
        }
      } catch (error) {
        console.error("Authentication check failed", error);
        setIsAuthenticated(false);
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  if (isAuthenticated === null) {
    return <p>Loading...</p>; // Show a loading message or spinner while checking authentication
  }

  return isAuthenticated ? children : null;
};

export default AuthCheck;
