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
        trackTitle: ""
      };
    case "SHOW_LIST":
      return {
        ...state,
        list_active: true
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

export class TrackProvider extends Component {
  constructor() {
    super();

    this.state = {
      tracks_list: [],
      heading: "",
      list_active: false,
      trackTitle: "",
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

export const TrackConsumer = Context.Consumer;
