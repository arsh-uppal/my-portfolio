import React from "react";
import "./chatPopUp.css";
import ChatForm from "./ChatForm";
import ChatTwoToneIcon from "@material-ui/icons/ChatTwoTone";
import CancelTwoToneIcon from "@material-ui/icons/CancelTwoTone";

const ChatPopUp = () => {
  const [showChatForm, setShowChatForm] = React.useState(false);
  const toggleChatForm = () => {
    if (showChatForm) {
      setShowChatForm(false);
    } else {
      setShowChatForm(true);
    }
  };

  return (
    <div>
      {showChatForm ? (
        <div>
          <ChatForm toggleChatForm={toggleChatForm} />
          <CancelTwoToneIcon
            color="secondary"
            fontSize="large"
            className="close-button"
            onClick={toggleChatForm}
          />
        </div>
      ) : (
        <ChatTwoToneIcon
          color="action"
          fontSize="large"
          className="open-button"
          onClick={toggleChatForm}
        />
      )}
    </div>
  );
};

export default ChatPopUp;
