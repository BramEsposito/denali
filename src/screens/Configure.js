import React from "react";
import FooterNavigation from "../components/FooterNavigation.js";
import { DenaliContext } from "../App.js";
import ConfigureFuelCard from "../components/ConfigureFuelCard.js";
import ConfigureChargeCard from "../components/ConfigureChargeCard.js";

export default function Configure() {
  const context = React.useContext(DenaliContext);

  const solutions = ["fuel", "chargepass", "homechargers"];

  const configurations = {
    fuel: <ConfigureFuelCard />,
    chargepass: <ConfigureChargeCard />
  };

  const configure = [];

  for (let solution of solutions) {
    if (
      context.cart[solution] &&
      Object.keys(context.cart[solution]).length > 0
    ) {
      configure.push(configurations[solution]);
    }
  }

  return (
    <div>
      {configure}
      <FooterNavigation />
    </div>
  );
}
