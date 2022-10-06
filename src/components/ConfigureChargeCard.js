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
      <Grid item xs={4} style={Styles.tableCell}>
        <TextField fullWidth variant="outlined" padding={2}></TextField>
      </Grid>
      <Grid item xs={4} style={Styles.tableCell}>
        <TextField fullWidth variant="outlined" padding={2}></TextField>
      </Grid>
      <Grid item xs={4} style={Styles.tableCell}>
        <TextField fullWidth variant="outlined" padding={2}></TextField>
      </Grid>
    </>
  );
}

export default function ConfigureChargeCard() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <h3>Uw laadkaarten</h3>
        <p></p>
      </Grid>
      <Grid item xs={4} style={Styles.tableCell}>
        <div>Email</div>
      </Grid>
      <Grid item xs={4} style={Styles.tableCell}>
        <div>Voornaam</div>
      </Grid>
      <Grid item xs={4} style={Styles.tableCell}>
        <div>Achternaam</div>
      </Grid>
      <FuelCardRow key="1" />
      <FuelCardRow key="2" />
    </Grid>
  );
}
