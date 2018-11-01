import React, { Component } from "react";
import FavouriteTracksList from "./FavouriteTracksList";
import withAuthorization from "../withAuthorization";
import withFavouriteList from "./withFavouriteList";

class FavouriteTracks extends Component {
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
    const TracksListWithFavourite = withFavouriteList(FavouriteTracksList);
    return <TracksListWithFavourite />;
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(FavouriteTracks);
