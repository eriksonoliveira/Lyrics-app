import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Topbar from "./Navbar/Topbar";
import Index from "./Index/Index";
import AboutWrap from "./About/AboutWrap";
import SigninWrap from "./Signin/SigninWrap";
import SignupWrap from "./Signup/SignupWrap";
import LyricsWrap from "../containers/Lyrics/LyricsWrap";

import * as routes from "../constants/routes";
import { firebase } from "../firebase";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser: authUser.email })
        : this.setState({ authUser: null });
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Topbar authUser={this.state.authUser} />
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
              </React.Fragment>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
