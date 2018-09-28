import React, { Component } from "react";

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
        focused: false,
        trackTitle: ""
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
    case "CHANGE_TRACK":
      return {
        ...state,
        trackTitle: action.payload
      };
    case "RESET_INPUT":
      return {
        ...state,
        trackTitle: ""
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
      trackTitle: "",
      activePage: "",
      changeActivePage: this.changeActivePage,
      dispatch: action => this.setState(state => reducer(state, action))
    };
  }

  changeActivePage = activePage => {
    this.setState({ activePage });
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
