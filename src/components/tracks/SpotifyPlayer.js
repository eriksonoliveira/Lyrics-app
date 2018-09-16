import React from "react";

const SpotifyPlayer = props => {
  const iframeStyle = {
    width: "90%",
    height: 80
  };

  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${props.artist_id}`}
      style={iframeStyle}
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
      title="Spotify play button"
    />
  );
};

export default SpotifyPlayer;
