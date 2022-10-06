import React from "react";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LandingPageCard from "../components/LandingPageCard";
import FooterNavigation from "../components/FooterNavigation.js";
import { DenaliContext } from "../App.js";
import { ReactComponent as ArrowRight } from "../components/ArrowRight.svg";

export default function LandingPage() {
  const context = React.useContext(DenaliContext);
  const cardStyle = {
    marginTop: 15,
    cursor: "pointer"
  };

  function preloadData(dataId) {
    const solutions = {
      fuel: false,
      chargepass: false,
      homechargers: false,
      officechargers: false
    };
    switch (dataId) {
      case "fuel":
        solutions.fuel = true;
        break;

      case "hybrid":
        solutions.fuel = true;
        solutions.chargepass = true;
        solutions.homechargers = true;
        break;

      case "electric":
        solutions.chargepass = true;
        solutions.homechargers = true;
        solutions.officechargers = true;
        break;
      default:
      // nothing
    }
    context.setSolution(solutions);
    context.nextScreen();
  }

  return [
    <div style={{ backgroundColor: "#DDDDDD" }} key="solutions">
      <div className="container">
        <Grid
          container
          spacing={2}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <Card
              raised={false}
              elevation={0}
              style={cardStyle}
              onClick={(e) => preloadData("fuel")}
            >
              <CardContent>
                <Grid container>
                  <Grid item xs={11}>
                    <h3>Fuel oplossingen</h3>
                    <LandingPageCard
                      title={"Q8 Liberty Card"}
                      description={
                        "Meer dan 1.500 stations in de Benelux. Vanaf 25 kaarten: gepersonaliseerde kortingen"
                      }
                    />
                  </Grid>
                  <Grid
                    container
                    item
                    xs={1}
                    justifyContent="center"
                    alignItems="center"
                    direction="row"
                  >
                    <ArrowRight />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card
              raised={false}
              elevation={0}
              style={cardStyle}
              onClick={(e) => preloadData("hybrid")}
            >
              <CardContent>
                <Grid container>
                  <Grid item xs={11}>
                    <h3>Hybride oplossingen</h3>
                    <LandingPageCard
                      title={"Q8 Liberty Card + EV charge pass"}
                      description={
                        "Mollit adipiscing tempor eiusmod velit magna aute qui consectetur laboris velit occaecat anim minim nisi enim"
                      }
                    />
                  </Grid>
                  <Grid
                    container
                    item
                    xs={1}
                    justifyContent="center"
                    alignItems="center"
                    direction="row"
                  >
                    <ArrowRight />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              raised={false}
              elevation={0}
              style={cardStyle}
              onClick={(e) => preloadData("electric")}
            >
              <CardContent>
                <Grid container>
                  <Grid item xs={11}>
                    <h3>EV oplossingen</h3>
                    <LandingPageCard
                      title={"EV Charge Card"}
                      description={
                        "Mollit adipiscing tempor eiusmod velit magna aute qui consectetur laboris velit occaecat anim minim nisi enim"
                      }
                    />
                    <LandingPageCard
                      title={"Home Charger"}
                      description={
                        "Mollit adipiscing tempor eiusmod velit magna aute qui consectetur laboris velit occaecat anim minim nisi enim"
                      }
                    />
                    <LandingPageCard
                      title={"Office Charger"}
                      description={
                        "Mollit adipiscing tempor eiusmod velit magna aute qui consectetur laboris velit occaecat anim minim nisi enim"
                      }
                    />
                  </Grid>
                  <Grid
                    container
                    item
                    xs={1}
                    justifyContent="center"
                    alignItems="center"
                    direction="row"
                  >
                    <ArrowRight />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>,

    <div className="container" key="other">
      <h2>Andere producten</h2>
      <Grid container>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <LandingPageCard
                title={"Q8 Mobility Card"}
                description={"De meest complete mobiliteitskaart"}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  ];
}
