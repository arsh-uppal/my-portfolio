import React from "react";
import "./quizPopUp.css";
import QuizForm from "./QuizForm";
import NotificationsActiveTwoToneIcon from "@material-ui/icons/NotificationsActiveTwoTone";
import CancelTwoToneIcon from "@material-ui/icons/CancelTwoTone";

const QuizPopUp = () => {
  const [showQuizForm, setShowQuizForm] = React.useState(false);
  const toggleQuizForm = () => {
    if (showQuizForm) {
      setShowQuizForm(false);
    } else {
      setShowQuizForm(true);
    }
  };

  return (
    <div>
      {showQuizForm ? (
        <div>
          <QuizForm toggleQuizForm={toggleQuizForm} />
          <CancelTwoToneIcon
            color="secondary"
            fontSize="large"
            className="close-button-quiz"
            onClick={toggleQuizForm}
          />
        </div>
      ) : (
        <NotificationsActiveTwoToneIcon
          color="action"
          fontSize="large"
          className="open-button-quiz ripple"
          onClick={toggleQuizForm}
        />
      )}
    </div>
  );
};

export default QuizPopUp;
