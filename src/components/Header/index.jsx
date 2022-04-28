import React from "react";
import "./styles.scss";
import ChatI from "../../assets/Shape.png";

const Header = ({ title = "", icon }) => {
  return (
    <div className="HeaderContainer">
      {icon === true && (
        <div className="icon">
          <img src={ChatI} alt=""></img>
        </div>
      )}

      <span>{title}</span>
    </div>
  );
};

export default Header;
