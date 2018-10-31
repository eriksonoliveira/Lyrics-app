import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class AccountInfo extends Component {
  componentDidMount() {
    const { dispatch } = this.props.appContext;

    dispatch({
      type: "CHANGE_ACTIVE",
      payload: "Saved_tracks"
    });

    dispatch({
      type: "SHOW_ARROW"
    });
  }

  componentWillUnmount() {
    this.props.appContext.dispatch({
      type: "HIDE_ARROW"
    });
  }

  render() {
    const { authUser } = this.props.appContext;
    return (
      <div>
        <div>{authUser.email}</div>
      </div>
    );
  }
}

export default withRouter(AccountInfo);
