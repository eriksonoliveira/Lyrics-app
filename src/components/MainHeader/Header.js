import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-header align-self-md-center text-center">
      <img
        className="main-header-logo"
        src={require("../../Images/Logo-LyricsFinder.svg")}
        alt="Logo Lyrics Finder"
      />
      <h1 className="main-header-name">Lyrics Finder</h1>
      <h2 className="main-header-text">Find lyrics and sing along</h2>
    </div>
  );
};

export default Header;
