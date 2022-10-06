import * as React from "react";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import { Styles } from "../Styles";

import TextField from "@mui/material/TextField";
import { DenaliContext } from "../App.js";

export default function ShoppingCartProduct(props) {
  const context = React.useContext(DenaliContext);

  const startAmount =
    context.cart[props.family] && props.active
      ? context.cart[props.family][props.product.code]
      : 0;

  const [amount, setAmount] = React.useState(startAmount || 0);

  const handleChange = (event) => {
    setAmount(event.target.value);

    const product = props.product.code;
    const amount = event.target.value;
    const family = context.cart[props.family] || {};
    family[product] = amount;
    if (event.target.value === 0) delete family[product];
    const cart = { ...context.cart, [props.family]: family };
    if (
      event.target.value === 0 &&
      Object.keys(cart[props.family]).length === 0
    ) {
      delete cart[props.family];
    }
    context.setCart(cart);
  };

  const amounts = [
    { value: 0, label: "geen" },
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
    { value: 11, label: 11 },
    { value: 12, label: 12 },
    { value: 13, label: 13 },
    { value: 14, label: 14 },
    { value: 15, label: 15 },
    { value: 16, label: 16 },
    { value: 17, label: 17 },
    { value: 18, label: 18 },
    { value: 19, label: 19 },
    { value: 20, label: 20 },
    { value: 21, label: 21 },
    { value: 22, label: 22 },
    { value: 23, label: 23 },
    { value: 24, label: 24 },
    { value: 25, label: 25 },
    { value: "more", label: "meer dan 25" }
  ];

  return (
    <Grid
      sx={Styles.shoppingCartProduct}
      container
      item
      spacing={2}
      rowSpacing={1}
      xs={12}
    >
      <Grid item xs={3}>
        <img src="https://via.placeholder.com/150?text=icon" alt="icon" />
      </Grid>
      <Grid
        item
        container
        xs={7}
        direction="row"
        justifyContent="left"
        alignItems="center"
      >
        <Grid item>
          <h4>{props.product.title}</h4>
          <p>{props.product.description}</p>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          fullWidth
          id="standard-select-currency"
          select
          value={amount}
          onChange={handleChange}
          helperText=" "
          variant="standard"
          padding={2}
          className="productAmount"
        >
          {amounts.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
}
