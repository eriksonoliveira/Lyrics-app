import React, { Component } from "react";
import { Consumer } from "../../context";

import Spinner from "../Spinner/Spinner";
import Track from "./Track";

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { tracks_list, heading } = value;
          if (tracks_list === undefined || tracks_list.length === 0) {
            // Result is pending, render the spinner
            return <Spinner />;
          } else if (tracks_list[0] === "not_found") {
            // Track name not found, render a message
            return <h3 className="text-center mb-4">{heading}</h3>;
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {tracks_list.map(item => (
                    <Track key={item.track.track_id} track={item.track} />
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
