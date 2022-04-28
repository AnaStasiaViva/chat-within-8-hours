import React, { useEffect, useCallback } from "react";
import Header from "../Header";
import Input from "../Input";
import Message from "../Message";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../../redux/slices/chatSlice";
import { getMessageList } from "../../redux/thunk/chatThunk";

import "./styles.scss";

const Chat = () => {
  const { chatsAll, messagesAll, chatId, chatTitle } = useSelector(
    (state) => state.chatReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(chatActions.setChatTitle());
  }, [chatId]);

  //FETCH MESSAGES
  const fetchMessages = useCallback(() => {
    dispatch(getMessageList(chatId));
  }, [chatId, dispatch]);

  useEffect(() => {
    if (chatsAll && chatsAll.length !== 0 && chatId === null)
      dispatch(chatActions.setChatId(chatId));
  }, [chatsAll, chatId, dispatch]);

  useEffect(() => {
    if (chatsAll && chatsAll.length !== 0 && chatId !== null) fetchMessages();
  }, [chatId]);

  return (
    <div className="ChatContainer">
      <Header title={chatTitle} icon={true} />
      <Message messages={messagesAll} />
      <Input />
    </div>
  );
};

export default Chat;
