import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className="main-header text-center">
        <img
          className="main-header-logo"
          src={require("../../Images/Logo-LyricsFinder.svg")}
          alt="Logo Lyrics Finder"
        />
        <h1 className="main-header-name mt-1">Lyrics Finder</h1>
        <h2 className="main-header-text">Find lyrics and sing along</h2>
      </div>
      <div className="main-sub-header text-center">
        <h2>
          Try The App Here{" "}
          <span className="main-sub-header-arrow slide-right d-inline-block">
            >>
          </span>
        </h2>
      </div>
    </React.Fragment>
  );
};

export default Header;
