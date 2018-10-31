import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { auth, db } from "../../firebase/";

import SignupForm from "./SignupForm";

import * as routes from "../../constants/routes";

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  error: {
    message: ""
  }
};

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE
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
      type: "SHOW_ARROW"
    });
  }

  componentWillUnmount() {
    this.props.context.dispatch({
      type: "HIDE_ARROW"
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    // console.log(this.state);

    const { username, email, password } = this.state;
    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    return (
      <SignupForm
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        {...this.state}
        btnText="Sign Up"
      />
    );
  }
}

export default withRouter(Signup);
