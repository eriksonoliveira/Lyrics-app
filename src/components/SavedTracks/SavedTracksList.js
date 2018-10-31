import React from "react";
import Tracks from "../Track/Tracks";

const SavedTracksList = props => {
  return (
    <React.Fragment>
      <header className="text-center">Saved Tracks</header>
      <Tracks tracks_list={props.tracks_list} />
    </React.Fragment>
  );
};

export default SavedTracksList;
