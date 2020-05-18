import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import QuizOptions from "./QuizOptions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "rgb(50, 138, 118)",
    fontSize: "1.2em",
    fontWeight: "600",
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

export default function Quiz() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Typography variant="inherit">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the
          park or just down the hall.
        </Typography>
      </div>
      <div className={classes.section2}>
        <div>
          <QuizOptions />
        </div>
      </div>
    </div>
  );
}
