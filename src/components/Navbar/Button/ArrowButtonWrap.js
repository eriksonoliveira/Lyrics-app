import React, { Component } from "react";
import ArrowButton from "./ArrowButton";

export class ArrowButtonWrap extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.activePage === "home") {
      this.props.appDispatch({ type: "REMOVE_FOCUS" });
      this.props.trackDispatch({ type: "HIDE_LIST", payload: [] });
    } else {
      this.props.history.goBack();
    }
  }

  render() {
    return (
      <ArrowButton
        handleClick={this.handleClick}
        activePage={this.props.activePage}
      />
    );
  }
}

export default ArrowButtonWrap;
