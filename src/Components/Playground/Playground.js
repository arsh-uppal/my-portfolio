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
          collapsibleName="Taskiton (Some of my work)"
          collapsedStatus={false}
          style={{ border: "solid" }}
        >
          <iframe
            src="https://www.taskiton.wmdd.ca/#/"
            title="Taskiton web app"
            width="100%"
            height="500"
          ></iframe>
        </Collapsible>
      </div>
      <div>
        <Collapsible
          collapsibleName="Odyssey (Some of my work)"
          collapsedStatus={false}
          style={{ border: "solid" }}
        >
          <iframe
            src="https://odyssey.wmdd.ca/"
            title="Odyssey mobile game"
            width="100%"
            height="500"
          ></iframe>
        </Collapsible>
      </div>
      <div>
        <Collapsible
          collapsibleName="Arc resort (Some of my work)"
          collapsedStatus={false}
          style={{ border: "solid" }}
        >
          <iframe
            src="https://arcresort.arsh.wmdd.ca/"
            title="Arc resort website"
            width="100%"
            height="500"
          ></iframe>
        </Collapsible>
      </div>
      <Grid item xs={12} className="footer">
        <Footer />
      </Grid>
    </div>
  );
}
