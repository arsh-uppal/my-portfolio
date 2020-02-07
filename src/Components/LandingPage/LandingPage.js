import React from 'react';
import './landingPage.css';
import Mountain from '../SharedComponents/Mountain';

/********Material imports********/
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Hidden xsDown>
                    <Grid item sm={4} className="top">
                        Logo
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={8} className="top">
                    <Paper className={classes.paper}>Nav</Paper>
                </Grid>
                <Hidden xsDown>
                    <Grid item xs={12} sm={4} className="mid">
                        Left
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={4} className="mid">
                    Centre
                </Grid>
                <Hidden xsDown>
                    <Grid item xs={12} sm={4} className="mid">
                        Right
                    </Grid>
                </Hidden>
                <Grid item xs={12} className="bottom">
                        <Mountain bgColor="yellow" className="firstMountain" zindex="4"/>
                        <Mountain bgColor="blue" className="secondMountain" zindex="2"/>
                        <Mountain bgColor="red" className="thirdMountain" zindex="3"/>
                </Grid>
                <Grid item xs={12} className="secondTop">
                </Grid>
            </Grid>
        </div>
    );
}