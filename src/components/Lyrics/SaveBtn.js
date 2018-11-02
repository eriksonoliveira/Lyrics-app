import React from "react";
import Icon from "./Icon";
import IconSaved from "./IconSaved";

import "./SaveBtn.css";

const SaveBtn = props => {
  return (
    <div className="save-btn" onClick={props.handleSaveClick}>
      {props.saved ? <IconSaved /> : <Icon />}
    </div>
  );
};

export default SaveBtn;
