import React from "react";
import { AppConsumer } from "../../AppContext";
import Lyrics from "./Lyrics";

const LyricsWrapper = props => {
  return (
    <AppConsumer>
      {({ dispatch, authUser }) => <Lyrics {...props} dispatch={dispatch} />}
    </AppConsumer>
  );
};

export default LyricsWrapper;
