import React from "react";
import { TrackConsumer } from "../../TrackContext";
import { AppConsumer } from "../../AppContext";

import Navbar from "./Navbar";
import ArrowButtonWrap from "./Button/ArrowButtonWrap";
import MenuButton from "./Button/MenuButton";

import "./Navbar.css";

const Topbar = () => {
  return (
    <AppConsumer>
      {({ focused, activePage, ...context }) => (
        <TrackConsumer>
          {trackContext => (
            <Navbar>
              <React.Fragment>
                {focused ? (
                  <ArrowButtonWrap
                    trackDispatch={trackContext.dispatch}
                    appDispatch={context.dispatch}
                    activePage={activePage}
                  />
                ) : (
                  <MenuButton />
                )}
              </React.Fragment>
            </Navbar>
          )}
        </TrackConsumer>
      )}
    </AppConsumer>
  );
};

export default Topbar;
