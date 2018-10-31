import React from "react";
import { AppConsumer } from "../../AppContext";
import SavedTracksList from "./SavedTracksList";
import withAuthorization from "../withAuthorization";

const SavedTracks = () => {
  return (
    <AppConsumer>
      {({ dispatch }) => <SavedTracksList dispatch={dispatch} />}
    </AppConsumer>
  );
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(SavedTracks);
