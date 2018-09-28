import React from "react";
import { Consumer } from "../../context";
import Tracks from "../Track/Tracks";
import Search from "../../containers/Search/Search";

const Index = props => {
  return (
    <Consumer>
      {({ trackTitle, changeActivePage, list_active }) => {
        return (
          <React.Fragment>
            <Search
              trackTitle={trackTitle}
              changeActivePage={changeActivePage}
            />
            {list_active && <Tracks />}
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default Index;
