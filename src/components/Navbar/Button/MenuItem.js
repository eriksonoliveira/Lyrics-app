import React from "react";
import { Link } from "react-router-dom";
import { helpers } from "../../../helpers";

const MenuItem = props => {
  const routeName = helpers.formatRouteName(props.route);

  return (
    <div className="menu-item">
      <Link className="menu-item-link" to={props.route}>
        {routeName}
      </Link>
    </div>
  );
};

export default MenuItem;
