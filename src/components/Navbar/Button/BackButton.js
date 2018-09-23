import React from "react";
import { Link } from "react-router-dom";

const BackButton = props => {
  const { activePage, dispatch } = props;
  return activePage === "home" ? (
    <button
      className="btn btn-dark btn-sm mb-4"
      onClick={() => dispatch({ type: "HIDE_LIST", payload: [] })}
    >
      back
    </button>
  ) : (
    <Link to="/" className="btn btn-dark btn-sm mb-4">
      Go Back
    </Link>
  );
};

export default BackButton;
