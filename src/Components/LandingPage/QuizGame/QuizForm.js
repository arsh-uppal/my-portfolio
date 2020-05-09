import React from "react";
import "./quizPopUp.css";
import SendTwoToneIcon from "@material-ui/icons/SendTwoTone";

const QuizForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      props.toggleQuizForm();
    }, 3000);
  };

  return (
    <div className="quiz-popup" id="myForm">
      <form className="form-container-quiz" onSubmit={handleSubmit}>
        <div className="quiz-container"></div>

        <button type="submit" className="btn-quiz">
          <SendTwoToneIcon
            color="primary"
            fontSize="large"
            className="send-button-quiz"
          />
        </button>
      </form>
    </div>
  );
};

export default QuizForm;
