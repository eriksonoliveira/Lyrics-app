import React from "react";
import { slide as Menu } from "react-burger-menu";
import MenuItem from "./MenuItem";

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
        <MenuItem />
      </Menu>
    </div>
  );
};

export default MenuButton;
