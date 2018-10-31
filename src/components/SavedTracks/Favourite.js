import React from "react";
import { Link } from "react-router-dom";
import DeleteBtn from "./DeleteBtn";

const Favourite = props => {
  const { track } = props;
  return (
    <div className="track">
      <Link to={`lyrics/track/${track.track_id}`} className="track-link">
        <h5 className="track-name">{track.track_name}</h5>
        <p className="track-artist-album">
          {`${track.artist_name} - ${track.album_name}`}
        </p>
      </Link>
      <DeleteBtn
        deleteFavourite={props.deleteFavourite}
        track_key={props.track_key}
      />
    </div>
  );
};

export default Favourite;
