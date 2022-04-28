import React, { useCallback, useEffect } from "react";
import "./styles.scss";
import ChatItem from "../ChatItem";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../../redux/slices/chatSlice";
import { getChatList } from "../../redux/thunk/chatThunk";

const ChatList = () => {
  const { chatsAll, chatId } = useSelector((state) => state.chatReducer);
  const dispatch = useDispatch();

  //SET SELECTED CHAT
  const onSelectChat = (val) => {
    dispatch(chatActions.setChatId(val));
  };

  //FETCH CHATS
  const fetchChats = useCallback(() => {
    dispatch(getChatList());
  }, [chatsAll]);

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div className="ChatListContainer">
      <Header title="All chats" icon={false} />
      <div>
        {chatsAll?.map((msg) => (
          <div onClick={() => onSelectChat(msg.id)}>
            <ChatItem key={msg.id} data={msg} selectedChat={chatId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
