import React from "react";

function AboutText() {
  return (
    <React.Fragment>
      <p className="about-text">
        Lyrics Finder is an app developed by designer{" "}
        <a href="https://silviayaguchi.com">Silvia Yaguchi</a> and Javascript
        developer <a href="https://eriksonoliveira.com">Erikson Oliveira</a>.
      </p>
      <p className="about-text">
        The app enables users to type tracks names and get the lyrics for the
        tracks. Alternatively, tracks can be found by typing track name and
        artist. The lyrics are provided by Musixmatch and the songs previews are
        linked to Spotify.
      </p>
    </React.Fragment>
  );
}

export default AboutText;
