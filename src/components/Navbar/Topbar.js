import React from "react";
import { Consumer } from "../../context";

import Navbar from "./Navbar";
import BackButton from "../Button/BackButton";
import MenuButton from "../Button/MenuButton";

const Topbar = props => {
  return (
    <Consumer>
      {context => {
        const { focused, dispatch } = context;
        return (
          <Navbar>
            <React.Fragment>
              {focused ? (
                <BackButton activePage={props.activePage} dispatch={dispatch} />
              ) : (
                <MenuButton />
              )}
            </React.Fragment>
          </Navbar>
        );
      }}
    </Consumer>
  );
};

export default Topbar;
