import React from "react";
import { Consumer } from "../../context";
import Lyrics from "./Lyrics";

const LyricsWrapper = props => {
  return (
    <Consumer>
      {({ changeActivePage }) => (
        <Lyrics {...props} changeActivePage={changeActivePage} />
      )}
    </Consumer>
  );
};

export default LyricsWrapper;
