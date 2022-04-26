import React from "react";
import Avatar from "../Avatar";
import Time from "../Time";
import "./styles.scss";
import { useSelector } from "react-redux";

//temp data
// import { messages } from "../../temp-data/data";

const Message = ({ my = false, main = false, messages }) => {
  //my true false
  //main avatar true false

  const { chat } = useSelector((state) => state.chatReducer);

  console.log(messages, "REDUX messages==");

  return (
    <div className="Message">
      <div className="avatar">
        <Avatar />
      </div>

      {/* {chat &&
        chat?.map((msg) =>
          msg.map((mess) => (
            <div
              className={mess.my ? "message own right" : "message sender left"}
            >
              <div>
                <p>{mess.messageContent}</p>
                <Time />
              </div>
            </div>
          ))
        )} */}

      {/* {chat &&
        chat?.map((msg) =>
          msg.map((mess) => (
            <div
              className={mess.my ? "message own right" : "message sender left"}
            >
              <div>
                <p>{mess.messageContent}</p>
                <Time />
              </div>
            </div>
          ))
        )} */}

      {/* {chat[0].message?.map((msg) => (
        <div className={msg.my ? "message own right" : "message sender left"}>
          <div>
            <p>{msg.messageContent}</p>
            <Time />
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Message;

//  {/* {messages?.map((msg) =>
//         msg.message.map((message) => (
//           <div
//             className={message.my ? "message own right" : "message sender left"}
//           >
//             <div>
//               <p>{message.messageContent}</p>
//               <Time />
//             </div>
//           </div>
//         ))
//       )} */}
