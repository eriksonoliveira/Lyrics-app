import React from "react";
import { slide as Menu } from "react-burger-menu";

import MenuItem from "./MenuItem";
import Signout from "../../Signout/Signout";

import * as routes from "../../../constants/routes";

const MenuButton = ({ authUser }) => {
  if (authUser) {
    console.log(authUser);
  }
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
        <MenuItem route={routes.ABOUT} />
        {authUser ? <Signout /> : <MenuItem route={routes.SIGN_IN} />}
      </Menu>
    </div>
  );
};

export default MenuButton;
