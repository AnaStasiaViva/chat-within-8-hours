import React from "react";
import "./styles.scss";

const Time = ({ time = "21:30" }) => {
  return (
    <>
      <span>{time}</span>
      <span></span>
    </>
  );
};

export default Time;
