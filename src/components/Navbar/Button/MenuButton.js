import React from "react";
import { slide as Menu } from "react-burger-menu";

import MenuItem from "./MenuItem";
import Signout from "../../Signout/Signout";

import * as routes from "../../../constants/routes";

const MenuButton = ({ authUser }) => {
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
        {authUser ? (
          <React.Fragment>
            <MenuItem route={routes.ACCOUNT} />
            <MenuItem route={routes.SAVED_TRACKS} />
            <Signout />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <MenuItem route={routes.SIGN_IN} />
            <MenuItem route={routes.SIGN_UP} />
          </React.Fragment>
        )}
        <MenuItem route={routes.ABOUT} />
      </Menu>
    </div>
  );
};

export default MenuButton;
