import React from "react";
import { Consumer } from "../../context";
import Tracks from "../Track/Tracks";
import Search from "../../containers/Search/Search";

const Index = props => {
  return (
    <Consumer>
      {value => {
        return (
          <React.Fragment>
            <Search value={value} {...props} />
            {value.list_active && <Tracks />}
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default Index;
