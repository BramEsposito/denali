import * as React from "react";
import Grid from "@mui/material/Grid";
import FooterNavigation from "../components/FooterNavigation.js";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Styles } from "../Styles.js";

import ReactMarkdown from "react-markdown";

import gtc_q8_electric from "../docs/gtc-q8-electric.md";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function TermsConditions() {
  const gtc = [
    { title: "Q8 Liberty Fuel Card", code: "fuel" },
    { title: "Q8 Electric charge card", code: "charge_card" },
    {
      title: "Addendum gegevenswerking Q8 Electric",
      code: "addendum",
      chapters: [
        "1. Gegevensverwerkingsverplichtingen",
        "2. Beschrijving van de gegevensverwerkingsactiviteiten."
      ]
    },
    { title: "Q8 Home Charger", code: "home" },
    { title: "Q8 Office Charger", code: "office" }
  ];

  const [expanded, setExpanded] = React.useState(gtc[0].code);
  const [disabled, setDisabled] = React.useState(0);
  const [terms, setTerms] = React.useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  React.useEffect(() => {
    fetch(gtc_q8_electric)
      .then((response) => response.text())
      .then((text) => {
        setTerms(text);
      });
  }, []);

  const content = gtc.map((g) => (
    <Accordion
      key={g.code}
      expanded={expanded === g.code}
      onChange={handleChange(g.code)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{ backgroundColor: "#DDDDDD" }}
      >
        <Typography sx={{ fontWeight: "bold" }}>{g.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ol>
          <li>Definities</li>
          <li>Deelneming</li>
          <li>Rechten en verplichtingen van de Deelnemer en de Kaarthouders</li>
          <li>Online Diensten</li>
          <li>Het gebruik van de Kaart</li>
          <li>Toegangsmiddelen</li>
          <li>Kredietlimiet</li>
          <li>Kortingen en Geschat Jaarlijks Volume</li>
          <li>Blokkering van Kaarten</li>
          <li>Facturatie</li>
          <li>Betaling</li>
          <li>Verlies – diefstal – misbruik - aansprakelijkheid</li>
          <li>Teruggave van Kaarten – aansprakelijkheid</li>
          <li>Verwerking van persoonsgegevens</li>
          <li>Aansprakelijkheid</li>
          <li>Duur en beëindiging</li>
          <li>Wijzigingen</li>
          <li>Algemeen</li>
        </ol>
      </AccordionDetails>
    </Accordion>
  ));

  function handleScroll(e) {
    const bottom =
      Math.floor(e.target.scrollHeight - e.target.scrollTop) ===
      e.target.clientHeight;

    if (bottom) {
      console.log("Touched the bottom!");
      const newDisabled = disabled + 1;
      setDisabled(newDisabled);
      if (newDisabled < gtc.length) {
        setExpanded(gtc[newDisabled].code);
        e.target.scrollTop = 0;
      }
    }
  }

  return (
    <Grid container spacing={2} rowSpacing={1}>
      <Grid item xs={4}>
        {content}
      </Grid>
      <Grid item xs={8}>
        <Card
          elevation={0}
          sx={{
            width: "100%",
            backgroundColor: "rgba(2, 136, 209, 0.12)",
            maxHeight: "400px",
            overflowY: "scroll"
          }}
          onScroll={handleScroll}
        >
          <CardContent>
            <ReactMarkdown children={terms} />
            <p>
              Cillum duis sit quis ex enim aliquip fugiat est excepteur do
              fugiat exercitation dolore ex elit adipiscing non quis magna
              exercitation duis duis ex anim ad commodo incididunt est cillum
              sunt minim excepteur sint sint ullamco sunt eu lorem qui qui
              occaecat aute esse dolor pariatur irure nostrud culpa do dolore
              aliqua ipsum eiusmod proident quis ad sunt laborum ea veniam
              deserunt aliqua laborum enim minim tempor laborum lorem incididunt
              sed consequat aliqua irure sunt dolor et sed occaecat adipiscing
              aute excepteur dolore sed magna adipiscing eu labore reprehenderit
              aliquip duis ipsum eiusmod sed ut ipsum anim ipsum minim et
              voluptate enim et ad esse nisi id labore esse ea sit duis ad in
              labore dolore amet sint sit id ullamco veniam tempor nostrud magna
              culpa excepteur velit veniam enim enim sunt eu labore enim
              consectetur pariatur enim ipsum excepteur labore aliquip laborum
              cillum aliqua nostrud amet amet eiusmod irure sit qui adipiscing
              culpa do minim aliquip est consectetur ullamco magna incididunt
              aliqua consequat commodo et officia minim consequat cillum officia
              magna sed irure laboris aute minim mollit lorem nostrud amet
              ullamco magna nostrud sed laborum dolor et laborum in enim dolore
              qui commodo laboris anim nostrud voluptate eu sint aliquip do aute
              voluptate veniam ad sed in exercitation aliquip consectetur non
              consequat commodo laborum do occaecat sed eu anim sed qui
              cupidatat id sint eiusmod ea labore veniam cillum qui aute nisi
              aliqua nulla occaecat labore et duis aliqua proident cillum
              proident ad aliqua proident dolore aliqua anim ipsum.
            </p>
            <p>
              Cillum duis sit quis ex enim aliquip fugiat est excepteur do
              fugiat exercitation dolore ex elit adipiscing non quis magna
              exercitation duis duis ex anim ad commodo incididunt est cillum
              sunt minim excepteur sint sint ullamco sunt eu lorem qui qui
              occaecat aute esse dolor pariatur irure nostrud culpa do dolore
              aliqua ipsum eiusmod proident quis ad sunt laborum ea veniam
              deserunt aliqua laborum enim minim tempor laborum lorem incididunt
              sed consequat aliqua irure sunt dolor et sed occaecat adipiscing
              aute excepteur dolore sed magna adipiscing eu labore reprehenderit
              aliquip duis ipsum eiusmod sed ut ipsum anim ipsum minim et
              voluptate enim et ad esse nisi id labore esse ea sit duis ad in
              labore dolore amet sint sit id ullamco veniam tempor nostrud magna
              culpa excepteur velit veniam enim enim sunt eu labore enim
              consectetur pariatur enim ipsum excepteur labore aliquip laborum
              cillum aliqua nostrud amet amet eiusmod irure sit qui adipiscing
              culpa do minim aliquip est consectetur ullamco magna incididunt
              aliqua consequat commodo et officia minim consequat cillum officia
              magna sed irure laboris aute minim mollit lorem nostrud amet
              ullamco magna nostrud sed laborum dolor et laborum in enim dolore
              qui commodo laboris anim nostrud voluptate eu sint aliquip do aute
              voluptate veniam ad sed in exercitation aliquip consectetur non
              consequat commodo laborum do occaecat sed eu anim sed qui
              cupidatat id sint eiusmod ea labore veniam cillum qui aute nisi
              aliqua nulla occaecat labore et duis aliqua proident cillum
              proident ad aliqua proident dolore aliqua anim ipsum.
            </p>
            <p>
              Cillum duis sit quis ex enim aliquip fugiat est excepteur do
              fugiat exercitation dolore ex elit adipiscing non quis magna
              exercitation duis duis ex anim ad commodo incididunt est cillum
              sunt minim excepteur sint sint ullamco sunt eu lorem qui qui
              occaecat aute esse dolor pariatur irure nostrud culpa do dolore
              aliqua ipsum eiusmod proident quis ad sunt laborum ea veniam
              deserunt aliqua laborum enim minim tempor laborum lorem incididunt
              sed consequat aliqua irure sunt dolor et sed occaecat adipiscing
              aute excepteur dolore sed magna adipiscing eu labore reprehenderit
              aliquip duis ipsum eiusmod sed ut ipsum anim ipsum minim et
              voluptate enim et ad esse nisi id labore esse ea sit duis ad in
              labore dolore amet sint sit id ullamco veniam tempor nostrud magna
              culpa excepteur velit veniam enim enim sunt eu labore enim
              consectetur pariatur enim ipsum excepteur labore aliquip laborum
              cillum aliqua nostrud amet amet eiusmod irure sit qui adipiscing
              culpa do minim aliquip est consectetur ullamco magna incididunt
              aliqua consequat commodo et officia minim consequat cillum officia
              magna sed irure laboris aute minim mollit lorem nostrud amet
              ullamco magna nostrud sed laborum dolor et laborum in enim dolore
              qui commodo laboris anim nostrud voluptate eu sint aliquip do aute
              voluptate veniam ad sed in exercitation aliquip consectetur non
              consequat commodo laborum do occaecat sed eu anim sed qui
              cupidatat id sint eiusmod ea labore veniam cillum qui aute nisi
              aliqua nulla occaecat labore et duis aliqua proident cillum
              proident ad aliqua proident dolore aliqua anim ipsum.
            </p>
          </CardContent>
        </Card>
        <small style={Styles.secondaryText}>
          Scroll door het volledige document om de vinkjes actief te maken.
        </small>

        <FormControlLabel
          control={<Checkbox />}
          disabled={disabled === 0}
          label="Ik aanvaard de Q8 Liberty Fuel Card Terms and Conditions"
        />
        <FormControlLabel
          control={<Checkbox />}
          disabled={disabled < 2}
          label="Ik aanvaard de Q8 Electric Charge Card Terms and Conditions"
        />
        <FormControlLabel
          control={<Checkbox />}
          disabled={disabled < 3}
          label="Ik aanvaard de Q8 Home Charger Terms and Conditions"
        />
        <FormControlLabel
          control={<Checkbox />}
          disabled={disabled < 3}
          label="Ik aanvaard de Q8 Office Charger Terms and Conditions"
        />
        <FormControlLabel
          control={<Checkbox />}
          disabled={disabled < 4}
          label="Ik aanvaard het Addendum gegevensverwerking"
        />
      </Grid>
      <FooterNavigation />
    </Grid>
  );
}
