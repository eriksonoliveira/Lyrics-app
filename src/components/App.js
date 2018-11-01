import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Topbar from "./Navbar/Topbar";
import Index from "./Index/Index";
import AboutWrap from "./About/AboutWrap";
import SigninWrap from "./Signin/SigninWrap";
import SignupWrap from "./Signup/SignupWrap";
import LyricsWrap from "../containers/Lyrics/LyricsWrap";
import Account from "./Account";
import FavouriteTracks from "./FavouriteTracks";

import * as routes from "../constants/routes";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Topbar />
          <main className="app-main-content">
            <Switch>
              <React.Fragment>
                <Route exact path={routes.HOME} render={() => <Index />} />
                <Route
                  exact
                  path={routes.LYRICS}
                  render={props => <LyricsWrap {...props} />}
                />
                <Route exact path={routes.ABOUT} render={() => <AboutWrap />} />
                <Route
                  exact
                  path={routes.SIGN_IN}
                  render={() => <SigninWrap />}
                />
                <Route
                  exact
                  path={routes.SIGN_UP}
                  render={() => <SignupWrap />}
                />
                <Route exact path={routes.ACCOUNT} render={() => <Account />} />
                <Route
                  exact
                  path={routes.SAVED_TRACKS}
                  render={() => <FavouriteTracks />}
                />
              </React.Fragment>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
