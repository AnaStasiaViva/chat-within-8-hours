import React, { useState, useEffect, useCallback } from "react";
import ChatItem from "../ChatItem";
import Header from "../Header";
import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";

import { messages } from "../../temp-data/data";
import { chatActions } from "../../redux/slices/chatSlice";

const ChatList = () => {
  const dispatch = useDispatch();

  const [selectedChat, setSelectedChat] = useState(1);

  const onSelectChat = useCallback(
    (val) => {
      setSelectedChat(val);
      dispatch(chatActions.setActiveChatId(val));
    },
    [selectedChat]
  );

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
