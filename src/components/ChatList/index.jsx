import React, { useState } from "react";
import ChatItem from "../ChatItem";
import Header from "../Header";
import "./styles.scss";

import { messages } from "../../temp-data/data";

const ChatList = () => {
  const [selectedChat, setSelectedChat] = useState(1);

  const onSelectChat = (val) => {
    setSelectedChat(val);
  };

  return (
    <div className="ChatListContainer">
      <Header title="All chats" icon={false} />
      <div>
        {messages?.map((msg) => (
          <div onClick={() => onSelectChat(msg.id)}>
            <ChatItem key={msg.id} data={msg} selectedChat={selectedChat} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
