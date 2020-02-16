import React from 'react';
import './aboutMe.css';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflow: "hidden",
    },
    aboutMe: {
        height: "85vh"
    },
    frondEndInfo: {
        order: 1,
        [theme.breakpoints.down('xs')]: {
            order: 2,
            height: "24vh",
        },
        height: "48vh",
        position: "relative"
    },
    frontEndTools: {
        order: 2,
        [theme.breakpoints.down('xs')]: {
            order: 1,
            height: "24vh",
        },
        height: "48vh",
        position: "relative"
    },
    backEndInfo: {
        order: 3,
        [theme.breakpoints.down('xs')]: {
            height: "24vh",
        },
        backgroundColor: "blue", height: "48vh",
        position: "relative"
    },
    backEndTools: {
        order: 4,
        [theme.breakpoints.down('xs')]: {
            height: "24vh",
        },
        backgroundColor: "pink", height: "48vh",
        position: "relative"
    }
}));

export default function AboutMe() {
    const classes = useStyles();

    return (<div className={classes.root}>
        <Grid container spacing={0}>
            <Grid item xs={12} sm={12} className={classes.aboutMe}>
                <div className="outerDivAbooutMe">
                    <div className="innerDivAbooutMe">
                        <div>
                            <img src={require("../../../images/myLogo.png")} alt="logo" className="imgAboutMe" />
                        </div>
                        <div style={{ padding: "50px 50px 0px 50px" }}>
                            <span className="textAboutMe">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis porttitor est, rutrum pharetra dui. Curabitur et lacus luctus, euismod dui at, tempus dolor.
                            </span>
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid item xs={12} sm={7} className={classes.frondEndInfo}>
                <div className="outerDivfrondEndInfo">
                    <div className="innerDivfrondEndInfo">
                        <div className="textfrondEndInfo">
                            <span className="textAboutMe">
                                <h3>Front end</h3>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis porttitor est, rutrum pharetra dui. Curabitur et lacus luctus, euismod dui at, tempus dolor.
                        </span>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={5} className={classes.frontEndTools}>
                <div className="outerDivfrontEndTools">
                    <div className="innerDivfrontEndTools">

                    </div>
                </div>
            </Grid>

            <Grid item xs={12} sm={5} className={classes.backEndInfo}>
                Stack
            </Grid>
            <Grid item xs={12} sm={7} className={classes.backEndTools}>
            </Grid>

        </Grid>
    </div>);
}