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
            height: 150,
        },
        //backgroundColor: "orange",
        height: 300,
        position: "relative"
    },
    frontEndTools: {
        order: 2,
        [theme.breakpoints.down('xs')]: {
            order: 1,
            height: 150,
        },
        //backgroundColor: "yellow",
        height: 300,
        position: "relative"
    },
    backEndInfo: {
        order: 4,
        [theme.breakpoints.down('xs')]: {
            height: 150,
        },
        //backgroundColor: "blue",
        height: 300,
        position: "relative"
    },
    backEndTools: {
        order: 3,
        [theme.breakpoints.down('xs')]: {
            height: 150,
        },
        //backgroundColor: "pink",
        height: 300,
        position: "relative"
    }
}));

let words = ["I am", "Developer.", "Full Stack"];

export default function AboutMe() {
    const classes = useStyles();

    let countWord = 1;
    const [firstWord, setFirstWord] = useState("I am Arsh");

    useEffect(
        () => {
            let timer1 = setTimeout(() => {
                setFirstWord("Developer");
            }, 4000);

            return () => {
                clearTimeout(timer1)
            }
        },
        []
    )

    useEffect(
        () => {
            let timer2 = setTimeout(() => {
                setFirstWord("Full Stack");
            }, 5000);
            return () => {
                clearTimeout(timer2)
            }
        },
        []
    )
    
    useEffect(
        () => {
            let timer2 = setTimeout(() => {
                setFirstWord("I am Arsh.");
            }, 6000);
            return () => {
                clearTimeout(timer2)
            }
        },
        []
    )

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
                            <hr/>
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid item xs={12} sm={7} className={classes.frondEndInfo}>
                <div className="outerDivfrondEndInfo">
                    <div className="innerDivfrondEndInfo">
                        <div className="textfrondEndInfo">
                            <span className="textAboutMe">
                                <h2>Design what you want.</h2>
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
                            <img src={require("../../../images/myLogo.png")} alt="logo" 
                            style={{maxHeight:"90%", maxWidth:"90%", marginTop:"5%"}}/>
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid item xs={12} sm={5} className={classes.backEndTools}>
                <div className="outerDivbackEndTools">
                    <div className="innerDivbackEndTools">
                        <img src={require("../../../images/myLogo.png")} alt="logo" 
                            style={{maxHeight:"90%", maxWidth:"90%", marginTop:"5%"}}/>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={7} className={classes.backEndInfo}>
                <div className="outerDivbackEndInfo">
                    <div className="innerDivbackEndInfo">
                        <div className="textbackEndInfo">
                            <span className="textAboutMe">
                                <h2>Design what you want.</h2>
                                I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.
                        </span>
                        </div>
                    </div>
                </div>
            </Grid>

        </Grid>
    </div>);
}