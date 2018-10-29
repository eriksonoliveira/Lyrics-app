import React, { Component } from "react";

class SavedTracksList extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "CHANGE_ACTIVE",
      payload: "Saved_tracks"
    });

    this.props.dispatch({
      type: "SHOW_ARROW"
    });
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: "HIDE_ARROW"
    });
  }

  render() {
    return <div>You don't have any saved tracks</div>;
  }
}

export default SavedTracksList;
