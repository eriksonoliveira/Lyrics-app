import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Topbar from "./components/Navbar/Topbar";
import Index from "./components/Index/Index";
import LyricsPage from "./containers/Lyrics/LyricsPage";

import { Provider } from "./context";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      activePage: "",
      changeActivePage: this.changeActivePage
    };
  }

  changeActivePage = activePage => {
    this.setState({ activePage });
  };

  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <div className="app">
              <Topbar {...this.state} />
              <main className="container">
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <Index {...this.state} />}
                  />
                  <Route
                    exact
                    path="/lyrics/track/:id"
                    render={props => <LyricsPage {...props} {...this.state} />}
                  />
                </Switch>
              </main>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
