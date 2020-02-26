import React from 'react';
import LandingPage from './Components/LandingPage/LandingPage';
import Nav from './Components/NavBar/Nav';
import Experience from './Components/Experience/Experience';
import Playground from './Components/Playground/Playground';
import './App.css';
import { Link, Redirect } from 'react-router-dom';
import { Router, Route } from 'react-router-dom';

/********Material imports********/
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';

// Google Analytics
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
ReactGA.initialize(process.env.REACT_APP_GA_KEY);

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

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
    <Router history={history}>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Hidden xsDown>
            <Grid item sm={4} className="topLogo">
              <Link to="/">
                <img src={require("./images/myLogo.png")} alt="logo" className="logo" />
              </Link>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={8} className={classes.nav}>
            <Nav />
          </Grid>
        </Grid>
      </div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/experience" component={Experience} />
      <Route exact path="/playground" component={Playground} />
      <Redirect to='/' />
    </Router>
  );
}

export default App;
