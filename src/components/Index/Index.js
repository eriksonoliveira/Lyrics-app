import React from "react";
import { TrackConsumer } from "../../TrackContext";
import { AppConsumer } from "../../AppContext";
import Tracks from "../Track/Tracks";
import Search from "../../containers/Search/Search";

const Index = props => {
  return (
    <TrackConsumer>
      {({ trackTitle, list_active, tracks_list, heading }) => (
        <AppConsumer>
          {({ dispatch }) => (
            <React.Fragment>
              <Search trackTitle={trackTitle} appDispatch={dispatch} />
              {list_active && (
                <Tracks heading={heading} tracks_list={tracks_list} />
              )}
            </React.Fragment>
          )}
        </AppConsumer>
      )}
    </TrackConsumer>
  );
};

export default Index;
