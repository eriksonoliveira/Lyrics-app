import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import Favourite from "./Favourite";

import "./FavoutiteTracksList.css";

const FavouriteTracksList = props => {
  return (
    <div className="saved-favourites">
      {props.tracks_list.length > 0 ? (
        <React.Fragment>
          <header className="saved-favoutites-header text-center mb-3">
            Saved Tracks
          </header>
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
      ) : (
        <div>You don't have any saved traks</div>
      )}
    </div>
  );
};

export default FavouriteTracksList;
