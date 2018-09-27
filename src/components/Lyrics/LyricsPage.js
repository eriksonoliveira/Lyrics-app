import React from "react";
import Moment from "react-moment";

import Lyrics from "./Lyrics";
import SpotifyPlayer from "../Player/SpotifyPlayer";

const LyricsPage = props => {
  return (
    <div className="lyrics">
      <h1 className="lyrics-track-name">{props.track.track_name}</h1>
      <h2 className="lyrics-artist-album">{`${props.track.artist_name} - ${
        props.track.album_name
      }`}</h2>
      <h2 className="lyrics-release-date">
        <Moment format="YYYY">{props.track.first_release_date}</Moment>
      </h2>
      <Lyrics lyrics_body={props.lyrics.lyrics_body} />
      <div>
        <SpotifyPlayer artist_id={props.artist.id} />
      </div>
      <div className="lyrics-spotify-link">
        <a
          href={props.artist.external_urls.spotify}
          target="_blank"
          rel="noreferrer noopener"
        >
          Listen on <strong>Spotify</strong>
        </a>
      </div>
    </div>
  );
};

export default LyricsPage;
