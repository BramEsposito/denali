import React from "react";
import Grid from "@mui/material/Grid";
import SideCart from "../components/SideCart";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

import { DenaliContext } from "../App.js";

import ShoppingCartCard from "../components/ShoppingCartCard";

export default function ShoppingCart() {
  const context = React.useContext(DenaliContext);
  const [error, setError] = React.useState(null);

  let cart = Object.keys(context.cart).map((f) => {
    const ps = Object.keys(context.cart[f]).map((p) => (
      <li key={p}>
        {p} {context.cart[f][p]}
      </li>
    ));
    return (
      <li key={f}>
        {f} <ul>{ps}</ul>
      </li>
    );
  });

  if (cart.length == 0) {
    cart = "maak een keuze";
  } else {
  }

  const sideCartContent = [
    <h3 key="title">Uw selectie</h3>,
    <ul key="cart_content">{cart}</ul>,
    <Button
      key="nextbutton"
      variant="contained"
      size="large"
      onClick={(e) => continueCheck()}
      sx={{ width: "100%" }}
    >
      Volgende
    </Button>
  ];

  function continueCheck() {
    const solutions = Object.values(context.cart);
    if (solutions.length > 0) {
      const total = solutions
        .map((s) =>
          Object.values(s).reduce((accumulator, value) => {
            return accumulator + value;
          }, 0)
        )
        .reduce((f_accumulator, f_value) => {
          return f_accumulator + f_value;
        }, 0);
      if (total > 0) context.nextScreen();
    }
    setError("Voeg aub minstens 1 product toe");
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
        <Grid item xs={12}>
          {error && <Alert severity="error">{error}</Alert>}
          <ShoppingCartCard active={context.solution.fuel} content="fuel" />
          <ShoppingCartCard
            active={context.solution.chargepass}
            content="chargepass"
          />
          <ShoppingCartCard
            active={context.solution.homechargers}
            content="homechargers"
          />
          <ShoppingCartCard
            active={context.solution.officechargers}
            content="officechargers"
          />
        </Grid>
      </Grid>
      <SideCart children={sideCartContent} check={continueCheck} />
    </Grid>
  );
}
