import React from "react";
import ChatItem from "../ChatItem";
import Header from "../Header";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../../redux/slices/chatSlice";

const ChatList = () => {
  const { activeChatId, chats } = useSelector((state) => state.chatReducer);
  const dispatch = useDispatch();

  const onSelectChat = (val) => {
    dispatch(chatActions.setActiveChatId(val));
  };

  return (
    <div className="ChatListContainer">
      <Header title="All chats" icon={false} />
      <div>
        {chats?.map((msg) => (
          <div onClick={() => onSelectChat(msg.id)}>
            <ChatItem key={msg.id} data={msg} selectedChat={activeChatId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
