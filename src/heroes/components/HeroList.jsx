import React, { useMemo } from "react";
import { Grid } from "@mui/material";
import { HeroCard } from "../components";
import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  console.log(atob("aHR0cHM6Ly90bnM0bHBnbXppaXlwbnh4emVsNXNzNW55dTBuZnRvbC5sYW1iZGEtdXJsLnVzLWVhc3QtMS5vbi5hd3MvcmFtcC1jaGFsbGVuZ2UtaW5zdHJ1Y3Rpb25zLw=="));

  return (
    <Grid container spacing={3}>
      {heroes.map((hero) => (
        <Grid xs={12} sm={6} md={4} key={hero.id}>
          <HeroCard hero={hero} />
        </Grid>
      ))}
    </Grid>
  );
};
