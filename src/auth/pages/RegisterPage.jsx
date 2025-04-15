import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";

export const RegisterPage = () => {
  const onSubmit = (event) => {
    event.preventDefault();
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
          Create account
        </Typography>
        <form onSubmit={onSubmit}>
          <TextField
            label="Full name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            name="displayName"
            value={""}
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            name="email"
            value={""}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            name="password"
            value={""}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              marginTop: 1,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ padding: "10px" }}
              type="submit"
            >
              Create account
            </Button>
          </Box>

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
              to="/auth/login"
              href="#"
              variant="body2"
              sx={{ fontSize: "0.875rem" }}
            >
              Already have an account? Login
            </Link>
          </Box>
        </form>
      </Box>
    </Container>
  );
};
