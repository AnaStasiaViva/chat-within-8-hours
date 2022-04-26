import React from "react";
import owl from "../../assets/owl.jpeg";
import "./styles.scss";

const ChatItem = () => {
  return (
    <div className="ChatItemContainer">
      <div className="img-wrapper">
        <img src={owl} alt="" />
      </div>
      <div className="content">
        <div>
          <span>Great project</span>
          <span>12:07</span>
        </div>
        <div>
          <p>Good news, the mobile app will be rea...</p>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
