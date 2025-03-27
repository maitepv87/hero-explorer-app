import React from "react";
import { Typography, Box } from "@mui/material";

export const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f9",
        flexDirection: "column",
        textAlign: "center",
        padding: 3,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "#333333",
          marginBottom: 2,
        }}
      >
        Welcome to Hero Explorer!
      </Typography>
      <Typography
        variant="h6"
        color="textSecondary"
        sx={{
          color: "#555555",
          marginBottom: 3,
        }}
      >
        Explore the world of Marvel and DC, discover your favorite heroes, and
        dive into their stories.
      </Typography>
    </Box>
  );
};
