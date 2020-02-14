/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  linkStyle: {
    paddingRight: "4vw",
    color:"rgb(50, 138, 118)",
    fontSize: '1.2em',
    textDecoration: 'none',
    fontFamily: "Comic Sans MS, cursive, sans-serif",
    [theme.breakpoints.down('xs')]: {
      paddingRight: "8vw"
    },
  },
  navPos : {
    paddingTop: 50,
    marginLeft: "22vw",
    [theme.breakpoints.down('xs')]: {
      marginLeft: "5vw",
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();

  const preventDefault = event => event.preventDefault();

  return (
    <div className={classes.navPos}>
      <Typography>
          <Link to="/" className={classes.linkStyle}>
            About
          </Link>
          <Link to="/" onClick={preventDefault} className={classes.linkStyle}>
            Skills
          </Link>
          <Link to="/" onClick={preventDefault} className={classes.linkStyle}>
            Experience
          </Link>
      </Typography>
    </div>
  );
}