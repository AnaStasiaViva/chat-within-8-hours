import { createSlice } from "@reduxjs/toolkit";
import { messages } from "../../temp-data/data";

const initialState = {
  chats: messages,
  chat: messages[0],
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
  },
});
