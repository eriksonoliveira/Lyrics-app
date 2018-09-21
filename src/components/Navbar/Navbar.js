import React from "react";

const Navbar = props => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">{props.children}</nav>
  );
};

export default Navbar;
