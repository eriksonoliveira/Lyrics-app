import React from "react";

const SaveBtn = props => {
  const classes = `save-btn ${props.saved ? "track-saved" : ""}`;
  return (
    <div className={classes} onClick={props.handleSaveClick}>
      save
    </div>
  );
};

export default SaveBtn;
