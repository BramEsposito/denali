import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Styles } from "../Styles";
import { DenaliContext } from "../App.js";

import TextField from "@mui/material/TextField";

export default function SignContract() {
  const context = React.useContext(DenaliContext);
  function next() {
    context.nextScreen();
  }

  return (
    <Grid container spacing={2} rowSpacing={1}>
      <Grid item xs={8}>
        <p>
          Nostrud laboris aliquip magna magna nulla culpa dolor ut nostrud culpa
          eiusmod ex et nisi cupidatat sed proident consequat id velit
          adipiscing non lorem mollit aliquip id veniam laboris ipsum ad
          laborum.
        </p>
        <p>Let op: u moet gemachtigd zijn om te tekenen voor uw organisatie</p>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Card sx={Styles.shoppingCartCard} elevation={0}>
          <CardContent>
            <h3>Teken snel met Docusign</h3>
            <Button
              variant="contained"
              size="large"
              onClick={(e) => next()}
              sx={{
                width: "100%",
                fontSize: "22px",
                padding: "25px",
                marginBottom: "10px",
                backgroundColor: "#cccccc",
                color: "black",
                boxShadow: "none"
              }}
            >
              <img
                src="/img/docusign.png"
                alt="tekenen met docusign"
                width="85px"
              />
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={Styles.shoppingCartCard} elevation={0}>
          <CardContent>
            <h3>Teken met de online overheid</h3>
            <Button
              variant="contained"
              size="large"
              onClick={(e) => next()}
              sx={{
                width: "100%",
                fontSize: "22px",
                padding: "25px",
                marginBottom: "10px",
                backgroundColor: "#cccccc",
                color: "black",
                boxShadow: "none"
              }}
            >
              <img
                src="/img/csam.jpg"
                alt="tekenen met de online overheid"
                width="85px"
              />
              &nbsp;Tekenen
            </Button>
          </CardContent>
        </Card>
        <Card sx={Styles.shoppingCartCard} elevation={0}>
          <CardContent>
            <h3>Teken met uw ID</h3>
            <Button
              variant="contained"
              size="large"
              onClick={(e) => next()}
              sx={{
                width: "100%",
                fontSize: "22px",
                padding: "25px",
                marginBottom: "10px",
                backgroundColor: "#cccccc",
                color: "black",
                boxShadow: "none"
              }}
            >
              Tekenen
            </Button>
            <small>Maak een foto van uw ID en laad deze op</small>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={8}>
        <hr />
        <h3>Bent u niet gemachtigd om te tekenen voor uw organisatie?</h3>
        <p>
          Voluptate reprehenderit non eiusmod incididunt ullamco incididunt
          labore ex do exercitation id exercitation esse qui mollit lorem sint
          sed sunt sit minim adipiscing laboris elit.
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
