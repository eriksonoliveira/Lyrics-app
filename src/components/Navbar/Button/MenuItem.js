import React from "react";
import { Link } from "react-router-dom";
import { lowercaseFirstLetter } from "../../../helpers";

const MenuItem = props => {
  const routeLowerCase = lowercaseFirstLetter(props.route);

  return (
    <div className="menu-item">
      <Link className="menu-item-link" to={`/${routeLowerCase}`}>
        {props.route}
      </Link>
    </div>
  );
};

export default MenuItem;
