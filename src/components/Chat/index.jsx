import React, { useEffect } from "react";
import Header from "../Header";
import Input from "../Input";
import Message from "../Message";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../../redux/slices/chatSlice";

import "./styles.scss";

const Chat = () => {
  const { chat, activeChatId } = useSelector((state) => state.chatReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(chatActions.setSelectedChat());
  }, [activeChatId]);

  return (
    <div className="ChatContainer">
      <Header title={chat[0].name} icon={true} />
      <Message messages={chat} />
      <Input />
    </div>
  );
};

export default Chat;
