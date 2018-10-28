import React, { Component } from "react";
import { firebaseAuth } from "../../firebase";

import Form from "../Form";

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.context.dispatch({
      type: "CHANGE_ACTIVE",
      payload: "Signup"
    });

    this.props.context.dispatch({
      type: "INPUT_FOCUS"
    });
  }

  componentWillUnmount() {
    this.props.context.dispatch({
      type: "REMOVE_FOCUS"
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.state);
    const { email, password } = this.state;
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    return (
      <Form
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        error={this.state.error}
        btnText="Sign Up"
      />
    );
  }
}

export default Signup;
