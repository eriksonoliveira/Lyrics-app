import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

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
        <Link id="about" className="menu-item" to="/About">
          About
        </Link>
      </Menu>
    </div>
  );
};

export default MenuButton;
