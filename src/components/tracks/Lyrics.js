import React from "react";

const Lyrics = props => {
  const lyrics_body = props.lyrics_body.split("\n");

  return (
    <div className="card-text text-left">
      {lyrics_body.map((phrase, index) => {
        return (
          <p key={`${phrase.slice(0, 4)}-${index}`} className="my-1">
            {phrase}
          </p>
        );
      })}
    </div>
  );
};

export default Lyrics;
