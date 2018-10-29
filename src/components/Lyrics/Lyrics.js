import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const scrollbarStyle = {
  backgroundColor: "rgba(142, 135, 150, 0.7)",
  borderRadius: 2
};

const Lyrics = props => {
  const lyrics_body = props.lyrics_body.split("\n");

  return (
    <div className="lyrics-body">
      <Scrollbars
        renderThumbVertical={props => <div {...props} style={scrollbarStyle} />}
      >
        <div className="lyrics-text text-left">
          {lyrics_body.map((phrase, index) => {
            return (
              <p key={`${phrase.slice(0, 4)}-${index}`} className="my-1 pr-1">
                {phrase}
              </p>
            );
          })}
        </div>
      </Scrollbars>
    </div>
  );
};

export default Lyrics;
