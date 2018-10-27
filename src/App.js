import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Topbar from "./components/Navbar/Topbar";
import Index from "./components/Index/Index";
import AboutWrap from "./components/About/AboutWrap";
import LyricsWrapper from "./containers/Lyrics/LyricsWrapper";

import { AppProvider } from "./AppContext";
import { TrackProvider } from "./TrackContext";

import "./App.css";

class App extends Component {
  render() {
    return (
      <AppProvider>
        <TrackProvider>
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
                      render={props => <LyricsWrapper {...props} />}
                    />
                    <Route exact path="/about" render={() => <AboutWrap />} />
                  </React.Fragment>
                </Switch>
              </main>
            </div>
          </Router>
        </TrackProvider>
      </AppProvider>
    );
  }
}

export default App;
