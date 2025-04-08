import { useContext, useState } from "react";
import { NavLink, Link, useNavigate, replace } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Divider,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AuthContext } from "../../auth/context/AuthContext";

{
  /* 
  Use NavLink when you need to highlight the active link.
  Use Link when you don't need to change the style or apply any special logic for when the link is active.
*/
}

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { authState, logout } = useContext(AuthContext);
  const { user } = authState;

  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    logout();
    navigate("/auth/login", { replace: true });
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#1e1e1e", padding: "5px 20px" }}
    >
      <Toolbar>
        {/* IconButton for mobile menu */}
        <IconButton
          color="inherit"
          aria-label="menu"
          edge="start"
          onClick={toggleDrawer}
          sx={{ display: { xs: "block", md: "none" }, mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* NavLinks for desktop */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button
            color="inherit"
            component={NavLink}
            to="/home"
            sx={{
              fontSize: "16px",
              textTransform: "uppercase",
              transition: "0.3s",
              "&:hover": { color: "#ffcc00" },
              "&.active": {
                color: "#ffcc00", // active
              },
            }}
          >
            {"Home"}
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/marvel"
            sx={{
              fontSize: "16px",
              textTransform: "uppercase",
              transition: "0.3s",
              "&:hover": { color: "#ffcc00" },
              "&.active": {
                color: "#ffcc00", // active
              },
            }}
          >
            {"Marvel"}
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/dc"
            sx={{
              fontSize: "16px",
              textTransform: "uppercase",
              transition: "0.3s",
              "&:hover": { color: "#ffcc00" },
              "&.active": {
                color: "#ffcc00", // active
              },
            }}
          >
            {"DC"}
          </Button>
        </Box>

        {/* User and Logout */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#ffcc00" }}
          >
            {user?.userName}
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ bgcolor: "#ffcc00", height: "30px" }}
          />
          <Button
            color="inherit"
            sx={{
              backgroundColor: "#ffcc00",
              color: "#1e1e1e",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#e6b800" },
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>

      {/* Drawer for mobile menu) */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: "20px",
            }}
          >
            <Button
              component={Link}
              to="/home"
              color="inherit"
              sx={{ textTransform: "uppercase" }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/marvel"
              color="inherit"
              sx={{ textTransform: "uppercase" }}
            >
              Marvel
            </Button>
            <Button
              component={Link}
              to="/dc"
              color="inherit"
              sx={{ textTransform: "uppercase" }}
            >
              DC
            </Button>

            <Divider />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: { xs: "center", sm: "space-between" },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#ffcc00",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {user?.userName}
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ bgcolor: "#ffcc00", height: "1px" }}
              />
              <Button
                color="inherit"
                sx={{
                  backgroundColor: "#ffcc00",
                  color: "#1e1e1e",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#e6b800" },
                  marginTop: { xs: "10px", sm: 0 },
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};
