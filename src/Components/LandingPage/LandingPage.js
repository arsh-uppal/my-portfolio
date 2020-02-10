import React from 'react';
import './landingPage.css';
import Mountain from '../SharedComponents/Mountain';

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
        backgroundColor: "burlywood",
        textAlign: "center",
        position: "relative",
    },
    midCentre: {
        height: "55vh",
        backgroundColor: "pink",
        textAlign: "center",
        position: "relative",
    },
    midRight: {
        height: "55vh",
        backgroundColor: "burlywood",
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
                    <Grid item sm={4} className="topLogo">
                        <img src={require("../../images/icon.png")} alt="logo" className={classes.logo} />
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={8} className={classes.nav}>
                    Nav
                </Grid>
                <Hidden xsDown>
                    <Grid item xs={12} sm={3} className={classes.midLeft}>
                        <img src={require("../../images/cloud.png")} alt="logo" className="cloudLeft"/>
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={6} className={classes.midCentre}>
                    <img src={require("../../images/icon.png")} alt="logo" className="centePiece"/>
                </Grid>
                <Hidden xsDown>
                    <Grid item xs={12} sm={3} className={classes.midRight}>
                    <img src={require("../../images/cloud.png")} alt="logo" className="cloudRight"/>
                    </Grid>
                </Hidden>
                <Grid item xs={12} className="bottom">
                    <Mountain bgColor="yellow" className="firstMountain" zindex="4" />
                    <Mountain bgColor="blue" className="secondMountain" zindex="2" />
                    <Mountain bgColor="red" className="thirdMountain" zindex="3" />
                </Grid>
                <Grid item xs={12} className="secondTop">
                </Grid>
            </Grid>
        </div>
    );
}