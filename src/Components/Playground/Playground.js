import React from "react";
import Collapsible from "./Collapsible";
import Footer from "../Footer/Footer";
import Grid from "@material-ui/core/Grid";
import "./playground.css";

export default function Playground() {
  const style = {
    backgroundColor: "#f1f1f1",
    height: 80,
  };

  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <div style={style}></div>
      <div>
        <Collapsible
          collapsibleName="Some of my work :"
          collapsedStatus={false}
          style={{ border: "solid" }}
        >
          ...
        </Collapsible>
      </div>
      <Grid item xs={12} className="footer">
        <Footer />
      </Grid>
    </div>
  );
}
