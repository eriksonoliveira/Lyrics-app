import React from "react";
import { TrackConsumer } from "../../TrackContext";
import { AppConsumer } from "../../AppContext";
import { withRouter } from "react-router-dom";

import Navbar from "./Navbar";
import ArrowButtonWrap from "./Button/ArrowButtonWrap";
import MenuButton from "./Button/MenuButton";

import "./Navbar.css";

const Topbar = props => {
  const { history } = props;
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
                    history={history}
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

export default withRouter(Topbar);
