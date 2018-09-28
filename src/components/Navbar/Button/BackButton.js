import React from "react";
import { Link } from "react-router-dom";

const BackButton = props => {
  const { activePage, dispatch } = props;

  console.log(activePage);

  const icon = (
    <img
      className="navbar-btn-icon"
      src={require("./Images/back-icon.png")}
      alt="back"
      style={{ height: 15 }}
    />
  );

  return activePage === "home" ? (
    <span
      className="navbar-btn"
      onClick={() => dispatch({ type: "HIDE_LIST", payload: [] })}
    >
      {icon}
    </span>
  ) : (
    <Link to="/" className="navbar-btn">
      {icon}
    </Link>
  );
};

export default BackButton;
