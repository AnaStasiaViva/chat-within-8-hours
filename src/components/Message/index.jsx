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
          const shouldRenderAvatar =
            (msg.my === false && prev.current && msg.my !== prev.current?.my) ||
            (msg.my === false && msg.id === 1);

          prev.current = msg;

          return (
            <>
              {shouldRenderAvatar && (
                <div className="avatar">
                  <Avatar contactName={name} />
                </div>
              )}

              {msg.messageContent !== "" && (
                <div
                  className={
                    msg.my ? "message own right" : "message sender left"
                  }
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>{msg.messageContent}</p>
                    {msg.image && msg.image?.length !== 0 && (
                      <img src={msg?.image[0].data_url} alt=""></img>
                    )}

                    <Time
                      style={{
                        display: "flex",
                        alignSelf: "end",
                        justifyContent: "flex-end",
                      }}
                    />
                  </div>
                </div>
              )}
            </>
          );
        })}
    </div>
  );
};

export default Message;
