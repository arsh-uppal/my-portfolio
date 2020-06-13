// This is my worst written code ever
// I apologise if you are going through it
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";
import CancelTwoToneIcon from "@material-ui/icons/CancelTwoTone";
import useSound from "use-sound";
import correctAnswerSound from "../../../sounds/correct-answer.mp3";
import wrongAnswerSound from "../../../sounds/wrong-answer.mp3";

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
  const [_correctAnswerSound] = useSound(correctAnswerSound);
  const [_wrongAnswerSound] = useSound(wrongAnswerSound);
  const [disableButton, setDisableButton] = useState(false);
  const handleClick = (selectedOption, btnNum) => {
    setDisableButton(true);
    if (props.correctAnswer === selectedOption) {
      _correctAnswerSound();
      setOptionsCorrectObj((prevState) => {
        return {
          ...prevState,
          [btnNum]: true,
        };
      });
      setTimeout(() => {
        props.fetchQuestion();
        removeMarkers();
      }, 3000);
    } else {
      _wrongAnswerSound();
      setOptionsWrongObj((prevState) => {
        return {
          ...prevState,
          [btnNum]: true,
        };
      });
      let updateRight = "";
      if (props.answers.indexOf(props.correctAnswer) === 0) {
        updateRight = "first";
      } else if (props.answers.indexOf(props.correctAnswer) === 1) {
        updateRight = "second";
      } else if (props.answers.indexOf(props.correctAnswer) === 2) {
        updateRight = "third";
      } else if (props.answers.indexOf(props.correctAnswer) === 3) {
        updateRight = "fourth";
      }
      setTimeout(() => {
        setOptionsCorrectObj((prevState) => {
          return {
            ...prevState,
            [updateRight]: true,
          };
        });
      }, 1000);
      setTimeout(() => {
        props.fetchQuestion();
        removeMarkers();
      }, 3000);
    }
    setTimeout(() => {
      setDisableButton(false);
    }, 3500);
  };
  const removeMarkers = () => {
    setOptionsCorrectObj({
      first: false,
      second: false,
      third: false,
      fourth: false,
    });
    setOptionsWrongObj({
      first: false,
      second: false,
      third: false,
      fourth: false,
    });
  };
  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem
        button
        divider
        onClick={() => {
          handleClick(props.answers[0], "first");
        }}
        disabled={disableButton}
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
        disabled={disableButton}
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
        disabled={disableButton}
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
        disabled={disableButton}
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
