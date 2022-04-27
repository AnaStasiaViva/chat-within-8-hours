import { createSlice } from "@reduxjs/toolkit";
import { messages } from "../../temp-data/data";

const initialState = {
  chats: messages,
  chat: [messages[0]],
  activeChatId: 1,
};

export const { actions: chatActions, reducer: chatReducer } = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setActiveChatId(state, { payload }) {
      state.activeChatId = payload;
    },
    setSelectedChat(state) {
      state.chat = state.chats.filter((item) => item.id === state.activeChatId);
    },
    addMessage(state, { payload }) {
      const idx = state.chats.findIndex((el) => el.id === state.activeChatId);
      const newMsg = {
        id: Math.random() * 1000,
        messageContent: payload.text,
        my: true,
        image: payload.images,
      };
      state.chats[idx]?.message.push(newMsg);
      state.chat[0]?.message.push(newMsg);
    },
  },
});
