import React from "react";

const SpotifyPlayer = props => {
  const iframeStyle = {
    width: 280,
    height: 80,
    border: "2px solid #BBBBBB"
  };

  if (props.artist_id === 0) {
    return <p>No preview available</p>;
  } else {
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
  }
};

export default SpotifyPlayer;
