import React from "react";
import { DenaliContext } from "../App.js";
import Grid from "@mui/material/Grid";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function FooterNavigation(props) {
  const context = React.useContext(DenaliContext);

  function check() {
    // perform check if it was provided in the props
    if (props.check && !props.check()) return false;
    context.nextScreen();
  }

  return (
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
        <Button variant="contained" onClick={(e) => check()}>
          Volgende
        </Button>
      </Stack>
    </Grid>
  );
}
