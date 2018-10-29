import React, { Component } from "react";

export class AccountInfo extends Component {
  componentDidMount() {
    this.props.appContext.dispatch({
      type: "CHANGE_ACTIVE",
      payload: "Saved_tracks"
    });

    this.props.appContext.dispatch({
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
    return <div>{authUser}</div>;
  }
}

export default AccountInfo;
