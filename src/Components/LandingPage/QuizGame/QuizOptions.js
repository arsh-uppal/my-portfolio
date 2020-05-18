import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    color: "rgb(50, 138, 118)",
    fontSize: "1em",
    fontWeight: "600",
  },
}));

export default function QuizOptions() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button divider>
        Option 1
      </ListItem>
      <Divider />
      <ListItem button divider>
        Option 2
      </ListItem>
      <Divider />
      <ListItem button divider>
        Option 3
      </ListItem>
      <Divider />
      <ListItem button divider>
        Option 4
      </ListItem>
      <Divider />
    </List>
  );
}
