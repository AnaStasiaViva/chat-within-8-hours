import React from "react";
import "./styles.scss";

const Time = ({ time = "21:30" }) => {
  return (
    <>
      <span>{time}</span>
    </>
  );
};

export default Time;
