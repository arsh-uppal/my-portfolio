import React from "react";
//Components
import Collapsible from "./Collapsible";
import PlayDivider from "./PlayDivider";
import Footer from "../Footer/Footer";
import OdysseyGallery from "./OdysseyGallery/OdysseyGallery";
import OdysseyWebGallery from "./OdysseyGallery/OdysseyWebGallery";
import TaskitonGallery from "./TaskitonGallery/TaskitonGallery";
import KovanGallery from "./KovanGallery/KovanGallery";

//Material UI
import Grid from "@material-ui/core/Grid";
import WorkTwoToneIcon from "@material-ui/icons/WorkTwoTone";
import LocalFloristTwoToneIcon from "@material-ui/icons/LocalFloristTwoTone";

import "./playground.css";

//Components
import ManOnCycle from "./SvgComponents/ManOnCycle";
import ToTheSpace from "./SvgComponents/ToTheSpace";
import DroneUp from "./SvgComponents/DroneUp";

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

      {/* Man on the cycle*/}
      <Collapsible
        collapsibleName="On The Cycle"
        collapsedStatus={true}
        style={{ border: "solid" }}
      >
        <ManOnCycle />
      </Collapsible>

      {/* To the space*/}
      <Collapsible
        collapsibleName="To The Space"
        collapsedStatus={false}
        style={{ border: "solid", height: "auto" }}
      >
        <ToTheSpace />
      </Collapsible>

      {/* Drone Up*/}
      <Collapsible
        collapsibleName="Drone Up"
        collapsedStatus={false}
        style={{ border: "solid", height: "auto" }}
      >
        <DroneUp />
      </Collapsible>

      <div style={{ height: 30 }}></div>

      <PlayDivider iccon={<WorkTwoToneIcon />} heading={"Some of my work"} />
      <div style={{ height: 30 }}></div>

      {/* Kovan*/}
      <div>
        <Collapsible
          collapsibleName="Kovan - Home management app"
          collapsedStatus={false}
          style={{ border: "solid" }}
        >
          <KovanGallery />
        </Collapsible>
      </div>

      {/* React Movies App*/}
      <div>
        <Collapsible
          collapsibleName="Movies App"
          collapsedStatus={false}
          style={{ border: "solid" }}
        >
          <iframe
            src="https://arsh-uppal.github.io/react-movie-project/"
            title="A react + TS web app for movies and tv shows"
            width="100%"
            height="550"
          ></iframe>
        </Collapsible>
      </div>

      {/* Conway's Game of Life*/}
      <div>
        <Collapsible
          collapsibleName="Conway's game of life"
          collapsedStatus={false}
          style={{ border: "solid" }}
        >
          <iframe
            src="https://arsh-uppal.github.io/conway--gol/"
            title="Conway's game of life"
            width="100%"
            height="550"
          ></iframe>
        </Collapsible>
      </div>

      {/* Kanaban App*/}
      <div>
        <Collapsible
          collapsibleName="A simple kanban board implementation"
          collapsedStatus={false}
          style={{ border: "solid" }}
        >
          <iframe
            src="https://arsh-uppal.github.io/react-dnd/#/"
            title="A simple kanban board implementation"
            width="100%"
            height="550"
          ></iframe>
        </Collapsible>
      </div>

      {/* Taskiton*/}
      <div>
        <Collapsible
          collapsibleName="Taskiton - Project management app"
          collapsedStatus={false}
          style={{ border: "solid" }}
        >
          <TaskitonGallery />
        </Collapsible>
      </div>

      {/* Odyssey App*/}
      <div>
        <Collapsible
          collapsibleName="Odyssey - VR app"
          collapsedStatus={false}
          style={{ border: "solid" }}
        >
          <OdysseyGallery />
        </Collapsible>
      </div>

      {/* Odyssey Website*/}
      <div>
        <Collapsible
          collapsibleName="Odyssey - Promotional website"
          collapsedStatus={false}
          style={{ display: "block" }}
        >
          <OdysseyWebGallery />
        </Collapsible>
      </div>

      {/* Arc resort*/}
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
