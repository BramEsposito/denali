import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { DenaliContext } from "../App.js";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function CompanyInfo() {
  const context = React.useContext(DenaliContext);

  function lookupCompanyByVAT() {
    context.nextScreen();
  }

  return (
    <Grid
      container
      spacing={2}
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={12}>
        <p>
          Voer uw BTW nummer in, wij zullen de gegevens voor uw bedrijf
          opzoeken:
        </p>
      </Grid>
      <Grid container item spacing={2} rowSpacing={1} xs={8}>
        <Grid item xs={8}>
          <TextField
            required
            id="vatNumber"
            name="vatNumber"
            label="BTW nummer"
            autoComplete="vatNumber"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            size="large"
            sx={{ height: "100%" }}
            onClick={(e) => lookupCompanyByVAT()}
          >
            opzoeken
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={(e) => context.prevScreen()}>
              Vorige
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}
