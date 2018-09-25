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
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
      </Menu>
    </div>
  );
  // return (
  //   <span className="navbar-btn">
  //     <img
  //       className="navbar-btn-icon"
  //       src={require("./Images/menu-icon.png")}
  //       alt="Menu"
  //     />
  //   </span>
  // );
};

export default MenuButton;
