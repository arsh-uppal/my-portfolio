import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";
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
  const [quizQuestion, setQuizQuestion] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  async function fetchQuestion() {
    const result = await axios("https://opentdb.com/api.php?amount=1");
    let question = result.data.results[0].question;
    question = question.replace(/&quot;/g, '"');
    setQuizQuestion(question);
    let _answers = [
      ...result.data.results[0].incorrect_answers,
      result.data.results[0].correct_answer,
    ];
    _answers.sort(() => Math.random() - 0.5);
    setAnswers(_answers);
    setCorrectAnswer(result.data.results[0].correct_answer);
  }
  useEffect(() => {
    fetchQuestion();
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {quizQuestion ? (
        <div>
          <div className={classes.section1}>
            <Typography variant='inherit'>
              <span dangerouslySetInnerHTML={{ __html: quizQuestion }}></span>
            </Typography>
          </div>
          <div className={classes.section2}>
            <div>
              <QuizOptions
                answers={answers}
                correctAnswer={correctAnswer}
                fetchQuestion={fetchQuestion}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Skeleton variant='rect' height={118} animation='wave' />
          <Skeleton variant='text' animation='wave' />
          <Skeleton variant='text' animation='wave' />
          <Skeleton variant='text' animation='wave' />
          <Skeleton variant='text' animation='wave' />
        </div>
      )}
    </div>
  );
}
