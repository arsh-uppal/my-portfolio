import React from "react";
import "./chatPopUp.css";
import SendTwoToneIcon from "@material-ui/icons/SendTwoTone";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const ChatForm = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    setOpen(true);
    event.preventDefault();
    setTimeout(() => {
      props.toggleChatForm();
    }, 3000);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div className="chat-popup" id="myForm">
      <form className="form-container" onSubmit={handleSubmit}>
        <textarea
          placeholder="Send me a message...(Do Include your contact info)"
          name="msg"
          required
        ></textarea>

        <button type="submit" className="btn">
          <SendTwoToneIcon
            color="primary"
            fontSize="large"
            className="send-button"
          />
        </button>
      </form>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        severity="success"
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="This functionality will be available soon..."
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default ChatForm;
