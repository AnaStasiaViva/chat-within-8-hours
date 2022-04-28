import { createAsyncThunk } from "@reduxjs/toolkit";
import chatService from "../../api/index";

export const getChatList = createAsyncThunk("chat/getChatList", async () => {
  try {
    const res = await chatService.getChats();
    return {
      ...res.data,
    };
  } catch {
    return null;
  }
});

export const getMessageList = createAsyncThunk(
  "chat/getMessageList",
  async (chat_id) => {
    try {
      const res = await chatService.getMessages(chat_id);
      return {
        ...res.data,
      };
    } catch {
      return null;
    }
  }
);
