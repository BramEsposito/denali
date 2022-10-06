import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FooterNavigation from "../components/FooterNavigation.js";

export default function PersonalInfo() {
  const [error, setError] = React.useState(null);

  function check() {
    if (true) {
      // TODO: check if info has been entered
      return true;
    }
    setError("Wilt u aub eerst uw gegevens invullen.");
    return false;
  }

  return (
    <Grid
      container
      spacing={2}
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid container item spacing={2} rowSpacing={1} xs={8}>
        {error && (
          <Grid item xs={12}>
            <Alert severity="error">{error}</Alert>
          </Grid>
        )}
        <Grid item xs={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Voornaam"
            autoComplete="given-name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Achternaam"
            gi="family-name"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            autoComplete="email"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Telefoonnummer"
            autoComplete="phone-number"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox />}
            label={
              <>
                <span>Ik heb kennis genomen van het</span>{" "}
                <a href="https://www.q8.be/nl/privacybeleid" target="_blank">
                  Privacybeleid
                </a>
              </>
            }
          />
        </Grid>
        <FooterNavigation check={() => check()} />
      </Grid>
      <Grid container item spacing={2} rowSpacing={1} xs={4}>
        <Grid item xs={12} sx={{ backgroundColor: "#F6F8FF" }}>
          <h4>Heeft u een promo code?</h4>
          <Button variant="outlined">Promocode toevoegen</Button>
          <p>Call action code of Group code</p>
        </Grid>
      </Grid>
    </Grid>
  );
}
