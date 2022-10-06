import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { DenaliContext } from "../App.js";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Colors } from "../Colors";
import { Styles } from "../Styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FooterNavigation from "../components/FooterNavigation.js";

export default function CompanyDetails() {
  return (
    <Grid
      container
      spacing={2}
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid container item spacing={2} rowSpacing={1} xs={8}>
        <Grid item xs={8}>
          <p>
            Volgende adresgegevens hebben we teruggevonden op basis van uw BTW
            nummer:
          </p>
          <Card elevation={0}>
            <CardContent style={Styles.shoppingCartCard}>
              <p>KUWAIT PETROLEUM (Belgium)</p>
              <p>
                Brusselstraat 59 1<br />
                2018 Antwerpen
              </p>
            </CardContent>
          </Card>
          <p style={Styles.secondaryText}>
            Indien uw adres gewijzigd werd, gelieve deze wijziging eerst door te
            geven aan KBO, KVK of VIES.
          </p>

          <p style={Styles.secondaryText}>
            Pas daarna kan u een nieuwe aanvraag doen.
          </p>
        </Grid>
        <FooterNavigation />
      </Grid>
    </Grid>
  );
}
