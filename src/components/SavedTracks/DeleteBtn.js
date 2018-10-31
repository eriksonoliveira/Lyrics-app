import React from "react";

const DeleteBtn = props => {
  return <div onClick={() => props.deleteFavourite(props.track_key)}>del</div>;
};

export default DeleteBtn;
