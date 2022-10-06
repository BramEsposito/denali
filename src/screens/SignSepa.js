import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { DenaliContext } from "../App.js";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import TextField from "@mui/material/TextField";

export default function SignSepa() {
  const context = React.useContext(DenaliContext);
  return (
    <Grid container spacing={2} rowSpacing={1}>
      <Grid item xs={8}>
        <p>
          Nostrud laboris aliquip magna magna nulla culpa dolor ut nostrud culpa
          eiusmod ex et nisi cupidatat sed proident consequat id velit
          adipiscing non lorem mollit aliquip id veniam laboris ipsum ad laborum
          sint ea sint exercitation est cupidatat irure in sit id laboris
          voluptate reprehenderit non eiusmod incididunt ullamco incididunt
          labore ex do exercitation id exercitation esse qui mollit lorem sint
          sed sunt sit minim adipiscing laboris elit.
        </p>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Rekening</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="zakelijk"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="zakelijk"
              control={<Radio />}
              label="Ik betaal met een zakelijke rekening"
            />
            <FormControlLabel
              value="prive"
              control={<Radio />}
              label="Ik betaal met een privé rekening"
            />
          </RadioGroup>
        </FormControl>

        <p>Wenst u uw facturen te ontvangen op een facturatie adres?</p>
        <TextField
          required
          id="vatNumber"
          name="vatNumber"
          label="Email adres facturatie"
          autoComplete="vatNumber"
          variant="outlined"
          fullWidth
        />
        <br />
        <Button
          variant="contained"
          size="large"
          onClick={(e) => context.nextScreen()}
          sx={{ marginTop: "16px" }}
        >
          Domiciliëring registreren
        </Button>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={8}>
        <hr />
        <h3>Heeft u geen toegang tot de rekening van uw organisatie?</h3>
        <p>
          Nostrud laboris aliquip magna magna nulla culpa dolor ut nostrud culpa
          eiusmod ex et nisi cupidatat sed proident consequat id velit
          adipiscing non lorem mollit aliquip id veniam laboris ipsum ad laborum
          sint ea sint exercitation est cupidatat irure in sit id laboris
          voluptate reprehenderit non eiusmod incididunt ullamco incididunt
          labore ex do exercitation id exercitation esse qui mollit lorem sint
          sed sunt sit minim adipiscing laboris elit.
        </p>
        <p>
          Voer het email-adres in van een persoon in uw organisatie die toegang
          heeft tot de rekeningen
        </p>
        <Grid container item spacing={2} rowSpacing={1} xs={12}>
          <Grid item xs={8}>
            <TextField
              required
              id="vatNumber"
              name="vatNumber"
              label="Email adres"
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
              onClick={(e) => ""}
            >
              verzenden
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
