import React from 'react';
import './landingPage.css';
import Mountain from '../SharedComponents/Mountain';
import CenterText from '../SharedComponents/CenterText';
import Footer from '../Footer/Footer';
import AboutMe from '../LandingPage/AboutMe/AboutMe';
/********Material imports********/
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
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
        [theme.breakpoints.down('xs')]: {
            height: "60px",
        }
    },
    midLeft: {
        height: "55vh",
        backgroundColor: "#e0ebe8",
        textAlign: "center",
        position: "relative",
    },
    midCentre: {
        height: "55vh",
        backgroundColor: "#e0ebe8",
        textAlign: "center",
        position: "relative",
    },
    midRight: {
        height: "55vh",
        backgroundColor: "#e0ebe8",
        textAlign: "center",
        position: "relative",
    },
}));

export default function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Hidden xsDown>
                    <Grid item xs={12} sm={3} className={classes.midLeft}>
                        <img src={require("../../images/cloud.svg")} alt="logo" className="cloudLeft"/>
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={6} className={classes.midCentre}>
                    {/* <img src={require("../../images/iamarsh.png")} alt="logo" className="centePiece"/> */}
                    <CenterText />
                </Grid>
                <Hidden xsDown>
                    <Grid item xs={12} sm={3} className={classes.midRight}>
                    <img src={require("../../images/cloud.svg")} alt="logo" className="cloudRight"/>
                    </Grid>
                </Hidden>
                <Grid item xs={12} className="bottom">
                    <img src={require("../../images/house1.png")} alt="house1"
                    style={{height:40, width:40, position:"absolute", marginTop:18,
                    marginLeft:15, }}/>
                    <Mountain bgColor="#45b29a" className="firstMountain" zindex="4" />
                    <img src={require("../../images/house2.png")} alt="house2"
                    style={{height:55, width:50, position:"absolute", marginTop:75,
                    marginLeft:-165, zIndex:4
                    }}/>
                    <img src={require("../../images/tree4.png")} alt="tree"
                    style={{height:65, width:60, position:"absolute", marginTop:100,
                    marginLeft:-222, zIndex:4
                    }}/>
                    <img src={require("../../images/tree.png")} alt="tree"
                    style={{height:65, width:50, position:"absolute", marginTop:130,
                    marginLeft:-270, zIndex:4
                    }}/>
                    <img src={require("../../images/tree4.png")} alt="tree"
                    style={{height:75, width:70, position:"absolute", marginTop:160,
                    marginLeft:-310, zIndex:4
                    }}/>

                    {/* Centre mountain */}
                    <img src={require("../../images/tree.png")} alt="tree"
                    style={{height:30, width:25, position:"absolute", marginTop:35,
                    marginLeft:60, zIndex:4, filter: "contrast(100%)",
                    }}/>
                    <img src={require("../../images/tree.png")} alt="tree"
                    style={{height:40, width:30, position:"absolute", marginTop:65,
                    marginLeft:-40, zIndex:4, filter: "contrast(100%)",
                    }}/>
                    {/* Right mountain */}
                    <img src={require("../../images/panel.png")} alt="direction"
                    style={{height:35, width:35, position:"absolute", marginTop:75,
                    marginLeft:160, zIndex:4
                    }}/>
                    <Mountain bgColor="#328a76" className="secondMountain" zindex="2" />
                    <Mountain bgColor="white" className="thirdMountain" zindex="3" />
                </Grid>
                <Grid item xs={12} className="secondTop">
                    <AboutMe/>
                </Grid>
                <Grid item xs={12} className="footer">
                    <Footer/>
                </Grid>
            </Grid>
        </div>
    );
}