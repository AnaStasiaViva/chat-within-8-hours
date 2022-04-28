import React from "react";
import "./styles.scss";
import Time from "../Time/index";
import { formatDate } from "../../utils/helper";

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
        <img src={data.avatar} alt="" />
      </div>
      <div className="content">
        <div>
          <span>
            {data.last_message.user_name}
            <span></span> {data.last_message.user_surname}
          </span>
          <Time time={formatDate(data.last_message)} />
        </div>
        <div>
          <p className="content-text">{data.last_message.message}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
