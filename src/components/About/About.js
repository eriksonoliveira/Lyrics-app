import React, { Component } from "react";
import AboutText from "./AboutText";
import "./About.css";

export class About extends Component {
  componentDidMount() {
    this.props.context.changeActivePage("about");
    this.props.context.dispatch({
      type: "INPUT_FOCUS"
    });
  }

  componentWillUnmount() {
    this.props.context.dispatch({
      type: "REMOVE_FOCUS"
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
