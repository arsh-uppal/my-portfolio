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
  nav: {
    height: "120px",
    backgroundColor: "#e0ebe8",
    [theme.breakpoints.down('xs')]: {
      height: "80px",
      width:  "100vw"
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
              <img src={require("./images/myLogo.png")} alt="logo" className="logo" />
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
