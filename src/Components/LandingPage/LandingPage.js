import React from "react";
import "./landingPage.css";
import Mountain from "../SharedComponents/Mountain";
import CenterText from "../SharedComponents/CenterText";
import Footer from "../Footer/Footer";
import AboutMe from "../LandingPage/AboutMe/AboutMe";
import ChatPopUp from "./ChatPopUp/ChatPopUp";
import QuizPopUp from "./QuizGame/QuizPopUp";

/********Material imports********/
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";

/********Other imports********/
import Snowfall from "react-snowfall";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  logo: {
    width: "70px",
    height: "70px",
    paddingLeft: 100,
    paddingTop: 6,
  },
  nav: {
    height: "80px",
    backgroundColor: "yellow",
    [theme.breakpoints.down("xs")]: {
      height: "60px",
    },
  },
  midLeft: {
    height: "55vh",
    backgroundColor: "#f1f1f1",
    textAlign: "center",
    position: "relative",
  },
  midCentre: {
    height: "55vh",
    backgroundColor: "#f1f1f1",
    textAlign: "center",
    position: "relative",
  },
  midRight: {
    height: "55vh",
    backgroundColor: "#f1f1f1",
    textAlign: "center",
    position: "relative",
  },
}));

let handleBirdShoot = () => {
  console.log("hey I am shot");
};

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="snowContainer">
        <Snowfall color="white" snowflakeCount={50} />
      </div>
      <ChatPopUp />
      <QuizPopUp />
      <div>
        <div className="bird-container bird-container--one">
          <div className="bird bird--one"></div>
        </div>
        <div className="bird-container bird-container--three">
          <div className="bird bird--three"></div>
        </div>
        <div className="bird-container bird-container--four">
          <div className="bird bird--four"></div>
        </div>
      </div>
      <Grid container spacing={0}>
        <Hidden xsDown>
          <Grid item xs={12} sm={3} className={classes.midLeft}>
            <img
              src={require("../../images/cloud.svg")}
              alt="logo"
              className="cloudLeft"
            />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={6} className={classes.midCentre}>
          {/* <img src={require("../../images/iamarsh.png")} alt="logo" className="centePiece"/> */}
          <CenterText />
        </Grid>
        <Hidden xsDown>
          <Grid item xs={12} sm={3} className={classes.midRight}>
            <img
              src={require("../../images/cloud.svg")}
              alt="logo"
              className="cloudRight"
            />
          </Grid>
        </Hidden>
        <Grid item xs={12} className="bottom">
          <Mountain bgColor="#45b29a" className="firstMountain" zindex="4" />
          <div>
            <img
              src={require("../../images/house2.png")}
              alt="house2"
              style={{
                height: 55,
                width: 50,
                zIndex: 4,
                position: "absolute",
                marginTop: 70,
                marginLeft: 0,
              }}
            />
          </div>
          <div>
            <img
              src={require("../../images/house1.png")}
              alt="house1"
              style={{
                height: 40,
                width: 40,
                marginTop: 16,
                marginLeft: 192,
                position: "absolute",
              }}
            />
          </div>
          <div>
            <img
              src={require("../../images/tree4.png")}
              alt="tree"
              style={{
                height: 65,
                width: 60,
                position: "absolute",
                marginTop: 100,
                marginLeft: -62,
                zIndex: 4,
              }}
            />
          </div>
          <div>
            <img
              src={require("../../images/tree.png")}
              alt="tree"
              style={{
                height: 65,
                width: 50,
                position: "absolute",
                marginTop: 138,
                marginLeft: -96,
                zIndex: 4,
              }}
            />
          </div>
          <div>
            <img
              src={require("../../images/tree4.png")}
              alt="tree"
              style={{
                height: 75,
                width: 70,
                position: "absolute",
                marginTop: 175,
                marginLeft: -146,
                zIndex: 4,
              }}
            />
          </div>
          <div>
            <img
              src={require("../../images/tree.png")}
              alt="tree"
              style={{
                height: 30,
                width: 25,
                position: "absolute",
                marginTop: 38,
                marginLeft: 244,
                zIndex: 4,
                filter: "contrast(100%)",
              }}
            />
          </div>
          <div>
            <img
              src={require("../../images/tree.png")}
              alt="tree"
              style={{
                height: 40,
                width: 30,
                position: "absolute",
                marginTop: 65,
                marginLeft: 130,
                zIndex: 4,
                filter: "contrast(100%)",
              }}
            />
          </div>
          <div>
            <img
              src={require("../../images/panel.png")}
              alt="direction"
              style={{
                height: 35,
                width: 35,
                position: "absolute",
                marginTop: 75,
                marginLeft: 352,
                zIndex: 4,
              }}
            />
          </div>
          <Mountain bgColor="#328a76" className="secondMountain" zindex="2" />
          <Mountain bgColor="white" className="thirdMountain" zindex="3" />
        </Grid>
        <Grid item xs={12} className="secondTop">
          <AboutMe />
        </Grid>
        <Grid item xs={12} className="footer" style={{ marginTop: 20 }}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
