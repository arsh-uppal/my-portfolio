import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  heading: {
    width: "80%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: "auto",
    textAlign: "center",
    color: "rgb(50, 138, 118)",
    fontSize: "1.2em",
    fontWeight: "600",
    padding: 0,
  },
}));

const PlayDivider = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.heading}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>{props.iccon}</Avatar>
        </ListItemAvatar>
        <ListItemText
          style={{
            textAlign: "center",
          }}
          primary={
            <span
              style={{
                fontWeight: 600,
                fontSize: "1em",
              }}
            >
              {props.heading}
            </span>
          }
        />
      </ListItem>
    </List>
  );
};

export default PlayDivider;
