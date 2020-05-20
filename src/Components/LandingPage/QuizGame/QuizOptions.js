import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";
import CancelTwoToneIcon from "@material-ui/icons/CancelTwoTone";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    color: "rgb(50, 138, 118)",
    fontSize: "1em",
    fontWeight: "600",
  },
}));

export default function QuizOptions(props) {
  const classes = useStyles();

  const [optionsCorrectObj, setOptionsCorrectObj] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });
  const [optionsWrongObj, setOptionsWrongObj] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });

  const handleClick = (selectedOption, btnNum) => {
    if (props.correctAnswer === selectedOption) {
      setOptionsCorrectObj((prevState) => {
        return {
          ...prevState,
          [btnNum]: true,
        };
      });
    } else {
      setOptionsWrongObj((prevState) => {
        return {
          ...prevState,
          [btnNum]: true,
        };
      });
      setTimeout(() => {
        setOptionsCorrectObj((prevState) => {
          return {
            ...prevState,
            [btnNum]: true,
          };
        });
      }, 2000);
    }
  };
  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem
        button
        divider
        onClick={() => {
          handleClick(props.answers[0], "first");
        }}
      >
        {props.answers[0]}
        {optionsCorrectObj.first && (
          <CheckCircleTwoToneIcon
            style={{ marginLeft: 20, color: "#007bff" }}
          />
        )}
        {optionsWrongObj.first && (
          <CancelTwoToneIcon style={{ marginLeft: 20, color: "#007bff" }} />
        )}
      </ListItem>
      <Divider />
      <ListItem
        button
        divider
        onClick={() => {
          handleClick(props.answers[1], "second");
        }}
      >
        {props.answers[1]}
        {optionsCorrectObj.second && (
          <CheckCircleTwoToneIcon
            style={{ marginLeft: 20, color: "#007bff" }}
          />
        )}
        {optionsWrongObj.second && (
          <CancelTwoToneIcon style={{ marginLeft: 20, color: "#007bff" }} />
        )}
      </ListItem>
      <Divider />
      <ListItem
        button
        divider
        onClick={() => {
          handleClick(props.answers[2], "third");
        }}
      >
        {props.answers[2]}
        {optionsCorrectObj.third && (
          <CheckCircleTwoToneIcon
            style={{ marginLeft: 20, color: "#007bff" }}
          />
        )}
        {optionsWrongObj.third && (
          <CancelTwoToneIcon style={{ marginLeft: 20, color: "#007bff" }} />
        )}
      </ListItem>
      <Divider />
      <ListItem
        button
        divider
        onClick={() => {
          handleClick(props.answers[3], "fourth");
        }}
      >
        {props.answers[3]}
        {optionsCorrectObj.fourth && (
          <CheckCircleTwoToneIcon
            style={{ marginLeft: 20, color: "#007bff" }}
          />
        )}
        {optionsWrongObj.fourth && (
          <CancelTwoToneIcon style={{ marginLeft: 20, color: "#007bff" }} />
        )}
      </ListItem>
      <Divider />
    </List>
  );
}
