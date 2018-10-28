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
      {({ showArrow, activePage, authUser, ...context }) => (
        <TrackConsumer>
          {trackContext => (
            <Navbar>
              <React.Fragment>
                {showArrow ? (
                  <ArrowButtonWrap
                    trackDispatch={trackContext.dispatch}
                    appDispatch={context.dispatch}
                    activePage={activePage}
                  />
                ) : (
                  <MenuButton authUser={authUser} />
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
