import React from "react";
import Chat from "../components/Chat";
import ChatList from "../components/ChatList";

import "./styles.scss";

const MainChatPage = () => {
  return (
    <div className="MainChatPage">
      <ChatList />
      <Chat />
    </div>
  );
};

export default MainChatPage;
