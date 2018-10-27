import React from "react";
import { Link } from "react-router-dom";

function MenuItem() {
  return (
    <div className="menu-item">
      <Link id="about" to="/About">
        About
      </Link>
    </div>
  );
}

export default MenuItem;
