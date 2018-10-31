import React, { Component } from "react";
import SavedTracksList from "./SavedTracksList";
import withAuthorization from "../withAuthorization";
import withFavouriteList from "./withFavouriteList";

class SavedTracks extends Component {
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
    const TracksListWithFavourite = withFavouriteList(SavedTracksList);
    return <TracksListWithFavourite />;
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(SavedTracks);
