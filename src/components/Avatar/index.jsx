import React from "react";
import "./styles.scss";

const Avatar = ({ contactName = "Great project", img, lastname = "" }) => {
  return (
    <div className="AvatarContainer">
      <div className="img-wrapper">
        <img src={img} alt="" />
      </div>
      <div className="content">
        <div>
          <span>
            {contactName}
            <span> {lastname}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
