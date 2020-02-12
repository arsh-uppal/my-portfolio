/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  linkStyle: {
    color: 'black',
    fontSize: '1.1em',
    textDecoration: 'none',
    fontFamily: 'sans-serif',
    [theme.breakpoints.down('xs')]: {
      textAlign : 'center',
    },

  }

}));

export default function NavBar() {
  const classes = useStyles();

  const preventDefault = event => event.preventDefault();

  return (
    <div>
      <Typography>
          <Link to="/" className={classes.linkStyle}>
            About
          </Link>
          <Link to="/" onClick={preventDefault} className={classes.linkStyle}>
            Skills
          </Link>
          <Link to="/" onClick={preventDefault} className={classes.linkStyle}>
            Contact
          </Link>
      </Typography>
    </div>
  );
}