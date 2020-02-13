import React from 'react';
import './landingPage.css';
import Mountain from '../SharedComponents/Mountain';
import CenterText from '../SharedComponents/CenterText';
import Nav from '../NavBar/Nav';
/********Material imports********/
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
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
                    style={{height:50, width:50, position:"absolute", marginTop:10,
                    marginLeft:30}}/>
                    <Mountain bgColor="#45b29a" className="firstMountain" zindex="4" />
                    <img src={require("../../images/house2.png")} alt="house1"
                    style={{height:50, width:50, position:"absolute", marginTop:75,
                    marginLeft:-180, zIndex:4
                    }}/>
                    <Mountain bgColor="#328a76" className="secondMountain" zindex="2" />
                    <Mountain bgColor="white" className="thirdMountain" zindex="3" />
                </Grid>
                <Grid item xs={12} className="secondTop">
                </Grid>
            </Grid>
        </div>
    );
}