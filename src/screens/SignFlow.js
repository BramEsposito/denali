import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { DenaliContext } from "../App.js";

export default function SignFlow() {
  const context = React.useContext(DenaliContext);

  function next() {
    context.nextScreen();
  }

  return (
    <div>
      <h1>Tekenflow van de toeleverancier</h1>
      <p>Hier komen de stappen van de gekozen teken-technologie</p>
      <Button
        variant="outlined"
        size="large"
        onClick={(e) => context.prevScreen()}
      >
        Vorige
      </Button>
      <Button
        variant="contained"
        size="large"
        onClick={(e) => next()}
        sx={{ marginLeft: "16px" }}
      >
        Volgende
      </Button>
    </div>
  );
}
