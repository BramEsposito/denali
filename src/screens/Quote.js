import React from "react";
import Grid from "@mui/material/Grid";

import SideCart from "../components/SideCart";
import Button from "@mui/material/Button";
import { Solutions } from "../Content";
import { DenaliContext } from "../App.js";

export default function Quote() {
  const context = React.useContext(DenaliContext);

  const quotecontent = Object.keys(Solutions).map((k) => {
    if (context.cart[k] && Object.keys(context.cart[k]).length > 0) {
      // TODO: check if key is in selection
      const s = Solutions[k];
      return <img src={s.quote} alt={k} key={k} />;
    }
    return "";
  });

  const cart = Object.keys(context.cart).map((f) => {
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

  const sideCartContent = [
    <Button
      key="mailbutton"
      variant="contained"
      size="large"
      onClick={(e) => ""}
      sx={{ width: "100%" }}
    >
      Offerte Emailen
    </Button>,
    <h3 key="title">Uw selectie</h3>,
    <ul key="cart_content">{cart}</ul>,
    <p>Gaat u akkoord met deze offerte?</p>,
    <p>Plaats dan uw bestelling:</p>,
    <Button
      key="nextbutton"
      variant="contained"
      size="large"
      onClick={(e) => context.nextScreen()}
      sx={{ width: "100%" }}
    >
      Bestellen
    </Button>
  ];

  return (
    <Grid
      container
      spacing={2}
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={8}>
        <p>
          Veniam tempor nulla laborum eiusmod laborum cillum incididunt minim
          voluptate magna aute incididunt et enim laborum consequat aliqua
          consequat ad aliquip velit cupidatat sed tempor enim ullamco et
          officia elit id ipsum consectetur aute sed aliquip sit pariatur do eu
          duis qui aliqua non deserunt do dolor sed culpa incididunt
          reprehenderit.
        </p>
        <p>
          Ut velit esse proident quis aliqua elit non incididunt exercitation
          non sint amet et nostrud ad eiusmod aute culpa ipsum cupidatat nostrud
          fugiat deserunt cupidatat aliqua consequat lorem minim proident
          pariatur deserunt minim incididunt cillum magna minim sint eu sunt
          exercitation est do nulla sint reprehenderit mollit.
        </p>
        {quotecontent}
      </Grid>
      <SideCart children={sideCartContent} />
    </Grid>
  );
}
