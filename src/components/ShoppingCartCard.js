import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import { Styles } from "../Styles";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import ShoppingCartProduct from "./ShoppingCartProduct";
import { Solutions } from "../Content";
import { DenaliContext } from "../App.js";

function setCartContent(context, family, product, amount) {
  const cart = { ...context.cart };
  if (amount === 0 && cart[family] && cart[family][product.code]) {
    delete cart[family][product.code];
  }
  context.setCart(cart);
}

export default function ShoppingCartCard(props) {
  const context = React.useContext(DenaliContext);
  const [active, setActive] = React.useState(props.active || false);

  const solution = Solutions[props.content];

  let products = "";

  if (active) {
    const productlist = solution.products.map((p) => {
      return (
        <ShoppingCartProduct
          active={active}
          family={props.content}
          product={p}
          key={p.title}
        />
      );
    });

    products = (
      <div>
        <hr />
        {productlist}
      </div>
    );
  }

  React.useMemo(() => {
    if (!active) {
      solution.products.forEach((product) => {
        // setCartContent(context, props.content, p, 0);
        const family = props.content;
        const cart = { ...context.cart };
        if (cart[family] && cart[family][product.code]) {
          delete cart[family][product.code];
        }
        if (cart[family] && Object.keys(cart[family]).length === 0) {
          delete cart[family];
        }
        context.setCart(cart);
      });
    }
  }, [active]);

  return (
    <Card sx={Styles.shoppingCartCard} elevation={0}>
      <CardContent>
        <Box onClick={(e) => setActive(!active)}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <h3>{solution.title}</h3>
            <Checkbox
              onClick={(e) => setActive(!active)}
              size="large"
              color="success"
              sx={{ display: "block" }}
              checked={active}
            />
          </Box>
          <p>{solution.summary}</p>
          <div style={{ display: "flex", justifyContent: "right" }}>
            <Button variant="outlined">Meer info</Button>
          </div>
        </Box>
        {products}
      </CardContent>
    </Card>
  );
}
