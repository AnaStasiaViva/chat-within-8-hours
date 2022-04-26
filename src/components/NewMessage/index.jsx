import React from "react";
import "./styles.scss";

export const NewMessage = () => {
  return (
    <div className="NewMessage">
      <div className="message">
        <span>New messages</span>
      </div>
    </div>
  );
};

export const TimeMessage = ({ time = "12.02.2021" }) => {
  return (
    <div className="NewMessage">
      <div className="time">
        <span>{time}</span>
      </div>
    </div>
  );
};
