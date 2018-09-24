import React from "react";

const Lyrics = props => {
  const lyrics_body = props.lyrics_body.split("\n");

  return (
    <div className="lyrics-body">
      <div className="lyrics-text text-left">
        {lyrics_body.map((phrase, index) => {
          return (
            <p key={`${phrase.slice(0, 4)}-${index}`} className="my-1">
              {phrase}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Lyrics;
