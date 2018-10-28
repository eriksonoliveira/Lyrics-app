import React from "react";
import { slide as Menu } from "react-burger-menu";
import MenuItem from "./MenuItem";
import Signout from "../../Signout/Signout";

const MenuButton = props => {
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
        <MenuItem route={"About"} />
        {props.loggedIn || <MenuItem route={"Login"} />}
        {props.loggedIn && <Signout />}
      </Menu>
    </div>
  );
};

export default MenuButton;
