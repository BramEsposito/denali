import React from "react";
import dayjs from "dayjs";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FooterNavigation from "../components/FooterNavigation.js";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function ConfigureHomeCharger() {
  const [value, setValue] = React.useState();

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      spacing={2}
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid container item spacing={2} rowSpacing={1} xs={8}>
        <Grid item xs={12}>
          <p>
            Om de installatie van uw homecharger te plannen, hebben we extra
            informatie nodig.
          </p>
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Verwachte leverdatum wagen"
              inputFormat="DD/MM/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <br />
          <small>
            Kent u uw verwachte leverdatum nog niet of heeft u deze niet bij de
            hand? <br />U kan deze informatie ook later aanvullen.
          </small>
        </Grid>
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
            label="Last name"
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
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={12}>
            <p>
              Thuis-adres van de medewerker. Dit is het adres waar de
              homecharger geinstalleerd zal worden.
            </p>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="street"
              name="street"
              label="Straat"
              gi="street"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="street"
              name="street"
              label="Extra adresveld"
              gi="street"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              id="zipcode"
              name="zipcode"
              label="Postcode"
              gi="zip-code"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              required
              id="city"
              name="city"
              label="Plaats"
              gi="city"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <p>
              Onze installatie-partner neemt in de komende week contact met u
              op.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
