import React from "react";
import { Consumer } from "../../context";
import Transition from "react-transition-group/Transition";

import "./Header.css";

const Header = () => {
  return (
    <Consumer>
      {({ focused }) => {
        return (
          <Transition in={focused} timeout={300}>
            {status => (
              <header className={`header fade-${status}`}>
                <h1 className="header-text text-center">
                  Find lyrics for <br /> your favorite tracks
                </h1>
              </header>
            )}
          </Transition>
        );
      }}
    </Consumer>
  );
};

export default Header;
