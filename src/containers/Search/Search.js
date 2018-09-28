import React, { Component } from "react";
import axios from "axios";
import key from "../../keys/keys_dev";

import Form from "./Form";
import Header from "../../components/Header/Header";

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleEvent = this.handleEvent.bind(this);
    this.findTrack = this.findTrack.bind(this);
  }

  componentDidMount() {
    this.props.changeActivePage("home");
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

  findTrack(dispatch, list_active, e) {
    e.preventDefault();

    // If the list is active, just clear the list, otherwise, make the list active
    const type = list_active ? "CLEAR_TRACKS" : "SHOW_LIST";

    dispatch({
      type,
      payload: []
    });

    if (this.props.trackTitle.length > 0) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track_artist=${
            this.props.trackTitle
          }&page_size=10&page=1&s_track_rating=desc&apikey=${
            // process.env.REACT_APP_MM_KEY
            key.musixmatchPublishableKey
          }`
        )
        .then(res => {
          if (res.data.message.header.available !== 0) {
            dispatch({
              type: "SEARCH_TRACKS",
              payload: res.data.message.body.track_list
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
  }

  render() {
    return (
      <div className="search">
        <Header />
        <Form findTrack={this.findTrack} handleEvent={this.handleEvent} />
      </div>
    );
  }
}

export default Search;
