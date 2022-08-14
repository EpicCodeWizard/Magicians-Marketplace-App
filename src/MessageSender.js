import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./MessageSender.css";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Button from "@material-ui/core/Button";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl
    });

    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Try typing something, ${user.displayName}`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL (Optional)"
          />

          <Button
            onClick={handleSubmit}
            type="submit"
            style={{ color: "#2e81f4" }}
          >
            Send
          </Button>

          <QuestionMarkIcon variant="outlined" onClick={handleClickOpen} />
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"WELCOME TO MAGICANS MAKETPLACE!"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Things you can say! <br></br>
                <br></br> 1. introduce yourself <br></br> 2. a cool trick{" "}
                <br></br> 3. Competition? <br></br> 4. Interview
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <AddAPhotoIcon style={{ color: "#2e81f4" }} />
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
