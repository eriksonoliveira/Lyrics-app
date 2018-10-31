import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import Favourite from "./Favourite";

const SavedTracksList = props => {
  return (
    <React.Fragment>
      <header className="text-center">Saved Tracks</header>
      <div className="tracks-list">
        <Scrollbars
          renderThumbVertical={props => (
            <div {...props} className="thumb-vertical" />
          )}
        >
          {props.tracks_list.map(item => (
            <Favourite
              key={item.track.track_id}
              track={item.track}
              track_key={item.track_key}
              deleteFavourite={props.deleteFavourite}
            />
          ))}
        </Scrollbars>
      </div>
    </React.Fragment>
  );
};

export default SavedTracksList;
