import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Topbar from "./components/Navbar/Topbar";
import Index from "./components/Index/Index";
import LyricsWrapper from "./containers/Lyrics/LyricsWrapper";

import { Provider } from "./context";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="app">
            <Topbar />
            <main className="app-main-content">
              <Switch>
                <Route exact path="/" render={() => <Index />} />
                <Route
                  exact
                  path="/lyrics/track/:id"
                  render={props => <LyricsWrapper {...props} />}
                />
              </Switch>
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
