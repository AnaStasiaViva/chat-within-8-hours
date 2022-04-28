import React, { useState, useEffect } from "react";
import { SendIcon } from "../Icons";
import ImageUpload from "../ImageUpload";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../../redux/slices/chatSlice";
import _ from "lodash";

//addMessage

const Input = () => {
  const { activeChatId, chats, chat } = useSelector(
    (state) => state.chatReducer
  );

  const dispatch = useDispatch();

  const [textMessage, setTextMessage] = useState({
    text: "",
    images: [],
  });

  const maxNumber = 3;

  const delayedQuery = _.debounce((q) => setTextMessage(q), 500);

  //IMAGE UPLOAD
  const onChangeImage = (imageList, addUpdateIndex) => {
    setTextMessage((prev) => ({
      ...prev,
      images: imageList,
    }));
  };

  //MESSAGE
  const onChangeText = (e) => {
    setTextMessage((prev) => ({
      ...prev,
      text: e.target.value.trim(),
    }));

    delayedQuery((prev) => ({
      ...prev,
      text: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (textMessage?.text === "" || textMessage?.images.length === 0) return;
    dispatch(chatActions.addMessage(textMessage));
    setTextMessage(() => ({
      text: "",
      images: [],
    }));
  };

  return (
    <div className="Input">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Type message"
            value={textMessage.text}
            onChange={(e) => onChangeText(e)}
          ></input>
        </div>
        <div className="actions">
          <div>
            <ImageUpload
              images={textMessage.images}
              maxNumber={maxNumber}
              onChange={onChangeImage}
            />
          </div>
          <div>
            <button type="submit">
              <SendIcon />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Input;
