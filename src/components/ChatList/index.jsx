import React from "react";
import ChatItem from "../ChatItem";
import Header from "../Header";
import "./styles.scss";

const ChatList = () => {
  return (
    <div className="ChatListContainer">
      <Header title="All chats" icon={false} />
      <div>
        <ChatItem />
      </div>
    </div>
  );
};

export default ChatList;
