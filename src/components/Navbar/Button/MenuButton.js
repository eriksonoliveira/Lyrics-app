import React from "react";

const MenuButton = () => {
  return (
    <span className="navbar-btn" onClick={console.log("Menu")}>
      <img
        className="navbar-btn-icon"
        src={require("./Images/menu-icon.png")}
        alt="Menu"
      />
    </span>
  );
};

export default MenuButton;
