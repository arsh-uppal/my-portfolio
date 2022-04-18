import { Hidden } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
/********Material imports********/
import { makeStyles } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import React, { useState } from "react";
// Google Analytics
import ReactGA from "react-ga";
import { HashRouter, Link, Route } from "react-router-dom";
import "./App.css";
import Experience from "./Components/Experience/Experience";
import LandingPage from "./Components/LandingPage/LandingPage";
import Nav from "./Components/NavBar/Nav";
import OtherMiniProjects from "./Components/OtherMiniProjects/OtherMiniProjects";
import Playground from "./Components/Playground/Playground";

ReactGA.initialize(process.env.REACT_APP_GA_KEY);

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    height: "120px",
    backgroundColor: "#f1f1f1",
    [theme.breakpoints.down("xs")]: {
      height: "80px",
      width: "100vw",
    },
  },
}));

function App() {
  const classes = useStyles();
  const [hideNav, sethideNav] = useState(false);
  const hadleHideNav = (hide) => {
    sethideNav(hide);
  };
  return (
    <HashRouter>
      <div
        className={classes.root}
        style={hideNav ? { display: "none" } : { display: "block" }}
      >
        <Grid container spacing={0}>
          <Hidden xsDown>
            <Grid item sm={4} className="topLogo">
              <Link to="/">
                <img
                  src={require("./images/myLogo.png")}
                  alt="logo"
                  className="logo"
                />
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
      <Route
        exact
        path="/other"
        render={() => <OtherMiniProjects hadleHideNav={hadleHideNav} />}
      />
    </HashRouter>
  );
}

export default App;
