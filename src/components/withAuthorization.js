import React from "react";
import { withRouter } from "react-router-dom";
import { AppConsumer } from "../AppContext";
import { firebase } from "../firebase";

import * as routes from "../constants/routes";

const withAuthorization = authCondition => Component => {
  class withAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push(routes.HOME);
        }
      });
    }
    render() {
      return (
        <AppConsumer>
          {({ authUser }) => (authUser ? <Component {...this.props} /> : null)}
        </AppConsumer>
      );
    }
  }
  return withRouter(withAuthorization);
};

export default withAuthorization;
