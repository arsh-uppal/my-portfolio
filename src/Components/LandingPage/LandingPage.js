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

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className='snowContainer'>
        <Snowfall color='white' snowflakeCount={50} />
      </div>
      <ChatPopUp />
      <QuizPopUp />
      <div>
        <div className='bird-container bird-container--one'>
          <div className='bird bird--one'></div>
        </div>
        <div className='bird-container bird-container--three'>
          <div className='bird bird--three'></div>
        </div>
        <div className='bird-container bird-container--four'>
          <div className='bird bird--four'></div>
        </div>
      </div>
      <Grid container spacing={0}>
        <Hidden xsDown>
          <Grid item xs={12} sm={3} className={classes.midLeft}>
            <img
              src={require("../../images/cloud.png")}
              alt='logo'
              className='cloudLeft'
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
              src={require("../../images/cloud.png")}
              alt='logo'
              className='cloudRight'
            />
          </Grid>
        </Hidden>
        <Grid item xs={12} className='bottom'>
          <img
            src={require("../../images/tree.svg")}
            alt='tree'
            className='maintree'
          />
          <img
            src={require("../../images/tree.svg")}
            alt='tree'
            className='maintree2'
          />
          <img
            src={require("../../images/grass.png")}
            alt='grass'
            className='flower'
          />
          <img
            src={require("../../images/spring.png")}
            alt='fly'
            className='fly'
          />
          <Mountain bgColor='#45b29a' className='firstMountain' zindex='4' />
          <div>
            <img
              src={require("../../images/house2.png")}
              alt='house2'
              className='house2'
            />
          </div>
          <div>
            <img
              src={require("../../images/house1.png")}
              alt='house1'
              className='house1'
            />
          </div>
          <div>
            <img
              src={require("../../images/tree4.png")}
              alt='tree'
              className='treeA'
            />
          </div>
          <div>
            <img
              src={require("../../images/tree.png")}
              alt='tree'
              className='treeB'
            />
          </div>
          <div>
            <img
              src={require("../../images/tree4.png")}
              alt='tree'
              className='treeC'
            />
          </div>
          <div>
            <img
              src={require("../../images/tree.png")}
              alt='tree'
              className='treeD'
            />
          </div>
          <div>
            <img
              src={require("../../images/tree.png")}
              alt='tree'
              className='treeE'
            />
          </div>
          <div>
            <img
              src={require("../../images/panel.png")}
              alt='direction'
              className='panel'
            />
          </div>
          <Mountain bgColor='#328a76' className='secondMountain' zindex='2' />
          <Mountain bgColor='white' className='thirdMountain' zindex='3' />
        </Grid>
        <Grid item xs={12} className='secondTop'>
          <AboutMe />
        </Grid>
        <Grid item xs={12} className='footer' style={{ marginTop: 20 }}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
