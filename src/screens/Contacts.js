import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import FooterNavigation from "../components/FooterNavigation.js";

export default function Contacts() {
  return (
    <Grid container>
      <Grid item xs={8}>
        <p>
          Om uw aanvraag af te werken moeten nog een aantal formaliteiten in
          orde gebracht worden.
        </p>
        <h3>Tekengemachtigde</h3>
        <p>Voor het ondertekenen van het contract</p>
        <TextField
          required
          id="email"
          name="email"
          label="Email adres tekengemachtigde *"
          autoComplete="email"
          variant="outlined"
          fullWidth
        />
        <h3>Financieel gemachtigde</h3>
        <p>Voor het ondertekenen van de SEPA registratie</p>
        <TextField
          required
          id="email2"
          name="email2"
          label="Email adres tekengemachtigde *"
          autoComplete="email"
          variant="outlined"
          fullWidth
        />

        <h3>Emailadres facturatie</h3>
        <p>
          Indien u uw facturen op een ander email adres wilt laten toekomen kan
          u dat hier toevoegen
        </p>
        <TextField
          required
          id="email3"
          name="email3"
          label="Email adres tekengemachtigde *"
          autoComplete="email"
          variant="outlined"
          fullWidth
        />
        <FooterNavigation />
      </Grid>
    </Grid>
  );
}
