import React from "react";
import { Consumer } from "../../context";

const Header = () => {
  return (
    <Consumer>
      {({ focused, ...context }) => {
        return (
          focused || (
            <header>
              <h1 className="display-4 text-center">
                <i className="fas fa-music" /> Search for a Song
              </h1>
              <p className="lead text-center">Get the lyrics for any song</p>
            </header>
          )
        );
      }}
    </Consumer>
  );
};

export default Header;
