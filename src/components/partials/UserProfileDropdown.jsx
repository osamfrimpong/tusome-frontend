import React from "react";
import { Button, Menu, MenuItem, IconButton, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../pages/auth/useAuth";
import Constants from "../../utils/constants";

function UserProfileDropdown() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleProfileMenuClose();
    navigate("/login");
  };

  return (
    <>
      {user ? (
        <>
          <IconButton
            onClick={handleProfileMenuOpen}
            size="large"
            sx={{ color: "#fff" }}
          >
            <Avatar
              sx={{ bgcolor: "#fff", color: Constants.CUSTOM_COLORS.MAIN_TEAL }}
            >
              {user.name ? user.name.charAt(0).toUpperCase() : ""}
            </Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleProfileMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            getContentAnchorEl={null}
          >
            <MenuItem onClick={() => navigate("/dashboard")}>
              User Dashboard
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <Button
          variant="outlined"
          disableElevation
          disableRipple
          onClick={() => navigate("/login")}
          sx={{
            backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL,
            color: "#fff",
            textTransform: "none",
            height: "40px",
            borderRadius: "0px",
            "&:hover": {
              backgroundColor: Constants.CUSTOM_COLORS.MAIN_TEAL,
            },
          }}
        >
          Login/Register
        </Button>
      )}
    </>
  );
}

export default UserProfileDropdown;
