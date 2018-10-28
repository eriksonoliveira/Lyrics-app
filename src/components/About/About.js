import React, { Component } from "react";
import AboutText from "./AboutText";
import "./About.css";

export class About extends Component {
  componentDidMount() {
    this.props.context.dispatch({
      type: "CHANGE_ACTIVE",
      payload: "About"
    });

    this.props.context.dispatch({
      type: "SHOW_ARROW"
    });
  }

  componentWillUnmount() {
    this.props.context.dispatch({
      type: "HIDE_ARROW"
    });
  }

  render() {
    return (
      <div className="about">
        <AboutText />
      </div>
    );
  }
}

export default About;
