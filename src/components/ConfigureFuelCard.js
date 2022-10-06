import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Styles } from "../Styles";

function FuelCardRow() {
  const products = [
    "Enkel Diesel",
    "Alle brandstoffen",
    "Alle brandstoffen en olie",
    "Alle brandstoffen, olie en carwash",
    "Alle brandstoffen, olie, carwash en autobenodigdheden",
    "Alle brandstoffen en diensten",
    "Enkel benzines (E95 + E98)"
  ];
  const options = ["PIN", "PIN + KM", "PIN + KM + Voertuigcode"];
  const locations = ["Nationaal-België", "Benelux"];

  return (
    <>
      <Grid item xs={3} style={Styles.tableCell}>
        <TextField fullWidth select variant="outlined" padding={2}>
          {products.map((product) => (
            <MenuItem key={product} value={product}>
              {product}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={3} style={Styles.tableCell}>
        <TextField fullWidth select variant="outlined" padding={2}>
          {locations.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={3} style={Styles.tableCell}>
        <TextField fullWidth variant="outlined" padding={2}></TextField>
      </Grid>
      <Grid item xs={3} style={Styles.tableCell}>
        <TextField fullWidth select variant="outlined" padding={2}>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </>
  );
}

export default function ConfigureFuelCard() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <h3>Uw tankkaarten</h3>
      </Grid>
      <Grid item xs={3} style={Styles.tableCell}>
        <div>Product</div>
      </Grid>
      <Grid item xs={3} style={Styles.tableCell}>
        <div>Locatie</div>
      </Grid>
      <Grid item xs={3} style={Styles.tableCell}>
        <div>Referentie bestuurder</div>
      </Grid>
      <Grid item xs={3} style={Styles.tableCell}>
        <div>Opties</div>
      </Grid>
      <FuelCardRow />
      <FuelCardRow />
    </Grid>
  );
}
