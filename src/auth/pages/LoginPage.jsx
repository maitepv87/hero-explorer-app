import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
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
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Link href="#" variant="body2" sx={{ fontSize: "0.875rem" }}>
            Forgot password?
          </Link>
          <Link href="#" variant="body2" sx={{ fontSize: "0.875rem" }}>
            Don't have an account? Register
          </Link>
        </Box>
      </Box>
    </Container>
  );
};
