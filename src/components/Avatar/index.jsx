import React from "react";
import "./styles.scss";

//temp data
import owl from "../../assets/owl.jpeg";

const Avatar = ({ contactName = "Great project" }) => {
  return (
    <div className="AvatarContainer">
      <div className="img-wrapper">
        <img src={owl} alt="" />
      </div>
      <div className="content">
        <div>
          <span>{contactName}</span>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
