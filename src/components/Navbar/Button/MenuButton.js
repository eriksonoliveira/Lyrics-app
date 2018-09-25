import React from "react";

const MenuButton = () => {
  return (
    <span className="navbar-btn">
      <img
        className="navbar-btn-icon"
        src={require("./Images/menu-icon.png")}
        alt="Menu"
      />
    </span>
  );
};

export default MenuButton;
