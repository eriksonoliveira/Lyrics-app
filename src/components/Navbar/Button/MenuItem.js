import React from "react";
import { Link } from "react-router-dom";
import { formatRouteName } from "../../../helpers";

const MenuItem = props => {
  const routeName = formatRouteName(props.route);

  return (
    <div className="menu-item">
      <Link className="menu-item-link" to={props.route}>
        {routeName}
      </Link>
    </div>
  );
};

export default MenuItem;
