import React from "react";
import Avatar from "../Avatar";
import Header from "../Header";
import { ChatIcon } from "../Icons";

import Input from "../Input";
import Message from "../Message";
import { NewMessage, TimeMessage } from "../NewMessage";
import "./styles.scss";

const Chat = () => {
  return (
    <div className="ChatContainer">
      <Header title="Great project" icon={true} />
      <div className="avatar">
        <Avatar />
        <div className="message-wrapper">
          <Message />
          <Message />
        </div>
      </div>
      <NewMessage />
      <TimeMessage />
      <Input />
    </div>
  );
};

export default Chat;
