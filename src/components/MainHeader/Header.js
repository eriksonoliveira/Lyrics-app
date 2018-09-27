import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-header align-self-md-center text-center">
      <img
        className="main-header-logo"
        src={require("../../Images/Logo-LyricsFinder.svg")}
        alt="Logo"
      />
      <h1>Find lyrics and sing along</h1>
    </div>
  );
};

export default Header;
