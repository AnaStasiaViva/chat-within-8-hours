import React from "react";
import Avatar from "../Avatar";
import Time from "../Time";
import "./styles.scss";

//temp data
import { message } from "../../temp-data/data";

const Message = ({ my = false, main = false }) => {
  //my true false
  //main avatar true false
  return (
    <div className="Message">
      <div className="avatar">
        <Avatar />
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
