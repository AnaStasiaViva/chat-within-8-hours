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

export const WarningMessage = () => {
  return (
    <div className="NewMessage ">
      <div className=" extra">
        <span>
          ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ Y НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
        </span>
      </div>
    </div>
  );
};
