/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import './NavBar.css';

const useStyles = makeStyles(theme => ({
  navPos : {
    paddingTop: 50,
    marginLeft: "24vw",
    [theme.breakpoints.down('xs')]: {
      marginLeft: "6vw",
    },
  },
}));

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
      </Typography>
    </div>
  );
}