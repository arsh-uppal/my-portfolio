import React from "react";
import "./quizPopUp.css";
import Quiz from "./Quiz";

const QuizForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      props.toggleQuizForm();
    }, 4000);
  };

  return (
    <div className="quiz-popup" id="myForm">
      <form className="form-container-quiz" onSubmit={handleSubmit}>
        <div className="quiz-container">
          <Quiz />
        </div>
        <button type="submit" className="btn-quiz"></button>
      </form>
    </div>
  );
};

export default QuizForm;
