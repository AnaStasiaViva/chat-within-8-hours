import React, { useRef } from "react";
import Avatar from "../Avatar";
import { NewMessage } from "../SystemMessages";
import Time from "../Time";
import "./styles.scss";
import { formatDate } from "../../utils/helper";
import { MarkedIcon } from "../Icons";

const Message = ({ messages }) => {
  const prev = useRef();

  return (
    <div className="Message">
      {messages &&
        messages.length !== 0 &&
        messages?.map((msg) => {
          const shouldRenderAvatar =
            (msg.user.you === false &&
              prev.current &&
              msg.user.you !== prev.current?.user.you) ||
            msg.user.you === false;

          const shouldSendSystemMessage =
            msg.is_new === true &&
            prev.current &&
            msg.is_new !== prev.current?.is_new;

          prev.current = msg;

          return (
            <>
              {shouldSendSystemMessage && <NewMessage />}
              {shouldRenderAvatar && (
                <div className="avatar">
                  <Avatar
                    img={msg.user.avatar}
                    contactName={msg.user.name}
                    lastname={msg.user.surname}
                  />
                </div>
              )}

              {msg.message !== "" && (
                <div
                  className={
                    msg.user.you ? "message own right  " : "message sender left"
                  }
                >
                  <div
                    style={
                      msg.user.you
                        ? { background: "rgba(64, 126, 201, 0.16)" }
                        : { background: "#f3f3f3" }
                    }
                  >
                    <p>{msg.message}</p>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: "7px",
                      }}
                    >
                      <Time
                        time={formatDate(msg)}
                        style={{
                          display: "flex",
                          alignSelf: "end",
                          justifyContent: "flex-end",
                        }}
                      />
                      <MarkedIcon />
                    </p>
                  </div>
                </div>
              )}

              {msg.image && msg.image.length !== 0 && (
                <div
                  className={
                    msg.user.you ? "message own right" : "message sender left"
                  }
                >
                  <div>
                    <img src={msg?.image[0].data_url} alt=""></img>

                    <Time
                      time={formatDate(msg)}
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
