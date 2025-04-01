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
  divider: {
    width: "100%",
  },
}));

export default function QuizOptions({ answers, correctAnswer, nextQuestion }) {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState(null);
  const [disableButton, setDisableButton] = useState(false);
  const [playCorrect] = useSound(correctAnswerSound);
  const [playWrong] = useSound(wrongAnswerSound);
  const [answered, setAnswered] = useState(false); // Track if an answer was selected

  const handleClick = (option) => {
    setDisableButton(true);
    setSelectedOption(option);
    setAnswered(true); // Mark as answered

    const isCorrect = option === correctAnswer;

    if (isCorrect) {
      playCorrect();
    } else {
      playWrong();
    }

    // Proceed to the next question after a short delay
    setTimeout(() => {
      nextQuestion(); // Move to next question
      setSelectedOption(null); // Reset selection
      setAnswered(false); // Reset answered state
      setDisableButton(false); // Enable the buttons again
    }, 3000); // Wait 3 seconds before moving to the next question
  };

  return (
    <List component='nav' className={classes.root} aria-label='quiz-options'>
      {answers.map((answer, index) => {
        const isSelected = selectedOption === answer;
        const isCorrect = answer === correctAnswer;
        const isWrong = isSelected && !isCorrect; // Track if the selected answer is wrong

        return (
          <React.Fragment key={index}>
            <ListItem
              button
              onClick={() => handleClick(answer)}
              disabled={disableButton}
            >
              {answer}
              {answered && // Only show icons after the question is answered
                (isCorrect ? (
                  <CheckCircleTwoToneIcon
                    style={{ marginLeft: 20, color: "#007bff" }}
                  />
                ) : (
                  isWrong && (
                    <CancelTwoToneIcon
                      style={{ marginLeft: 20, color: "#ff0000" }}
                    />
                  )
                ))}
            </ListItem>
            <Divider className={classes.divider} />
          </React.Fragment>
        );
      })}
    </List>
  );
}
