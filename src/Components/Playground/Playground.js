import React from "react";
import Collapsible from "./Collapsible";
import PlayDivider from "./PlayDivider";
import Footer from "../Footer/Footer";
import Grid from "@material-ui/core/Grid";
import WorkTwoToneIcon from "@material-ui/icons/WorkTwoTone";
import LocalFloristTwoToneIcon from "@material-ui/icons/LocalFloristTwoTone";
import "./playground.css";

//Components
import ManOnCycle from "./SvgComponents/ManOnCycle";

export default function Playground() {
  const style = {
    backgroundColor: "#f1f1f1",
    height: 80,
  };
  return (
    <div
      style={{
        backgroundColor: "#f1f1f1",
      }}
    >
      <div style={style}></div>
      <PlayDivider iccon={<LocalFloristTwoToneIcon />} heading={"New stuff"} />

      <div style={{ height: 30 }}></div>
      <Collapsible
        collapsibleName="On the cycle"
        collapsedStatus={true}
        style={{ border: "solid" }}
      >
        <ManOnCycle />
      </Collapsible>
      <div style={{ height: 30 }}></div>

      <PlayDivider iccon={<WorkTwoToneIcon />} heading={"Some of my work"} />
      <div style={{ height: 30 }}></div>
      <div>
        <Collapsible
          collapsibleName="Taskiton - Project Management App"
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
          collapsibleName="Odyssey - promotional website"
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
          collapsibleName="Arc resort"
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
