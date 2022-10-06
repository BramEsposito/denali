import React from "react";
import Grid from "@mui/material/Grid";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import FooterNavigation from "../components/FooterNavigation.js";
import { DenaliContext } from "../App.js";

import ConfigureHomeCharger from "../components/ConfigureHomeCharger.js";

export default function ConfigureChargers() {
  const context = React.useContext(DenaliContext);

  const solutions = ["fuel", "chargepass", "homechargers"];

  const configurations = {
    homechargers: <ConfigureHomeCharger />
  };

  const configure = [];

  for (let solution of solutions) {
    if (
      context.cart[solution] &&
      Object.keys(context.cart[solution]).length > 0
    ) {
      configure.push(configurations[solution]);
    }
  }

  return (
    <div>
      {configure}
      <Grid item xs={12} sx={{ marginTop: "15px" }}>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button variant="outlined" onClick={(e) => context.prevScreen()}>
            Vorige
          </Button>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button variant="contained" onClick={(e) => context.nextScreen()}>
              Vul later aan
            </Button>
            <Button variant="contained" onClick={(e) => context.nextScreen()}>
              Volgende
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </div>
  );
}
