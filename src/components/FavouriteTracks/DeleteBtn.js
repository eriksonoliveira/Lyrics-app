import React from "react";
import "./DeleteBtn.css";

const DeleteBtn = props => {
  return (
    <div
      className="delete-track"
      onClick={() => props.deleteFavourite(props.track_key)}
    />
  );
};

export default DeleteBtn;
