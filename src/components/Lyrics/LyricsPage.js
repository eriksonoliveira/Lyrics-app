import React from "react";
import Moment from "react-moment";
import withFavourites from "../../containers/withFavourites";

import Lyrics from "./Lyrics";
import SpotifyPlayer from "../Player/SpotifyPlayer";
import SaveBtn from "./SaveBtn";

const LyricsPage = props => {
  const {
    track_name,
    artist_name,
    album_name,
    first_release_date
  } = props.track;

  const { lyrics, artist } = props;

  const FavouriteButton = withFavourites(SaveBtn, { ...props });

  return (
    <div className="lyrics">
      <h1 className="lyrics-track-name">{track_name}</h1>
      <h2 className="lyrics-artist-album">{`${artist_name} - ${album_name}`}</h2>
      <h2 className="lyrics-release-date">
        <Moment format="YYYY">{first_release_date}</Moment>
      </h2>
      <FavouriteButton />
      <Lyrics lyrics_body={lyrics.lyrics_body} />
      <div>
        <SpotifyPlayer artist_id={artist.id} />
      </div>
      <div className="lyrics-spotify-link">
        <a
          href={artist.external_urls.spotify}
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
