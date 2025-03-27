import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CardMedia,
} from "@mui/material";
import { SupervisedUserCircle } from "@mui/icons-material";

const CharactersByHero = ({ alter_ego, characters }) => {
  if (alter_ego === characters) return <></>;
  return <Typography variant="body2">{characters}</Typography>;
};

export const HeroCard = ({ hero }) => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardMedia
        component="div"
        sx={{
          backgroundColor: "lightgrey",
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SupervisedUserCircle sx={{ fontSize: 80, color: "#7a8fa3" }} />
      </CardMedia>

      <CardContent>
        <Typography variant="h6" gutterBottom>
          {hero.superhero}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {hero.alter_ego}
        </Typography>

        <CharactersByHero
          characters={hero.characters}
          alter_ego={hero.alter_ego}
        />

        <Typography variant="body2" color="textSecondary">
          First appearance: {hero.first_appearance}
        </Typography>
      </CardContent>
      {/* <Box sx={{ padding: 2, textAlign: "center" }}>
        <Button
          component={Link}
          to={`/hero/${hero.id}`}
          variant="contained"
          color="primary"
        >
          Read More
        </Button>
      </Box> */}
    </Card>
  );
};
