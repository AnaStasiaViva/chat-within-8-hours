import React from "react";
import Avatar from "../Avatar";
import Time from "../Time";
import "./styles.scss";

const Message = ({ my = false, main = false, messages }) => {
  //my true false
  //main avatar true false

  const { name, message } = messages[0];

  return (
    <div className="Message">
      <div className="avatar">
        <Avatar contactName={name} />
      </div>

      {message?.map((msg) => (
        <div className={msg.my ? "message own right" : "message sender left"}>
          <div>
            <p>{msg.messageContent}</p>
            <Time />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Message;
