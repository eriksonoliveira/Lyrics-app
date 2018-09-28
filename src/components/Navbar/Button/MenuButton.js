import React from "react";
import { slide as Menu } from "react-burger-menu";

const MenuButton = () => {
  return (
    <div className="menu">
      <Menu
        customBurgerIcon={
          <img
            className="navbar-btn-icon"
            src={require("./Images/menu-icon.png")}
            alt="Menu"
          />
        }
      >
        <a id="about" className="menu-item" href="/">
          About
        </a>
      </Menu>
    </div>
  );
};

export default MenuButton;
