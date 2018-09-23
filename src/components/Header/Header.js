import React from "react";
import { Consumer } from "../../context";

import "./Header.css";

const Header = () => {
  return (
    <Consumer>
      {({ focused, ...context }) => {
        return (
          focused || (
            <header className="header">
              <h1 className="header-text text-center">
                Find lyrics for <br /> your favorite tracks
              </h1>
            </header>
          )
        );
      }}
    </Consumer>
  );
};

export default Header;
