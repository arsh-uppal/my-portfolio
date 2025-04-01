import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";
import QuizOptions from "./QuizOptions";
import he from "he"; // HTML decoding library

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "rgb(50, 138, 118)",
    fontSize: "1.2em",
    fontWeight: "600",
  },
  section1: { margin: theme.spacing(3, 2) },
  section2: { margin: theme.spacing(2) },
}));

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch 100 questions at once
  async function fetchQuestions() {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://opentdb.com/api.php?amount=100&type=multiple"
      );
      const fetchedQuestions = data.results.map((result) => ({
        question: he.decode(result.question),
        correct_answer: result.correct_answer,
        answers: [...result.incorrect_answers, result.correct_answer].sort(
          () => 0.5 - Math.random()
        ),
      }));
      setQuestions(fetchedQuestions);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching questions:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const classes = useStyles();
  const currentQuestion = questions[currentIndex];

  return (
    <div className={classes.root}>
      {loading || !currentQuestion ? (
        <>
          <Skeleton variant='rectangular' height={118} animation='wave' />
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} variant='text' animation='wave' />
          ))}
        </>
      ) : (
        <>
          <div className={classes.section1}>
            <Typography
              variant='inherit'
              dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
            />
          </div>
          <div className={classes.section2}>
            <QuizOptions
              answers={currentQuestion.answers}
              correctAnswer={currentQuestion.correct_answer}
              nextQuestion={nextQuestion}
            />
          </div>
        </>
      )}
    </div>
  );
}
