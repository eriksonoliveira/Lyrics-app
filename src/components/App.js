import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Topbar from "./Navbar/Topbar";
import Index from "./Index/Index";
import AboutWrap from "./About/AboutWrap";
import SigninWrap from "./Signin/SigninWrap";
import SignupWrap from "./Signup/SignupWrap";
import LyricsWrap from "../containers/Lyrics/LyricsWrap";

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
                <Route exact path="/" render={() => <Index />} />
                <Route
                  exact
                  path="/lyrics/track/:id"
                  render={props => <LyricsWrap {...props} />}
                />
                <Route exact path="/about" render={() => <AboutWrap />} />
                <Route exact path="/login" render={() => <SigninWrap />} />
                <Route exact path="/signup" render={() => <SignupWrap />} />
              </React.Fragment>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
