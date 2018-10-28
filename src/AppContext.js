import React, { Component } from "react";
import { firebase } from "./firebase";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT_FOCUS":
      return {
        ...state,
        focused: true,
        showArrow: true
      };
    case "REMOVE_FOCUS":
      return {
        ...state,
        focused: false,
        showArrow: false
      };
    case "CHANGE_ACTIVE":
      return {
        ...state,
        activePage: action.payload
      };
    case "SHOW_ARROW":
      return {
        ...state,
        showArrow: true
      };
    case "HIDE_ARROW":
      return {
        ...state,
        showArrow: false
      };
    default:
      return state;
  }
};

export class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      showArrow: false,
      authUser: null,
      activePage: "",
      dispatch: action => {
        this.setState(state => reducer(state, action));
      }
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser: authUser.email })
        : this.setState({ authUser: null });
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const AppConsumer = Context.Consumer;
