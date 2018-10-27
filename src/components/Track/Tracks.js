import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

import Spinner from "../Spinner/Spinner";
import Track from "./Track";

import "./Track.css";

class Tracks extends Component {
  render() {
    if (
      this.props.tracks_list === undefined ||
      this.props.tracks_list.length === 0
    ) {
      // Result is pending, render the spinner
      return <Spinner />;
    } else if (this.props.tracks_list[0] === "not_found") {
      // Track name not found, render a message
      return <h3 className="text-center mb-4">{this.props.heading}</h3>;
    } else {
      return (
        <div className="tracks-list">
          <Scrollbars
            renderThumbVertical={props => (
              <div {...props} className="thumb-vertical" />
            )}
          >
            {this.props.tracks_list.map(item => (
              <Track key={item.track.track_id} track={item.track} />
            ))}
          </Scrollbars>
        </div>
      );
    }
  }
}

export default Tracks;
