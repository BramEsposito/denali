import Grid from "@mui/material/Grid";
export default function LandingPageContent(props) {
  return (
    <Grid container>
      <Grid item xs={4}>
        <img src="https://via.placeholder.com/150?text=icon" alt="icon" />
      </Grid>
      <Grid item xs={6}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </Grid>
    </Grid>
  );
}
