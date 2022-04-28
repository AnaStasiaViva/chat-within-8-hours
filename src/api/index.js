import axios from "axios";
import qs from "qs";

const instance = axios.create({
  baseURL: "https://api.clout.one/test",
  timeout: 1000,
  paramsSerializer: (params) => qs.stringify(params),
});

const chatService = {
  getChats: () =>
    instance.get("/chat.get", {
      params: {
        offset: 0,
        limit: 20,
      },
    }),
  getMessages: (params) =>
    instance.get("/message.get", {
      params: {
        chat_id: params,
        offset: 0,
        limit: 20,
      },
    }),
};

export default chatService;
