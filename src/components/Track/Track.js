import React from "react";
import { Link } from "react-router-dom";

const Track = props => {
  const { track } = props;
  return (
    <div className="track">
      <Link to={`lyrics/track/${track.track_id}`} className="track-link">
        <h5 className="track-name">{track.track_name}</h5>
        <p className="track-artist-album">
          {`${track.artist_name} - ${track.album_name}`}
        </p>
      </Link>
    </div>
  );
};

export default Track;
