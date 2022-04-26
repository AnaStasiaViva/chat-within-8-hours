import React from "react";
import { AttachmentIcon, SendIcon } from "../Icons";
import "./styles.scss";

const Input = () => {
  return (
    <div className="Input">
      <div className="input-wrapper">
        <input type="text" placeholder="Type message"></input>
      </div>
      <div className="actions">
        <div>
          <AttachmentIcon />
        </div>
        <div>
          <SendIcon />
        </div>
      </div>
    </div>
  );
};

export default Input;
