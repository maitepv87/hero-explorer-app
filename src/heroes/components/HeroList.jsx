import React, { useMemo } from "react";
import { Grid } from "@mui/material";
import { HeroCard } from "../components";
import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <Grid container spacing={3}>
      {heroes.map((hero) => (
        <Grid item xs={12} sm={6} md={4} key={hero.id}>
          <HeroCard hero={hero} />
        </Grid>
      ))}
    </Grid>
  );
};
