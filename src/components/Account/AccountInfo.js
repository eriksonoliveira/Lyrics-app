import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class AccountInfo extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({
      type: "CHANGE_ACTIVE",
      payload: "Saved_tracks"
    });

    dispatch({
      type: "SHOW_ARROW"
    });
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: "HIDE_ARROW"
    });
  }

  render() {
    const { authUser } = this.props;
    return <div className="account-email text-center">{authUser.email}</div>;
  }
}

export default withRouter(AccountInfo);
