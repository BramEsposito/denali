import React from "react";
import { DenaliContext } from "./App.js";

export default function ImageScreen(props) {
  const [loader, setLoader] = React.useState("loading");

  const context = React.useContext(DenaliContext);
  return (
    <div
      style={{
        marginTop: "16px",
        cursor: "pointer",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
      onClick={() => context.nextScreen()}
      className={loader}
    >
      <img
        key={props.src}
        src={props.src}
        alt={props.alt}
        onLoad={(e) => setLoader("")}
      />
      <small>Klik om verder te gaan</small>
    </div>
  );
}
