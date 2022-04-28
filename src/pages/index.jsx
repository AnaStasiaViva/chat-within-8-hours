import React, { useEffect, useState } from "react";
import Chat from "../components/Chat";
import ChatList from "../components/ChatList";
import { WarningMessage } from "../components/SystemMessages";
import { debounce } from "../utils/helper";
import "./styles.scss";

const MainChatPage = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 500);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return (
    <div className="MainChatPage">
      {dimensions.width <= 700 ? (
        <WarningMessage />
      ) : (
        <>
          <ChatList />
          <Chat />
        </>
      )}
    </div>
  );
};

export default MainChatPage;
