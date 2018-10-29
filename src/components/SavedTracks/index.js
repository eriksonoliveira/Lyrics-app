import React from "react";
import { AppConsumer } from "../../AppContext";
import SavedTracksList from "./SavedTracksList";

const SavedTracks = () => {
  return (
    <AppConsumer>
      {({ dispatch }) => <SavedTracksList dispatch={dispatch} />}
    </AppConsumer>
  );
};

export default SavedTracks;
