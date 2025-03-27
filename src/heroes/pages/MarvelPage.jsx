import { Typography, Divider, Box, Container } from "@mui/material";
import { HeroList } from "../components";

export const MarvelPage = () => {
  return (
    <Container>
      {/* Header */}
      <Box sx={{ my: 4, textAlign: "left" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#ffcc00" }}>
          Marvel Heroes
        </Typography>
        <Divider
          sx={{
            bgcolor: "#ffcc00",
            height: 4,
            width: "50%",
            alignSelf: "flex-start",
            my: 2,
          }}
        />
      </Box>

      {/* List */}
      <HeroList publisher="Marvel Comics" />
    </Container>
  );
};
