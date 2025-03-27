import React, { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  CardMedia,
} from "@mui/material";
import SupervisedUserCircle from "@mui/icons-material/SupervisedUserCircle";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams(); // Get the parameter from the URL

  const hero = useMemo(() => getHeroById(id), [id]);

  if (!hero) {
    return <Navigate to="/home" />;
  }

  return (
    <Box sx={{ my: 5, px: 3 }}>
      <Card sx={{ display: "flex", gap: 3 }}>
        <CardMedia
          component="div"
          sx={{
            backgroundColor: "lightgrey",
            height: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SupervisedUserCircle sx={{ fontSize: 250, color: "#7a8fa3" }} />
        </CardMedia>

        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h4" component="h3">
            {hero.superhero}
          </Typography>
          <List sx={{ marginTop: 2 }}>
            <ListItem>
              <ListItemText primary="Alter Ego" secondary={hero.alter_ego} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Publisher" secondary={hero.publisher} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="First Appearance"
                secondary={hero.first_appearance}
              />
            </ListItem>
          </List>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Characters
          </Typography>
          <Typography>{hero.characters}</Typography>

          {/* <Button
            variant="outlined"
            sx={{ marginTop: 2 }}
            onClick={handleNavigateBack}
          >
            Back
          </Button> */}
        </CardContent>
      </Card>
    </Box>
  );
};
