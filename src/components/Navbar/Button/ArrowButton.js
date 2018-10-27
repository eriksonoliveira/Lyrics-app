import React from "react";
import { Link } from "react-router-dom";

const BackButton = props => {
  const icon = (
    <img
      className="navbar-btn-icon"
      src={require("./Images/back-icon.png")}
      alt="back"
      style={{ height: 15 }}
    />
  );

  return props.activePage === "home" ? (
    <span className="navbar-btn" onClick={props.handleClick}>
      {icon}
    </span>
  ) : (
    <Link to="/" className="navbar-btn">
      {icon}
    </Link>
  );
};

export default BackButton;
