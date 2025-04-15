import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Link,
} from "@mui/material";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    login("Maite PV");
    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          padding: 3,
          borderRadius: "8px",
          boxShadow: 3,
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        <Typography variant="h4" textAlign="center" sx={{ fontWeight: "bold" }}>
          Login
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={email}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={password}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: "10px" }}
          onClick={handleLogin}
        >
          Login
        </Button>

        {/* Other actions */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 2,
          }}
        >
          <Link
            component={RouterLink}
            to="/auth/register"
            href="#"
            variant="body2"
            sx={{ fontSize: "0.875rem" }}
          >
            Don't have an account? Register
          </Link>
        </Box>
      </Box>
    </Container>
  );
};
