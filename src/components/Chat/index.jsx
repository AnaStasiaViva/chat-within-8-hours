import React from "react";
import Header from "../Header";
import Input from "../Input";
import Message from "../Message";

import "./styles.scss";

const Chat = () => {
  return (
    <div className="ChatContainer">
      <Header title="Great project" icon={true} />
      <Message />
      <Input />
    </div>
  );
};

export default Chat;
