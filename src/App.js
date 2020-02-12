import React from 'react';
import LandingPage from './Components/LandingPage/LandingPage';
import Nav from './Components/NavBar/Nav';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Hidden xsDown>
            <Grid item sm={4} className="topLogo">
              <img src={require("./images/icon.png")} alt="logo" className={classes.logo} />
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={8} className={classes.nav}>
            <Nav />
          </Grid>
        </Grid>
      </div>
      <Route exact path="/" component={LandingPage} />
    </Router>
  );
}

export default App;
