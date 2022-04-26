import React from "react";
import owl from "../../assets/owl.jpeg";
import "./styles.scss";

const ChatItem = ({ data, selectedChat }) => {
  return (
    <div
      className={
        selectedChat === data.id
          ? "ChatItemContainer selected"
          : "ChatItemContainer default"
      }
    >
      <div className="img-wrapper">
        <img src={owl} alt="" />
      </div>
      <div className="content">
        <div>
          <span>{data.name}</span>
          <span>{data.time}</span>
        </div>
        <div>
          <p className="content-text">{data.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
