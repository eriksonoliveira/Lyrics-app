import React, { Component } from "react";
//import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_TRACKS":
      return {
        ...state,
        tracks_list: action.payload,
        heading: "Search Results"
      };
    case "CLEAR_TRACKS":
      return {
        ...state,
        tracks_list: action.payload
      };
    case "HIDE_LIST":
      return {
        ...state,
        tracks_list: action.payload,
        list_active: false,
        focused: false
      };
    case "SHOW_LIST":
      return {
        ...state,
        list_active: true
      };
    case "INPUT_FOCUS":
      return {
        ...state,
        focused: true
      };
    case "NOT_FOUND":
      return {
        ...state,
        tracks_list: action.payload,
        heading: "No track found"
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  constructor() {
    super();

    this.state = {
      tracks_list: [],
      heading: "Top 10 Tracks",
      list_active: false,
      focused: false,
      dispatch: action => this.setState(state => reducer(state, action))
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

export const Consumer = Context.Consumer;
