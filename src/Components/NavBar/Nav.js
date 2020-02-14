import React from 'react';
import NavBar from './NavBar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const useStyles = makeStyles(theme => ({
    styleNav: {
        height: "120px",
        width:"67vw",
        backgroundColor: "#e0ebe8",
        boxShadow:"none",
        [theme.breakpoints.down('xs')]: {
            height: "80px",
            width:  "100vw",
            position: "absolute",
        }
    }
}));

export default function Nav(props) {
    const classes = useStyles();

    return (
        <React.Fragment >
            <HideOnScroll {...props}>
                <AppBar className={classes.styleNav}>
                    <Toolbar >
                        <div style={{textAlign:"center", width:"100%"}}>
                            <NavBar />
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>

        </React.Fragment>
    );
}
