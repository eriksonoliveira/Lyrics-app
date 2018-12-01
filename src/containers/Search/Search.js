import React, { Component } from "react";
import { getTracksListFromMusixmatch } from "../../services/musixmatch";

import Form from "./Form";
import Header from "../../components/Header/Header";

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleEvent = this.handleEvent.bind(this);
    this.findTrack = this.findTrack.bind(this);
  }

  componentDidMount() {
    this.props.appDispatch({
      type: "CHANGE_ACTIVE",
      payload: "home"
    });
  }

  handleEvent(action) {
    switch (action.type) {
      case "CHANGE":
        return action.param({
          type: "CHANGE_TRACK",
          payload: action.event.target.value
        });
      case "FOCUS":
        return action.param({
          type: "INPUT_FOCUS",
          payload: []
        });
      case "RESET":
        return action.param({
          type: "RESET_INPUT"
        });
      default:
        return console.warn(`No case for event type "${action.type}"`);
    }
  }

  toggleList(dispatch, active) {
    // If the list is active, just clear the list, otherwise, make the list active
    const type = active ? "CLEAR_TRACKS" : "SHOW_LIST";
    dispatch({
      type,
      payload: []
    });
  }

  findTrack(dispatch, list_active, e) {
    e.preventDefault();

    this.toggleList(dispatch, list_active);

    if (this.props.trackTitle.length > 0) {
      getTracksListFromMusixmatch(this.props.trackTitle)
        .then(res => {
          if (res.header.available !== 0) {
            dispatch({
              type: "SEARCH_TRACKS",
              payload: res.body.track_list
            });
          } else {
            dispatch({
              type: "NOT_FOUND",
              payload: ["not_found"]
            });
          }
        })
        .catch(err => console.log(err));
    }
    return true;
  }

  render() {
    return (
      <div className="search">
        <Header />
        <Form
          findTrack={this.findTrack}
          handleEvent={this.handleEvent}
          appDispatch={this.props.appDispatch}
        />
      </div>
    );
  }
}

export default Search;
