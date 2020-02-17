import React, { useState, useEffect } from 'react';
import './aboutMe.css';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflow: "hidden",
    },
    aboutMe: {
        height: 500,
        //backgroundColor: "blue",
    },
    frondEndInfo: {
        order: 1,
        [theme.breakpoints.down('xs')]: {
            order: 2,
            height: 200,
            marginTop: -20,
        },
        //backgroundColor: "orange",
        height: 300,
        position: "relative"
    },
    frontEndTools: {
        order: 2,
        [theme.breakpoints.down('xs')]: {
            order: 1,
            height: 200,
            marginTop: 40,
        },
        //backgroundColor: "yellow",
        height: 300,
        position: "relative"
    },
    backEndInfo: {
        order: 4,
        [theme.breakpoints.down('xs')]: {
            height: 200,
            marginTop: -20,
        },
        //backgroundColor: "blue",
        height: 300,
        position: "relative"
    },
    backEndTools: {
        order: 3,
        [theme.breakpoints.down('xs')]: {
            height: 200,
        },
        //backgroundColor: "pink",
        height: 300,
        position: "relative"
    }
}));

let frontDev = ["react", "angular", "js", "html", "css", "photoshop"];
let backDev = ["java", "spring", "mysql", "rest", "git"];
let frontDevCounter = 0;
let backDevCounter = 0;
export default function AboutMe() {
    const classes = useStyles();

    const [frontDevIcon, setfrontDevIcon] = useState(frontDev[0]);
    useEffect(
        () => {
            let interval = setInterval(
                function () {
                    setfrontDevIcon(frontDev[frontDevCounter]);
                    if (frontDevCounter < 5) {
                        frontDevCounter++;
                    } else {
                        frontDevCounter = 0;
                    }
                }, 2000
            );

            return () => {
                clearInterval(interval);
            }
        },
        []
    )

    const [backDevIcon, setbackDevIcon] = useState(backDev[0]);
    useEffect(
        () => {
            let interval = setInterval(
                function () {
                    setbackDevIcon(backDev[backDevCounter]);
                    if (backDevCounter < 4) {
                        backDevCounter++;
                    } else {
                        backDevCounter = 0;
                    }
                }, 3000
            );

            return () => {
                clearInterval(interval);
            }
        },
        []
    )

    let tempFrontDev = frontDevIcon;
    let urlFrontDevIcon = "/../../../images/techstack/" + tempFrontDev + ".png";

    let tempBackDevIcon = backDevIcon;
    let urlBackDevIcon = "/../../../images/techstack/" + tempBackDevIcon + ".png";

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
                            <hr />
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid item xs={12} sm={7} className={classes.frondEndInfo}>
                <div className="outerDivfrondEndInfo">
                    <div className="innerDivfrondEndInfo">
                        <div className="textfrondEndInfo">
                            <span className="textAboutMe">
                                <h2>Design which matters.</h2>
                                I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.
                        </span>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={5} className={classes.frontEndTools}>
                <div className="outerDivfrontEndTools">
                    <div className="innerDivfrontEndTools">
                        <div className="imgfrontEndTools">
                            <img src={urlFrontDevIcon} alt="logo"
                                style={{
                                    maxHeight: "80%", maxWidth: "80%", marginTop: "12%",
                                    height: 120, width: 120,
                                }} />
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid item xs={12} sm={5} className={classes.backEndTools}>
                <div className="outerDivbackEndTools">
                    <div className="innerDivbackEndTools">
                        <img src={urlBackDevIcon} alt="logo"
                            style={{
                                maxHeight: "80%", maxWidth: "80%", marginTop: "11%",
                                height: 120, width: 120,
                            }} />
                    </div> 
                </div>
            </Grid>
            <Grid item xs={12} sm={7} className={classes.backEndInfo}>
                <div className="outerDivbackEndInfo">
                    <div className="innerDivbackEndInfo">
                        <div className="textbackEndInfo">
                            <span className="textAboutMe">
                                <h2>A Robust Back End</h2>
                                I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.
                        </span>
                        </div>
                    </div>
                </div>
            </Grid>

        </Grid>
    </div>);
}