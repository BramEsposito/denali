import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function WelcomeToQ8() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <h1>
          Welkom bij Q8!{" "}
          <span role="img" aria-label="Confetti">
            🎉
          </span>
        </h1>
        <h3>We versturen uw kaart(en).</h3>
        <p>
          Uw kaart(en) worden aangemaakt en naar het vestigingsadres van uw
          onderneming gestuurd. De verzending kan tot 7 weekdagen in beslag
          nemen.
        </p>
        <p>
          Neem intussen de tijd om onze <a href="#">Q8 Liberty-app</a> te
          installeren!
        </p>
        <h3>Toegang tot de Q8 Driver portalen</h3>
        <p>
          Uw logingegevens voor de portalen: <a href="#">Q8 Liberty web</a> en{" "}
          <a href="#">nexxtmove</a> worden aangemaakt. U ontvangt die in de
          komende uren via e-mail.
        </p>
        <p>
          In deze portalen kan u uw kaarten blokkeren bij diefstal en de
          configuratie van de kaarten aanpassen.
        </p>
        <h3>De installatie van uw laadpal(en) wordt voorbereid</h3>

        <p>
          Onze installateur zal, 14 dagen voor de verwachte leverdatum van uw
          wagen, contact met u opnemen voor een online audit en - zo nodig - een
          audit ter plaatse.
        </p>
      </Grid>
    </Grid>
  );
}
