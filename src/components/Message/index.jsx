import React, { useRef } from "react";
import Avatar from "../Avatar";
import Time from "../Time";
import "./styles.scss";

const Message = ({ my = false, main = false, messages }) => {
  //my true false
  //main avatar true false

  const prev = useRef();
  const { name, message } = messages[0];

  return (
    <div className="Message">
      {message &&
        message.length !== 0 &&
        message?.map((msg) => {
          const shouldRenderAva =
            (msg.my === false && prev.current && msg.my !== prev.current?.my) ||
            (msg.my === false && msg.id === 1);

          prev.current = msg;

          return (
            <>
              {shouldRenderAva && (
                <div className="avatar">
                  <Avatar contactName={name} />
                </div>
              )}
              <div
                className={msg.my ? "message own right" : "message sender left"}
              >
                <div>
                  <p>{msg.messageContent}</p>
                  <Time />
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Message;
