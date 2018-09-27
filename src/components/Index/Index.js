import React from "react";
import { Consumer } from "../../context";
import Tracks from "../Track/Tracks";
import Search from "../../containers/Search/Search";

const Index = props => {
  return (
    <Consumer>
      {context => {
        return (
          <React.Fragment>
            <Search {...props} trackTitle={context.trackTitle} />
            {context.list_active && <Tracks />}
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default Index;
