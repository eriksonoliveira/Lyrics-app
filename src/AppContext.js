import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT_FOCUS":
      return {
        ...state,
        focused: true
      };
    case "REMOVE_FOCUS":
      return {
        ...state,
        focused: false
      };
    case "CHANGE_ACTIVE":
      return {
        ...state,
        activePage: action.payload
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
      activePage: "",
      dispatch: action => {
        this.setState(state => reducer(state, action));
      }
    };
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
