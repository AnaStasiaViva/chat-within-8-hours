import React from "react";
import "./styles.scss";

import { ChatIcon } from "../Icons";

const Header = ({ title = "", icon }) => {
  console.log(icon, "icon status");
  return (
    <div className="HeaderContainer">
      {icon === true && <ChatIcon />}
      <span>{title}</span>
    </div>
  );
};

export default Header;
