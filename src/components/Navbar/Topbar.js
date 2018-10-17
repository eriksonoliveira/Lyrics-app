import React from "react";
import { Consumer } from "../../context";

import Navbar from "./Navbar";
import BackButton from "./Button/BackButton";
import MenuButton from "./Button/MenuButton";

import "./Navbar.css";

const Topbar = () => {
  return (
    <Consumer>
      {({ focused, ...context }) => {
        return (
          <Navbar>
            <React.Fragment>
              {focused ? <BackButton {...context} /> : <MenuButton />}
            </React.Fragment>
          </Navbar>
        );
      }}
    </Consumer>
  );
};

export default Topbar;
