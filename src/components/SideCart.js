import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { DenaliContext } from "../App.js";

export default function SideCart(props) {
  const context = React.useContext(DenaliContext);

  function next() {
    // perform check if it was provided in the props
    if (props.check && !props.check()) return false;
    context.nextScreen();
  }

  return (
    <Grid
      container
      item
      spacing={2}
      rowSpacing={1}
      xs={4}
      sx={{ height: "auto", alignSelf: "flex-start" }}
    >
      <Grid item xs={12}>
        <Card
          sx={{
            width: "100%",
            backgroundColor: "rgba(2, 136, 209, 0.12)",
            marginBottom: "15px"
          }}
          raised={false}
          elevation={0}
        >
          <CardContent>{props.children}</CardContent>
        </Card>

        <Button variant="outlined" onClick={(e) => context.prevScreen()}>
          Vorige
        </Button>
      </Grid>
    </Grid>
  );
}
