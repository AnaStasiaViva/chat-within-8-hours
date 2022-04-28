import { createSlice } from "@reduxjs/toolkit";
import { messages } from "../../temp-data/data";
import { getChatList, getMessageList } from "../thunk/chatThunk";

const initialState = {
  //POST REQUEST
  chats: messages,
  chat: [messages[0]],
  activeChatId: 1,

  //GET REQUEST API DATA
  chatId: null,
  status: null, // for spinner
  chatsAll: [],
  messagesAll: [],
  chatTitle: "",
};

export const { actions: chatActions, reducer: chatReducer } = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setActiveChatId(state, { payload }) {
      state.activeChatId = payload;
    },

    setChatId(state, { payload }) {
      state.chatId = payload;
    },
    setChatTitle(state) {
      if (state.chatId !== null) {
        return state.chatsAll.find((el) => {
          if (el.id === state.chatId) state.chatTitle = el.title;
        });
      }
    },

    //INPUT ADD MESSAGE || FILE SYSTEM
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

  extraReducers: {
    [getChatList.pending]: (state) => {
      state.status = "loading";
    },
    [getChatList.fulfilled]: (state, { payload }) => {
      const { response } = payload;
      state.chatsAll = [...response];
      state.status = "success";
    },
    [getChatList.rejected]: (state) => {
      state.status = "failed";
    },
    [getMessageList.pending]: (state) => {
      state.status = "loading";
    },
    [getMessageList.fulfilled]: (state, { payload }) => {
      const { response } = payload;
      state.messagesAll = [...response].reverse();
      state.status = "success";
    },
    [getMessageList.rejected]: (state) => {
      state.status = "failed";
    },
  },
});
