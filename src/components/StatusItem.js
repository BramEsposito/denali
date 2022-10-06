import Grid from "@mui/material/Grid";
import { ReactComponent as CheckBoxLargeChecked } from "./CheckBoxLargeChecked.svg";
import { ReactComponent as CheckBoxLargeUnchecked } from "./CheckBoxLargeUnchecked.svg";

export default function StatusItem(props) {
  const cb = props.done ? <CheckBoxLargeChecked /> : <CheckBoxLargeUnchecked />;

  return (
    <Grid container item xs={6}>
      <Grid item xs={2}>
        {cb}
      </Grid>
      <Grid item xs={10}>
        <h4 key="title" style={{ margin: "16px 0", padding: 0 }}>
          {props.title}
        </h4>
        {props.description !== "" && (
          <small key="description">{props.description}</small>
        )}
      </Grid>
    </Grid>
  );
}
