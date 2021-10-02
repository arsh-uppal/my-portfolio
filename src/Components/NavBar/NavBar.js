/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Badge from "@material-ui/core/Badge";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import "./NavBar.css";

const useStyles = makeStyles((theme) => ({
  navPos: {
    paddingTop: 50,
    marginLeft: "25vw",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "6vw",
    },
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -2,
    top: -3,
  },
}))(Badge);

export default function NavBar() {
  const classes = useStyles();

  //const preventDefault = event => event.preventDefault();

  return (
    <div className={classes.navPos}>
      <Typography>
        <Link to="/" className="linkStyle">
          About
        </Link>
        <Link to="/experience" className="linkStyle">
          More
        </Link>
        <Link to="/playground" className="linkStyle">
          Play
        </Link>
        <Link to="/other" className="linkStyle">
          <StyledBadge badgeContent="new" color="secondary">
            <span>Other</span>
            <img
              src={require("../../images/arrow-curly.png")}
              alt="tree"
              className="arrowcurly"
            />
          </StyledBadge>
        </Link>
      </Typography>
    </div>
  );
}
